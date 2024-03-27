import md, { type Link, type Text } from 'markdown-ast'
import { type DefaultTheme } from 'vitepress'
import { Block, MethodDeclaration, Project, SyntaxKind } from "ts-morph"
import { join } from 'node:path'
import { rename, unlink } from 'node:fs/promises'
import { fetchEmbedIframeUrl, getEmbedUrlMap } from './iframe.mts'

async function saveConfigFile(sidebarData: DefaultTheme.SidebarItem[], embedUrlMap: Record<string, string>, vitepressConfigFilePath: string) {
  // initialize
  const project = new Project({
    tsConfigFilePath: './tsconfig.json'
  })
  const file = project.addSourceFileAtPath(vitepressConfigFilePath)
  const exportAssignment = file.getExportAssignmentOrThrow(exportAssignment => true)
  const objectLiteral = exportAssignment.getFirstDescendantByKindOrThrow(SyntaxKind.ObjectLiteralExpression)
  const themeConfig = objectLiteral.getPropertyOrThrow('themeConfig')
  const properties = themeConfig.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression)
  const sidebar = properties!.getPropertyOrThrow('sidebar')
  const elements = sidebar.getFirstDescendantByKind(SyntaxKind.ArrayLiteralExpression)
  // clear
  if (elements) {
    for (let i = elements.getElements().length - 1; i >= 0; i--) {
      elements.removeElement(i)
    }
  }
  // add sidebar data
  // elements?.addElements(sidebarData.map(createSidebarItem))

  elements?.addElements(sidebarData.map(item => JSON.stringify(item)))

  // markdownItGitbookPlugin options with embedUrls
  // const markdownConfig = objectLiteral.getPropertyOrThrow('markdown')

  // 使用ast 修改下面的结构体里的embedUrls
  // markdown: {
  //   config(md) {
  //     md.use(markdownItGitbookPlugin, {
  //       embedUrls: {}
  //     })
  //   }
  // }
  // const mdProperties = markdownConfig.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression)
  // const mdConfig = mdProperties!.getPropertyOrThrow('config') as MethodDeclaration
  // mdConfig is MethodDeclaration
  // const mdConfigBody = mdConfig.getBodyOrThrow() as Block
  // save
  await project.save()
  const configFile = Bun.file(vitepressConfigFilePath)

  const configContent = await configFile.text()
  const newConfigContent = configContent.replace(/embedUrls: {}/g, `embedUrls: ${JSON.stringify(embedUrlMap, null, 2)}`)
  await Bun.write(vitepressConfigFilePath, newConfigContent)
}

async function scanDocs(sourceDir: string) {
  const blob = new Bun.Glob('**/*.md')
  for await (const path of blob.scan({ cwd: sourceDir })) {
    const file = Bun.file(join(sourceDir, path))
    const content = await file.text()
    // 匹配下面的规则
    // {% embed url="https://www.bilibili.com/video/BV1w24y1U7fx" %}
    const matched = content.matchAll(/{%\s*embed\s+url="([^"]+)"\s*%}/g)
    if (matched) {
      const urls = []
      for (const match of matched) {
        urls.push(match[1])
      }
      await Promise.all(urls.map(fetchEmbedIframeUrl))
    }
  }
}

export async function convert(sourceDir: string) {
  // scan docs, prepare iframe data
  await scanDocs(join(sourceDir, 'docs'))
  const vitepressConfigFilePath = join(sourceDir, '.vitepress/config.ts')
  // rename README.md to index.md
  await rename(join(sourceDir, 'docs/README.md'), join(sourceDir, 'docs/index.md'))
  const summaryFile = Bun.file(join(sourceDir, 'docs/SUMMARY.md'))
  let summary = await summaryFile.text()
  // remove summary file
  await unlink(join(sourceDir, 'docs/SUMMARY.md'))
  // replace for specific scene
  summary = summary.replace(/<(.+\.md)>/g, (_, s) => s.replace(/\(/g, '\\(').replace(/\)/g, '\\)'))
  const ast = md(summary)
  // sidebar data
  const sidebarData: DefaultTheme.SidebarItem[] = []
  // current sidebar tree node
  const treeStack: DefaultTheme.SidebarItem[] = []
  let prevLevel = 0
  for (const line of ast) {
    // title
    if (line.type === 'title') {
      // toc
      if (line.rank === 1) {
        //
      } else if (line.rank === 2) {
        //
      }

    } else if (line.type === 'list') {
      const level = line.indent.length / 2
      const link = line.block[0] as Link
      const block = link.block[0] as Text
      const url = link.url.replace(/\.md$/, '')
      const item: DefaultTheme.SidebarItem = {
        text: block.text,
        link: url === 'README' ? '/' : url.replace(/\\\(/, '(').replace(/\\\)/, ')')
      }
      const prev = treeStack[treeStack.length - 1]
      if (level > prevLevel) {
        if (!prev.items) {
          prev.items = []
        }
        if (prevLevel === 0) {
          prev.collapsed = true
        } else {
          prev.collapsed = false
        }
        treeStack.push(item)
      } else if (level === prevLevel) {
        if (!prev) {
          treeStack.push(item)
        } else {
          treeStack[treeStack.length - 1] = item
        }
      } else {
        for (let i = 0; i < prevLevel - level; i++) {
          treeStack.pop()
        }
        treeStack[treeStack.length - 1] = item
      }
      const parent = treeStack.length >= 2 ? treeStack[treeStack.length - 2] : undefined
      if (!parent) {
        sidebarData.push(item)
      } else {
        parent.items!.push(item)
      }
      prevLevel = level
    }
  }
  saveConfigFile(sidebarData, getEmbedUrlMap(), vitepressConfigFilePath)
}

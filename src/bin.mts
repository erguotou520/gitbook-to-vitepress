import { execSync } from 'node:child_process'
import { cp, exists, mkdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { convert } from './convert'

const args = process.argv.slice(2)
const [projectUrl, branch] = args

const tempDownloadDir = join(process.cwd(), '.temp_download')
const docsDir = join(tempDownloadDir, 'docs')

async function ensureFile(filePath: string) {
  const target = join(tempDownloadDir, filePath)
  if (!await exists(target)) {
    await mkdir(join(tempDownloadDir, dirname(filePath)), { recursive: true })
    await cp(join('./template', filePath), target)
  }
}

async function run() {
  if (!projectUrl) {
    return console.log('Please provide the git url of the gitbook project as the first argument.')
  }
  // check git exists
  try {
    execSync('git --version')
  } catch (e) {
    return console.log('Please install git first.')
  }
  // if project already exists, pull the latest changes
  let isProjectExists = await exists(docsDir)
  if (isProjectExists) {
    isProjectExists = true
    console.log('Project already exists, pulling latest changes...')
    try {
      execSync(`git reset --hard && git pull`, {
        cwd: docsDir,
        stdio: 'inherit'
      })
    } catch (e) {
      // ignore error if no changes
      console.error(e)
      return
    }
  } else {
    // clone the gitbook project
    try {
      execSync(`git clone --depth 1 ${projectUrl}${branch ? ` -b ${branch}` : ''} ${docsDir}`, {
        cwd: process.cwd(),
        stdio: 'inherit'
      })
    } catch (e) {
      console.error(e)
      return
    }
  }
  // ensure files
  await ensureFile('.vitepress/config.ts')
  await ensureFile('.gitignore')
  await ensureFile('package.json')
  await convert(tempDownloadDir)
  // install
  // execSync('bun install', {
  //   cwd: tempDownloadDir,
  //   stdio: 'inherit'
  // })
  // // run build
  // execSync('bun run build', {
  //   cwd: tempDownloadDir,
  //   stdio: 'inherit'
  // })
  // console.log(`🥂 Done! The output is in ${join(tempDownloadDir, '.vitepress/dist')}.`)
}

run()
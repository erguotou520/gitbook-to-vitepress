
const blob = new Bun.Glob('**/*.md')
for await (const file of blob.scan('.temp_download/docs')) {
  console.log(file)
}
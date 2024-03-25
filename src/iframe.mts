const urlMap: Record<string, string> = {
}

export async function fetchEmbedIframeUrl(url: string) {
  if (urlMap[url]) return urlMap[url]
  try {
    const resp = await fetch(`http://iframe.ly/api/oembed?url=${url}&api_key=${process.env["IFRAMELY_API_KEY"]}`)
    const data = await resp.json()
    console.log(data)
    urlMap[url] = data.html
    return data.html
  } catch (e) {
    return url
  }
}
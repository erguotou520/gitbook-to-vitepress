const urlMap: Record<string, string> = {}

export async function fetchEmbedIframeUrl(url: string) {
  try {
    if (urlMap[url]) {
      return urlMap[url]
    }
    // with cf worker cache
    const resp = await fetch(`https://api.embed.fireboom.io?api=1&url=${url}&api_key=${process.env["IFRAMELY_API_KEY"]}`)
    const data = await resp.json() as { html: string }
    console.log(data.html)
    urlMap[url] = data.html
    return data.html
  } catch (e) {
    return url
  }
}

export function getEmbedUrlMap() {
  return urlMap
}
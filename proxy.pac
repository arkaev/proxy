var needProxyDomains = [
    "youtube.com", "ggpht.com", "googlevideo.com", "ytimg.com", // youtube
    "x.com", "t.co", "twimg.com", "twitter.com", // twitter
    "reddit.com", "medium.com", "linkedin.com",
    "instagram.com", "cdninstagram.com", // instagram
    "news.google.com", "meduza.io", // news
    "jetbrains.com",
    "hetzner.com"
];

function FindProxyForURL(url, host) {
    for (var i = 0; i < needProxyDomains.length; i++) {
        if (dnsDomainIs(host, needProxyDomains[i])) {
            return "PROXY 127.0.0.1:2080";
        }
    }

    return "DIRECT";
}

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

if (workbox) {
  // ref: https://developers.google.com/web/tools/workbox/guides/get-started
  // ref: http://taobaofed.org/blog/2018/08/08/workbox3/
  console.log(`Yay! Workbox is loaded 🎉`)

  workbox.routing.registerRoute(
    new RegExp('.*\.html'),
    new workbox.strategies.NetworkFirst()
  )

  workbox.routing.registerRoute(
    new RegExp('.*\.(?:js|css|ttf)'),
    new workbox.strategies.CacheFirst()
  )

  workbox.routing.registerRoute(
    new RegExp('https://cdnjs\.cloudflare\.com/'),
    new workbox.strategies.StaleWhileRevalidate()
  )

  workbox.routing.registerRoute(
    new RegExp('https://i\.loli\.net/'),
    new workbox.strategies.CacheFirst({
      cacheName: 'blog:img'
    })
  )
} else {
  // ref: https://www.jeffzou.com/2018/08/15/js/
  console.log(`Boo! Workbox didn't load 😬`)
  // workbox无法使用情况下的兼容
  self.addEventListener('install', e => {
    console.log('sw installed')
    e.waitUntil(
      caches.open('blog')
        .then(cache => cache.addAll([
          '/index.html',
          '/manifest.json',
          '/assets/font/3icon.ttf',
          '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
          '//cdnjs.cloudflare.com/ajax/libs/jquery.pjax/2.0.1/jquery.pjax.min.js',
          '//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.js',
          '//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/contrib/auto-render.min.js',
          '/assets/js/pinyin-match.js',
          '/assets/js/clipboard.min.js',
          "//cdn.staticfile.org/twikoo/1.6.22/twikoo.all.min.js",
          '/assets/js/script.js',
          '/assets/css/style.css',
          '/assets/css/3icon.css',
          '//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css'
        ]))
    )
  })

  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(cachedRes => {
          if (cachedRes) {
            console.log('use cached resource:', event.request.url)
            return cachedRes
          };
          var fetchRequest = event.request.clone()
          return fetch(fetchRequest).then(res => {
            return res
          })
        })
    )
  })
}
// workbox.precaching.precacheAndRoute([
//   '/assets/js/av-min.js',
// ])

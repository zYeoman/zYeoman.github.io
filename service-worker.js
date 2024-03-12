importScripts('assets/js/workbox-sw.js')

if (workbox) {
  // ref: https://developers.google.com/web/tools/workbox/guides/get-started
  // ref: http://taobaofed.org/blog/2018/08/08/workbox3/
  console.log(`Yay! Workbox is loaded 🎉`)

  // workbox.precaching.precacheAndRoute([
  //   '/assets/js/av-min.js',
  // ])

  workbox.routing.registerRoute(
    new RegExp('.*\.html$'),
    new workbox.strategies.NetworkFirst()
  )

  workbox.routing.registerRoute(
    new RegExp('.*\.(?:js|css|ttf|woff|woff2|eot|svg|png|jpg)$'),
    new workbox.strategies.CacheFirst()
  )

  workbox.routing.registerRoute(
    '/assets/js/script.js',
    new workbox.strategies.StaleWhileRevalidate()
  )

  workbox.routing.registerRoute(
    '/service-worker.js',
    new workbox.strategies.StaleWhileRevalidate()
  )

  workbox.routing.registerRoute(
    '/assets/js/script.css',
    new workbox.strategies.StaleWhileRevalidate()
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
}

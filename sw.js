// This is the "Offline page" service worker

const CACHE = 'pwabuilder-page'

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = 'index.html'

// Install stage sets up the offline page in the cache and opens a new cache
window.addEventListener('install', function (event) {
  console.log('[PWA Builder] Install Event processing')

  event.waitUntil(
    window.caches.open(CACHE).then(function (cache) {
      console.log('[PWA Builder] Cached offline page during install')

      if (offlineFallbackPage === 'index.html') {
        return cache.add(new window.Response('TODO: Update the value of the offlineFallbackPage constant in the serviceworker.'))
      }

      return cache.add(offlineFallbackPage)
    })
  )
})

// If any fetch fails, it will show the offline page.
window.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return

  event.respondWith(
    window.fetch(event.request).catch(function (error) {
      // The following validates that the request was for a navigation to a new document
      if (
        event.request.destination !== 'document' ||
          event.request.mode !== 'navigate'
      ) {
        return
      }

      console.error('[PWA Builder] Network request Failed. Serving offline page ' + error)
      return window.caches.open(CACHE).then(function (cache) {
        return cache.match(offlineFallbackPage)
      })
    })
  )
})

// This is an event that can be fired from your page to tell the SW to update the offline page
window.addEventListener('refreshOffline', function () {
  const offlinePageRequest = new window.Request(offlineFallbackPage)

  return window.fetch(offlineFallbackPage).then(function (response) {
    return window.caches.open(CACHE).then(function (cache) {
      console.log('[PWA Builder] Offline page updated from refreshOffline event: ' + response.url)
      return cache.put(offlinePageRequest, response)
    })
  })
})

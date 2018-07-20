/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","14062e6e39a2196f052d428d2eebd57d"],["/blog/7z-extract-and-zip.html","714a86c0ff4225f2c45e2f1152ce031c"],["/blog/A-bug-in-python-about-import.html","024b0f494c3028907795e6a41119dcd2"],["/blog/A-script-every-day-1.html","32fd02a1934a598135c7f4863bec0824"],["/blog/DOS-rename-many-txt.html","6e69bde2f89ab980b4c36d9ec881e435"],["/blog/English-punctuation-to-Chinese-punctuation.html","db630c8a37f4b1ec41068a4ffa320af5"],["/blog/How-to-Write-a-Git-Commit-Message.html","f578b85a5cb5ba9c6c42db8ecb94fe23"],["/blog/ISE-error-when-generate-hls-to-pcore.html","5aab405656db15657b8db0187ed24c7a"],["/blog/Interesting-APIs.html","d1b634e9fcc1db10bb38c60d014df65b"],["/blog/Keep-Your-Commits-Atomic.html","8f388eb0e2a55d3625f64a6fc6e8361f"],["/blog/MacType-conflict.html","9c895cd806bbeb746d1bc745cffef8c0"],["/blog/Minor-CPU-model-of-gem5.html","8cd7db28de41dd4a9f0b66314b74a501"],["/blog/Python-translate-maketrans.html","61e327a6d3cfc615e0917526efa5731f"],["/blog/Raspberry-PI-Using.html","b43848424e864e1f4506b02a1b16cb9e"],["/blog/Test-My-Blog.html","4379bc16b21b552c10240e0e81c35850"],["/blog/Xilinx-can-not-find-gpioh.html","86d2b06b2876a0bfd7549f3a494cc04f"],["/blog/android.html","911281cf1fb9dfd3d8ef7338ffefff6f"],["/blog/anime-2016-10.html","3743664074e4bc938afa481d76a1af82"],["/blog/anime-2017-1.html","0c4831b324c7a4846be40918718bbad4"],["/blog/anime-2017-10.html","6aebfcc68fabdf25d0a7327512802dad"],["/blog/anime-2017-4.html","6ee88613a87849b54f098bd346f8765c"],["/blog/anime-2017-7.html","375051b08d163884b74048048e8b174c"],["/blog/anime-2018-01.html","e401b90a4460a1a711bcf427f420a565"],["/blog/anime-2018-7.html","f3f9c700722f3c76f74110eecea4c604"],["/blog/anime-list.html","9c1fb55b76765db92e9a95860c144bcc"],["/blog/archlinux-gui.html","121222c8f3f53b4274ab82ea94a0ed32"],["/blog/archlinux-install.html","8c0f25196118112c5fe040e811240f7c"],["/blog/bat-command-line-parametric.html","0cc3742753d4fc1326f0e408eed4e57b"],["/blog/bat-file-argv.html","d8a27fa3c1e53bca5b24dd65d511184b"],["/blog/bing-to-qqpinyin.html","7a3ed63c93b290cfd06d6bedc5c84081"],["/blog/blog-categries-change.html","d6ae0471fbaa717ee2149c4a71bd8eef"],["/blog/blog-update.html","ad48d0c64d9306c2bf79670cc08d85d5"],["/blog/bookmark.html","97a63c1ddcd4fd5c7fd481b592a1c833"],["/blog/bufanjilu.html","d7e63c994679fea713d3671fc3d47a66"],["/blog/byr-spider.html","e03b8c733ceb8dc10176547915465a72"],["/blog/c-standard-library-learn-1.html","c38f26686b8f80e42f3d9ca9d0c12e32"],["/blog/chinese-hacker.html","605a0631d841674b1a44a181b41bd4a1"],["/blog/choulaobie.html","9580d9d7f5c5e4a1612d0c1a5a2e13ff"],["/blog/chuanyuelishi.html","d530a8fb912a1d4e1d2b8c2a021a0f2d"],["/blog/database-test.html","c3bc49a06666e935465efb47e78ef5b1"],["/blog/diandongche.html","a93b727bbf0b16587eb859c46c917e17"],["/blog/digital-image-processing-hw4.html","c9eee417bd3f96f452b4d6665dbd44ff"],["/blog/fortune-lolcat.html","6a561a70533d53c5ac84a5d2e4021c6e"],["/blog/from-observable-universe-to-planck-length.html","752208fc1bb17e6a455009253c5822a8"],["/blog/fsutil-hardlink-junction-and-ln.html","1ddf1544dbd9a915f79fb5a1409e9e42"],["/blog/geek-tech-internet-browser-to-editor.html","08d3e9460d3dd64b9602ba46c700a4ad"],["/blog/gem5-tutorials.html","6bc2e38fc8699b15750544185639895e"],["/blog/git-undo.html","047fa27b7f83195fe78923d58a201b5a"],["/blog/github-education-pack.html","1375334098fa6066bdfe36c17ecb43be"],["/blog/graduate.html","d51f22111edb25239568b309ba1fb2cc"],["/blog/helloseed-api.html","7fb1cdd3830543583ab3a1a221a2cf68"],["/blog/https-github-pages-custom-domain.html","8de51535035fa0fffdd6fce6d271868f"],["/blog/huawei-P7-error.html","0cf71ef942b5138bb81246191580be91"],["/blog/jekyll-editor-hack.html","bb76d9cdee3dd9914c70c9d900dedb57"],["/blog/linux.html","7a07c33e6c253bbfd000de8c26461a4a"],["/blog/magic-weekly-1.html","6fd6f43a98bc6d0f960b864a23bd28ac"],["/blog/magic-weekly-2.html","92c741e5e3a0b4b97d69bf5d247c7444"],["/blog/magic-weekly-3.html","8cd3559c001899a37cc2c64db937cf44"],["/blog/magic-weekly-4.html","e7636ed6f213dc3ca0cfa6cfb5c68fd7"],["/blog/magic-weekly-5.html","1d38a968469877211bdaf474184226a3"],["/blog/magic-weekly-6.html","6fca2e0ede1a3bce36a2b0ebd0952020"],["/blog/malatang.html","dd6227a7064c5f9d7cc5b4baf0d36d6e"],["/blog/markdown-extended-latex.html","7508f241dcde51e36b56b94885a9e4f8"],["/blog/master-interview.html","57abbb8453ed8b23bbbf800a79b6551b"],["/blog/midnight-thought-1.html","8f65fdbf53a31d91884c6f3ca4885162"],["/blog/midnight-thought-2.html","f653e7b482feb3adc488a0ee1fab6307"],["/blog/midnight-thought-3.html","e3278cad6917262d01f5dc326fd28c97"],["/blog/midnight-thought-4.html","3483288c3d9cbdde724b1e28677340fc"],["/blog/minicom-the-best.html","a756d68fdadae9a562ca4829a794dfb9"],["/blog/my-desktop.html","837ab14d7dae491f45c28b1a42b787b4"],["/blog/note-take-tools.html","82e15cd804dd2b900be25da0d6f61c6e"],["/blog/owncloud-nextcloud-install.html","86484d30de943e7bb57e5f3ef52a4730"],["/blog/pass-google-pagespeed.html","e4540a618e07fb4bf2aae80fdf8efff5"],["/blog/pep-257-docstring-conventions-zh.html","b3c9bebf47cb6290bf97e4d7a7e233cf"],["/blog/python-argv-error-in-windows.html","b6dff773f4bbb327a6d7123dcb25d053"],["/blog/python-skills.html","0879e10f3e12db7c20f4b737390b2db1"],["/blog/python-special-method-names.html","48c50681ddfb5782dd4002c21febfd74"],["/blog/quickstart-for-simulink.html","948393d416e146dda876b27ef99d7778"],["/blog/run-background.html","b02c3d21de7098f3584aa99fcdada59c"],["/blog/sanguosha-pudg.html","4dff781b8fef16bd6adef9b8fd111c01"],["/blog/simplest-note-develop-note.html","dc484fcfa87903516491bccbd4ba7368"],["/blog/simplify-the-img-upload-in-markdown.html","03c044dc4a178fea02fb56232c74b9c8"],["/blog/ss-set.html","902f6dd2804a6b8701728e4fa0f58782"],["/blog/tools.html","aaa3f96fe631b6869d3aaf90b951a2c2"],["/blog/use-mklink-to-save-space-of-C.html","a95e272374d9cdc9d8abf2aabc0369c6"],["/blog/vim.html","616da4b52fa20b0c612f7e2960934182"],["/blog/whats-new-in-python.html","fad9ba5df4780678ad519d715369c64e"],["/blog/win10-bug-about-bing.html","ffca407b4b9cb1bd58635b3de6b9c332"],["/blog/windows-linux-autostart.html","e98d5d839eb96d00f9aa0b98d9a534b5"],["/blog/windows-or-linux.html","0fc2aa8b2955acd2463308632049d1cf"],["/blog/windows.html","cb317f0f281896ad01f774df92b7308d"],["/blog/xiaoshuo.html","0ee01f3ee9b979353d002ff9a7b1b1e4"],["/blog/xilinx-vivado-usage.html","65f4cc304156805974e803768c3052fb"],["/blog/xipai.html","5198f7b209e402227323d232e33bbf0d"],["/blog/your-name.html","08490fa08869fdc26bc910c354428923"],["/blog/zedboard-1.html","85f822ff512ada381291f3ab91cc1ed1"],["/blog/zedboard-2.html","2782b7857d02dd6ae7c39d6c447a995a"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","0dee06e2b0b14f8323729b76bad509da"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","bff5fe88b7d77db03adb8a0fb3e88d48"],["/page2/index.html","e03b3900fbe260606648b9a035df8ed8"],["/page3/index.html","72bc09866a4108d82e0ce5af2f091549"],["/page4/index.html","0095c44d1f0f991bccb3c2dce6c8fcc6"],["/page5/index.html","9c87d121b8fbdfcffaa769c03f5e11ea"],["/page6/index.html","2f3d50bc3a7c5d07ec3cb80d4d13b5b5"],["/page7/index.html","b986fdc492772f4d0d0bc4a32a636f82"],["/page8/index.html","e776ca7b5f361a7ee80e584b744deae4"],["/page9/index.html","9b818e4b1a72e103c448532550b0df69"],["/tag.html","dad5f9a39a7a9734f2d20f25d5beb348"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








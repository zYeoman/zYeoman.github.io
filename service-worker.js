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

var precacheConfig = [["/404.html","6e47e6fbf044b521edaf6002279ff09c"],["/blog/7z-extract-and-zip.html","8c130ad68721fd44e2bd878c8d876238"],["/blog/A-bug-in-python-about-import.html","05aac7cf411f2f85c0a619b30102c13c"],["/blog/A-script-every-day-1.html","24e14d2da18873db8886b76c1d8bd829"],["/blog/DOS-rename-many-txt.html","9be1a4b9d44858918e5704d84607211e"],["/blog/English-punctuation-to-Chinese-punctuation.html","e62192dfe4c8c42a286d3eb778cb3f5f"],["/blog/How-to-Write-a-Git-Commit-Message.html","659ea03fad7bb5299a2798bdb33270ed"],["/blog/ISE-error-when-generate-hls-to-pcore.html","91cb0fc9a8d0d0c27cf68898fb9921d6"],["/blog/Interesting-APIs.html","0dba6a1cd9b2c01d76052291eced3980"],["/blog/Keep-Your-Commits-Atomic.html","89469f534ccf9c5f43db0f9815c3f854"],["/blog/MacType-conflict.html","f529a47902e39b4d33a02564d7ced3d6"],["/blog/Minor-CPU-model-of-gem5.html","43b47a81241465d5aa5890e25053e8d7"],["/blog/Python-translate-maketrans.html","ff38d207fadabfb3ac709489cb149b49"],["/blog/Raspberry-PI-Using.html","42e80f2eb19809f1f3b728b288237556"],["/blog/Test-My-Blog.html","e4618b1cc6e43b602b1aa569ab04bbd9"],["/blog/Xilinx-can-not-find-gpioh.html","8b02c120c2562c1a102df54f6beadb96"],["/blog/android.html","43858c84da60048ce37e0618380f84ca"],["/blog/anime-2016-10.html","001d311ec351f7c9e1bcdfbfa4e4acb0"],["/blog/anime-2017-1.html","7ad26df77a72ee312e1533839bb5559c"],["/blog/anime-2017-10.html","2cf5246e2f922ae486ce1f0597cdca4f"],["/blog/anime-2017-4.html","0b012402c1b8c4df4607d288858c6a70"],["/blog/anime-2017-7.html","f0196434d4dc3a386f10b03cfef52cc9"],["/blog/anime-2018-01.html","db198538b5f010ec468461754ba23a20"],["/blog/anime-2018-7.html","2d3e70652fc89e672bb70faec28777c2"],["/blog/anime-list.html","8251524f292358d92e0f5383d599fa68"],["/blog/archlinux-gui.html","13b5e4f7525f74e76fcb24db343ebf47"],["/blog/archlinux-install.html","30ba08e38841b237ef80e9e2a3734d76"],["/blog/bat-command-line-parametric.html","097b752293812bf81b14061b4cac93ef"],["/blog/bat-file-argv.html","5ce8fe13464857cdb639c667905fd273"],["/blog/bing-to-qqpinyin.html","7d32769ef001c5c675c87786f09b7bd7"],["/blog/blog-categries-change.html","4bdec2196ad00c884a5c153084c4daed"],["/blog/bookmark.html","83b6ec88ac32ab8c0511b6e80de875b3"],["/blog/bufanjilu.html","03cc23e240feda2cce8cc4e9e85a9894"],["/blog/byr-spider.html","698da93437313b13f5272586fe64bbc7"],["/blog/c-standard-library-learn-1.html","1bd6c587b3d7db5684dabc28c93da4f5"],["/blog/chinese-hacker.html","35d7330d5f4c4d6fc6ca4ebe3b8b8ab7"],["/blog/choulaobie.html","ca93feb64d9aee63606dc7d80684d31f"],["/blog/chuanyuelishi.html","28ad9baba2d448d343c26d99af305e95"],["/blog/database-test.html","86711d933e3dc57f1cb59e4f54450d00"],["/blog/diandongche.html","6f01e2611883b5580f004dac94e14900"],["/blog/digital-image-processing-hw4.html","161ead6146f875411e37a98487d8dc34"],["/blog/fortune-lolcat.html","8f06892f0958c82f5c6cd33bacd7ca09"],["/blog/from-observable-universe-to-planck-length.html","6008d6b63d7d2805a14dfd996adfd00a"],["/blog/fsutil-hardlink-junction-and-ln.html","3e90f78a66f23de9c4645975f9093dac"],["/blog/geek-tech-internet-browser-to-editor.html","094800de84a63b3a4e37beb1fc36581f"],["/blog/gem5-tutorials.html","84ea64499ff9e8dd7dbda80bd2bec411"],["/blog/git-undo.html","6e3a04f2187e1a0ff89df9d7d0948b28"],["/blog/github-education-pack.html","db07f071433b5d2ad7ada3f294c644ce"],["/blog/graduate.html","20540368c39f0e95d1397f2b4a268a78"],["/blog/helloseed-api.html","e3e86d3e6907f9ae9273dafad1662423"],["/blog/https-github-pages-custom-domain.html","22ad5c5edf5faf6c49b145aa0e223502"],["/blog/huawei-P7-error.html","5c801168196731dbfee2ab4cd0791898"],["/blog/jekyll-editor-hack.html","ec5e935fe510b5af469725a3b30e5b8a"],["/blog/linux.html","1e6516491124a8f91a9597269e58326d"],["/blog/magic-weekly-1.html","24d8b49a9a230f12e7dfb5fa12056ea7"],["/blog/magic-weekly-2.html","3c1c70b5744e899c94caa9f436d43d33"],["/blog/magic-weekly-3.html","01c25ee8d2fdee63589787760667ab92"],["/blog/magic-weekly-4.html","48903494be8199bf410f448161165590"],["/blog/magic-weekly-5.html","472a816dc7e8504f5c640062ac96caa0"],["/blog/magic-weekly-6.html","8ac237aec173bd6f0b8a40e6c7ed29af"],["/blog/malatang.html","2d6fdefb055ac58e49396b0d624e588b"],["/blog/markdown-extended-latex.html","48ac1c7ae8107b38928a619cf391d22b"],["/blog/master-interview.html","49f2c531470a36abcd830d718d952ffb"],["/blog/midnight-thought-1.html","9afe01d60e8315ef633aabc4c4381bd9"],["/blog/midnight-thought-2.html","33a152902584321790c522277a5b3e66"],["/blog/midnight-thought-3.html","1f21a2814f8c2f1583bc44c5df5dc2a9"],["/blog/midnight-thought-4.html","a005443950ddd95771607b7b86a3a798"],["/blog/minicom-the-best.html","7776566c3ba27bffe3a1c20150aa7d1f"],["/blog/my-desktop.html","7e0a16cbaa4a3ede2ad598f857ff85f8"],["/blog/note-take-tools.html","7ea73e0befbe6d37bed299ff10be5154"],["/blog/owncloud-nextcloud-install.html","d71a9bb6f2c2321232d3b1ee4dab6e93"],["/blog/pass-google-pagespeed.html","19f29b64c719edc6931bcb1566c84560"],["/blog/pep-257-docstring-conventions-zh.html","6524f2b71db9c8c72ae6712082548cc7"],["/blog/python-argv-error-in-windows.html","a46c6b20d61b88d715d41f2db1f57a8c"],["/blog/python-skills.html","8947a54cc446e7ab4f54e4d3ee97ea79"],["/blog/python-special-method-names.html","6eb31cdee2cf0aadb943b82cdc8bb623"],["/blog/quickstart-for-simulink.html","85eb2ec2da77fd42a4d5befd9a241be0"],["/blog/run-background.html","a00a6f530374bf595768e9f20c84d76c"],["/blog/sanguosha-pudg.html","e6def350b7f35c43eb95268e33d43637"],["/blog/simplest-note-develop-note.html","b649c629c662285721ab8f8be105a490"],["/blog/simplify-the-img-upload-in-markdown.html","718110b73978a44c6289010c64a8b1f6"],["/blog/ss-set.html","023caf0b642a0f396ed7ed36cbe14781"],["/blog/tools.html","680b18084cfe2fbcc39e9fdc517db012"],["/blog/use-mklink-to-save-space-of-C.html","2adad2a609f7e69cf6dac69499f7649d"],["/blog/vim.html","6cbc0bc50928b1656b63c1b0f804ef2f"],["/blog/whats-new-in-python.html","cedfd3f5622a9ce1d98affb434abe4b0"],["/blog/win10-bug-about-bing.html","9d1e52639f82f86e3e3064a1e493a9ce"],["/blog/windows-linux-autostart.html","89f2af84f31ae0712e02c55871ee6693"],["/blog/windows-or-linux.html","1176cd2f3e6750223a3d92c4e3af8cdf"],["/blog/windows.html","bf4940852fe4ed7c18f5c2738e2d96c5"],["/blog/xiaoshuo.html","d773f65f5c6639d8ed29dec318e5441f"],["/blog/xilinx-vivado-usage.html","0310e55be9a7a8fb4f95d4434dc8eb28"],["/blog/xipai.html","0d7260b76e0a614b1e304271dab56cb9"],["/blog/your-name.html","5cd62cb3fbdfe23aa832a09957bc7638"],["/blog/zedboard-1.html","06bbcb173e197459e024739d5f4a6921"],["/blog/zedboard-2.html","4514e5337c5f802ec9fad29ac52392a1"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","3205f9ab0548bea929617a8fcd476958"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","9c1a82da72bec008cc0c79d75dfe5178"],["/page2/index.html","a569e368c9afbdf5c679af8f41f65825"],["/page3/index.html","7846d2f3eda3fb4a7fbbec0c34e53175"],["/page4/index.html","6ee39e7e5b55f204cf36f37c99d2e703"],["/page5/index.html","3e3e9407c5632c4def323790c0f7fc1e"],["/page6/index.html","5436f571cca6639b1f849e4904119fc0"],["/page7/index.html","1a5bc29a51bec57d2f888c7e59cac635"],["/page8/index.html","d51eb01c7edb346647aae7b2b50590c8"],["/page9/index.html","1c7d1ecf54910160b3140199e39cf839"],["/tag.html","9ee7616a8ad94a5e7397d01c62af4929"]];
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








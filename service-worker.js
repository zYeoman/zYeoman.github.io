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

var precacheConfig = [["/404.html","febb0e17435b41025c69b9212a5c7e24"],["/blog/7z-extract-and-zip.html","b1d690d0f0f8c8a17a1959505d3ca8d0"],["/blog/A-bug-in-python-about-import.html","a89f203705b3dcc5c238f259f07a971f"],["/blog/A-script-every-day-1.html","dea6eaafdae2b046eb572a03a2b26963"],["/blog/DOS-rename-many-txt.html","29dddfa9a5666e879e83fa3415152c9c"],["/blog/English-punctuation-to-Chinese-punctuation.html","a8b4ec2e5e96a1c9567bdb3254520755"],["/blog/How-to-Write-a-Git-Commit-Message.html","ca09ba5a66c2bb13553d5bb3c61c8443"],["/blog/ISE-error-when-generate-hls-to-pcore.html","c2ce898fcb11d90b31d88b4ff30791f0"],["/blog/Interesting-APIs.html","6d7cba73db28ee5427795a706463dc90"],["/blog/Keep-Your-Commits-Atomic.html","b279a870c6cde27a96bb7817a23d375f"],["/blog/MacType-conflict.html","0f7b82db6c89780063ebf8b249e3586e"],["/blog/Minor-CPU-model-of-gem5.html","4c35392104ad78a20734b85b869ea435"],["/blog/Python-translate-maketrans.html","85d57931bc7d48eadbdd6efa07cc1011"],["/blog/Raspberry-PI-Using.html","57924c83418e197e95ed83317b61dbfe"],["/blog/Test-My-Blog.html","a121b3e7f0ae53ebd6a410608b324423"],["/blog/Xilinx-can-not-find-gpioh.html","96aec056abb5cd4f92fe41134898bad1"],["/blog/android.html","aa2835bc14d7cc7dfb6fb6819a40870b"],["/blog/anime-18-10.html","93a6ef167fb11501961d061a88384b1e"],["/blog/anime-19-01.html","0657899002e98ecfebdbfd45ae4effbd"],["/blog/anime-19-04.html","24418c49f82825e9f9b3b752e81b6f56"],["/blog/anime-2016-10.html","9e37fb941a9758f2a791d1c5e48c18ee"],["/blog/anime-2017-1.html","54850604f37b90de15f0ad99b1e37969"],["/blog/anime-2017-10.html","4563c448c2b04329d0a9054b59be034c"],["/blog/anime-2017-4.html","596cf698f4dd72a433b65836d4e9d5c6"],["/blog/anime-2017-7.html","d21b89443ee0ef70926364af84b2ff8d"],["/blog/anime-2018-01.html","4fa0713b6b495c2dfaeff1f9c4d6f1e0"],["/blog/anime-2018-7.html","2b1f5f2654b4cdb242ce44506b3b11b3"],["/blog/anime-list.html","84a8b54527a9319ed2f9a130acce6d49"],["/blog/archlinux-android-sdk.html","663f3074f497f23f3584c55258882f2a"],["/blog/archlinux-gui.html","6bac9ce397e29628577705858a1b5e89"],["/blog/archlinux-install.html","e692958f0a91cf173f2a17abf916aca7"],["/blog/bat-command-line-parametric.html","de290ae28e7a68f99aeb46fb90307484"],["/blog/bat-file-argv.html","78d416f23de668e4b9655b1cd384b52f"],["/blog/bing-to-qqpinyin.html","6a00acdc9d5e512d8c5199535c952902"],["/blog/blog-categries-change.html","e81ee5d73a980cbb5051c35b9b0008e6"],["/blog/blog-update.html","cac32f76b5d134e2ad4126fecd4f656b"],["/blog/bookmark.html","52752e06d8ffb08b33428ce4ae011099"],["/blog/bufanjilu.html","b1023ab981fdbc337dcb94757f68b35d"],["/blog/byr-spider.html","99dce209f620b2a9139350a3798f44cf"],["/blog/c-standard-library-learn-1.html","f656e968a9c1674d0c3af6634718c394"],["/blog/chinese-hacker.html","66203cc3085953bfc64e9c280701de83"],["/blog/choulaobie.html","ed9fba417218bb8a209dce1c14b01f77"],["/blog/chuanyuelishi.html","489d805f774db5047fc8e1b53c2c8567"],["/blog/cordova-usage-01.html","0ec430226a066f045c6ca5b0c1524eec"],["/blog/database-test.html","03f0b5999bfceebcf9ed7e373773ee90"],["/blog/diandongche.html","9ad17432ca4237d6c8170b8028e14a08"],["/blog/digital-image-processing-hw4.html","f5cc473f98faf342fcd74c93c69eab6e"],["/blog/fortune-lolcat.html","c6f93ce4f53d688375ac6db764480e43"],["/blog/from-observable-universe-to-planck-length.html","653eb0b2efc05a812eb5914b67633bd7"],["/blog/fsutil-hardlink-junction-and-ln.html","85ae72797e4d1738a1f11a7261bcc2cd"],["/blog/geek-tech-internet-browser-to-editor.html","e5fe27cdb64c457c7f91371141c932c4"],["/blog/gem5-tutorials.html","a0cc94d2fba7ae913fc75068a6160ad7"],["/blog/git-undo.html","3b4032519668b6e69f1d70a0e954efc1"],["/blog/github-education-pack.html","5d260391189c539df3200d947c0a0f40"],["/blog/graduate.html","60dfe7bf49637276468a2284b4d92ca7"],["/blog/helloseed-api.html","f57041fbafdf84a13a54b0f19811f098"],["/blog/https-github-pages-custom-domain.html","8ec62a0ec001b838b5e69ef85826f1fe"],["/blog/huawei-P7-error.html","f34b61d0f2a37e0c64f5492c8477d3c1"],["/blog/install-archlinux-on-USB.html","2523643f08673bf380a6f4357ab17db0"],["/blog/jekyll-editor-hack.html","f58b87670eb1ee1ff9e97685ad458e80"],["/blog/linux.html","c9c046024ab7433c2952719f68c9e40f"],["/blog/magic-weekly-1.html","b417837369d80c55955070e3081bb224"],["/blog/malatang.html","99c5872738244b0a1536016415b570ca"],["/blog/markdown-extended-latex.html","c4f0a300add5084cf144f3fd663247f3"],["/blog/master-interview.html","fd7972954d5df6590bd81a8bd42f5955"],["/blog/midnight-thought-1.html","d2b17ede5a82ac9f4e551e0ea651f868"],["/blog/midnight-thought-2.html","f203ce67645b356601cf990a7a20f616"],["/blog/midnight-thought-3.html","1d88a88c1ee69a9433f4a857f5a1c1ff"],["/blog/midnight-thought-4.html","ff425d9744a8aac5324678e3c2001cdc"],["/blog/minicom-the-best.html","7d4a5d0ffaaca84238589a0a9b8a1774"],["/blog/my-desktop.html","8ea683edeabc0e7eb7849feb34a97138"],["/blog/note-take-tools.html","c18b2fd052d0eda4103006e77ee0bda8"],["/blog/owncloud-nextcloud-install.html","543568c2ab71f53a5065838bfc36b8da"],["/blog/pass-google-pagespeed.html","79226d8238b8e5bd8b1c45ab2e21ce3a"],["/blog/pep-257-docstring-conventions-zh.html","a401187f17d33bdb3190d1349f994b45"],["/blog/python-argv-error-in-windows.html","63d4f29ae95170e5d5f98c28dc6c7380"],["/blog/python-skills.html","577feff269125571b46163197c57160d"],["/blog/python-special-method-names.html","73f960b0252eb644ebd9f79e696ad6e1"],["/blog/quickstart-for-simulink.html","5b77a9b2969df830cac3dd84bcb7d1b8"],["/blog/research-about-time-track-tools.html","a7d1e33425669705f7e12c2e8393d4ba"],["/blog/run-background.html","cd0ca5069a6c0ad2a314cd5e1fae1215"],["/blog/sanguosha-pudg.html","58e2eac4884e0ba7ca16ddd6ffcc5b28"],["/blog/simplest-note-develop-note.html","337a62cc3b0a6fdff4fba6d0f3768989"],["/blog/simplify-the-img-upload-in-markdown.html","b842fefb670b69884d9cdfbd9be5b6af"],["/blog/ss-set.html","a2adc3c6cf52e1f9da23abb0c8c3d68b"],["/blog/tools.html","66bacc4439a9e1dde805ee451ddc4337"],["/blog/use-mklink-to-save-space-of-C.html","87c1de54f2a0c6595be67c4d1b439a51"],["/blog/verilog.html","c4b3a646216598f2ffca6d7babbaeff4"],["/blog/vim.html","1f49a84dcfae5671ba6e1532f1788d48"],["/blog/vps-choice.html","3077a0886e5362e5b956ae69fb75d88d"],["/blog/whats-new-in-python.html","8e473cff0c8b9e9bd2047555d5fc16e7"],["/blog/win10-boot-repair.html","53438976518d1ed43b9db1266248fde7"],["/blog/win10-bug-about-bing.html","bac4b9f0902ddd7333bf87052bb7a820"],["/blog/windows-linux-autostart.html","5de3860bda1c810f7c771c580fd106a8"],["/blog/windows-or-linux.html","eb7984de5929928c070a953745b48b00"],["/blog/windows.html","7f34d138cdf75743aff718b309d54331"],["/blog/xiaoshuo.html","c7a22e305d493da745873708120de0cb"],["/blog/xilinx-vivado-usage.html","cfcc653068a5bf2837434e41946a704a"],["/blog/xipai.html","1ec0d516eb69c230194a995f6c33fa9b"],["/blog/your-name.html","ccf68cd722c3b06e06dca74123472910"],["/blog/zedboard-1.html","307fd287b169eeb77c62405c74d88c96"],["/blog/zedboard-2.html","f25776aab26a9ff3e51598e57236608b"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","6b7ad777e9962a34361ed55748589891"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","9e0a59e19f82e4438891e421d6fdf877"],["/page11/index.html","5b62eec17cd7106679aeea58c5b0d8c8"],["/page2/index.html","4ac2e536f63f09242194f091cc0fdaeb"],["/page3/index.html","8683daffc1fb9b160fa6ca39a7a167b2"],["/page4/index.html","81b1e69c1079a4527cb9be6a8804ad5f"],["/page5/index.html","5bac975469a6060d22c90f202f8a6289"],["/page6/index.html","33221f7ae2d07485af5c08754a98e24f"],["/page7/index.html","27e37996c54eff5635abf50198bcac69"],["/page8/index.html","b9b0b2f980b33d36b366dada25092634"],["/page9/index.html","91b09d3f6b525958d585c2281599cb2e"],["/tag.html","c9cfc6f6fbea1caeb826145aa9201fc8"]];
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








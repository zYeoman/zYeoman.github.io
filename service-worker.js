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

var precacheConfig = [["/404.html","89736040b8e391faa1188b023d9f4840"],["/blog/7z-extract-and-zip.html","a5bdb26a4f82a8f47d60f21aabe2b121"],["/blog/A-bug-in-python-about-import.html","5a9a176120a7aa347f06014ed4375143"],["/blog/A-script-every-day-1.html","8d4cba07507d51d0c22dcd3b6bcbdead"],["/blog/DOS-rename-many-txt.html","17be7454aac6675ede2a86fd38ea6589"],["/blog/English-punctuation-to-Chinese-punctuation.html","d84d9c03e1ebed6445efb09147732dac"],["/blog/How-to-Write-a-Git-Commit-Message.html","c3d45028689874cfa6f63d220360e521"],["/blog/ISE-error-when-generate-hls-to-pcore.html","ec60103561ba1ca9729f828feadd72eb"],["/blog/Interesting-APIs.html","ab9b987fb9e84e3873928e72a6ce9214"],["/blog/Keep-Your-Commits-Atomic.html","0d4ed0505bf5c42c6ae7b34dfaaec8e6"],["/blog/MacType-conflict.html","750eafe33ec9b7b04672847f0742e023"],["/blog/Minor-CPU-model-of-gem5.html","65e585db38b45b1e69cfb41285f1e641"],["/blog/Python-translate-maketrans.html","6b54332ef6ef4b6fa7c320e405c3653d"],["/blog/Raspberry-PI-Using.html","ba1b5f9dfe9f09518cf935c5d641f447"],["/blog/Test-My-Blog.html","3145bd6e89ccda3c63430cb19864fa0c"],["/blog/Xilinx-can-not-find-gpioh.html","e4d3d4b19d0d1c4a3bb610080c413347"],["/blog/android.html","a363a24c79a2cf8aec4b3bf24b731b93"],["/blog/anime-18-10.html","a4b3992a9e705a1489ca0c5d56043823"],["/blog/anime-19-01.html","1a28f81344bbcf2419f0cc668730e961"],["/blog/anime-19-04.html","b51c5964f8e6f4354e4a55eb1db6f0d8"],["/blog/anime-2016-10.html","e0d82f81968ee051232a846a89458c4f"],["/blog/anime-2017-1.html","03c099f23c64f38ffa2f36c9e0f16409"],["/blog/anime-2017-10.html","52405abb2dbd473649e0163eefceb4a2"],["/blog/anime-2017-4.html","1adb755f2204ceed708350bf91044399"],["/blog/anime-2017-7.html","ea9285f87e5af1b1785a0ced561c5c02"],["/blog/anime-2018-01.html","64f2422f3e9b1524657fdf3c8a6938ac"],["/blog/anime-2018-7.html","db00cb5f095490a336adf41cac240abf"],["/blog/anime-list.html","199f8baecb040df101667a5dbe40d3d4"],["/blog/archlinux-android-sdk.html","38e45cc7c020639256441e433eebbdd2"],["/blog/archlinux-gui.html","18a4a9033252043df1651f382995e1cd"],["/blog/archlinux-install.html","784514ebc1e669cfd626ea15e5223595"],["/blog/bat-command-line-parametric.html","1b36d057a84ad48199f6e2315e5e76a9"],["/blog/bat-file-argv.html","b9b89cf2a8e5be14dc86f188e7cfc846"],["/blog/bing-to-qqpinyin.html","0fb0091f377ae936812cb635141180d4"],["/blog/blog-categries-change.html","12ba51a7f18e5fb083552e5f2ac2253b"],["/blog/blog-update.html","119233ec9efc0f715f12922dc012b9f5"],["/blog/bookmark.html","08a65aaae107950d1c74fc282e0f9b3b"],["/blog/bufanjilu.html","f642d0edb27b874debc7f13792f89560"],["/blog/byr-spider.html","807b544111701ef357d232b7ede7b271"],["/blog/c-standard-library-learn-1.html","41e289d429f314543ebe4cb5a1658fad"],["/blog/chinese-hacker.html","6a7b7653f5c54e4a3b36f5965bedc2f1"],["/blog/choulaobie.html","7b133458d8f55474a5059da61910cdab"],["/blog/chuanyuelishi.html","4e58f14f4c5fe569874c548726cdddfd"],["/blog/cordova-usage-01.html","e9c8b26ae7c3ae837cf36c670c328299"],["/blog/database-test.html","f2f63fb70215c4933b4b1ab944bade2b"],["/blog/diandongche.html","5446461cf5b16f77aa92b74f6451fded"],["/blog/digital-image-processing-hw4.html","8209a8d7103c5d6efc5de240d080f5ad"],["/blog/fortune-lolcat.html","734ab31529d898ffffd7ca89b5d7eda3"],["/blog/from-observable-universe-to-planck-length.html","846f34f70304deab8893f513e0f4c5d3"],["/blog/fsutil-hardlink-junction-and-ln.html","efb00f59748e71592cfc6e33090abab1"],["/blog/geek-tech-internet-browser-to-editor.html","c2483b8d65e426bc942982793cd355e3"],["/blog/gem5-tutorials.html","b56e349d9f6c8507c1ab2bacf2603281"],["/blog/git-undo.html","62aac3e28b2b14e42252f758aa8ef3f1"],["/blog/github-education-pack.html","8e421cd454e82275d6d7df28d9f25aa5"],["/blog/graduate.html","e74f83b313367438fd0e09079871e890"],["/blog/helloseed-api.html","976fc4ff7882c1800d3a4121b49e059e"],["/blog/https-github-pages-custom-domain.html","e0be06f87f9b67cbd506c483d9f0606e"],["/blog/huawei-P7-error.html","adb2408c4c7417aceb905288ba4c04d6"],["/blog/install-archlinux-on-USB.html","827391b3ad65d54c2b6e0f2ad2953cfb"],["/blog/jekyll-editor-hack.html","474996edc4e808dad388d0328a82683e"],["/blog/linux.html","5c8c3fdd0489e41bb44e6734cdce7000"],["/blog/magic-weekly-1.html","d12a8f4cf9d687b59061ddd41026df30"],["/blog/malatang.html","59d5e9732bd07c0a1e356efd369db9ef"],["/blog/markdown-extended-latex.html","999f1ee722d7a9fa348ae49f9717b6ca"],["/blog/master-interview.html","3b58e9c1ec85bf683693735bf3984631"],["/blog/midnight-thought-1.html","b3e5a41a03c5497f0dee52806b53cc86"],["/blog/midnight-thought-2.html","22fa54643f45402a29ad13da7c6dec34"],["/blog/midnight-thought-3.html","ee99ce950a5ebdd5f742df1a53b327b5"],["/blog/midnight-thought-4.html","fe0b34599a47f0ee7623bbf4b6140863"],["/blog/minicom-the-best.html","228e152315e0b3bc6c7472d75f8f2130"],["/blog/my-desktop.html","def507b8983b8f11c39b1cc13e3c7760"],["/blog/note-take-tools.html","dfdbae1286bfd78951d0bda6b83d5a19"],["/blog/owncloud-nextcloud-install.html","4beff8a1f9a91f6e71ed83956acf75f3"],["/blog/pass-google-pagespeed.html","d95db86e76ab66a8a74ef899cdf6a119"],["/blog/pep-257-docstring-conventions-zh.html","ab4624f0de5065a0b14d2c8e979298df"],["/blog/python-argv-error-in-windows.html","3fdfca9e2d5413cb5fdde13ac673431d"],["/blog/python-skills.html","be57232fbe57117831f198d42c5646da"],["/blog/python-special-method-names.html","e04674d2d69562dfa539d7c6c738d825"],["/blog/quickstart-for-simulink.html","118216ab3823568d2525455185edb928"],["/blog/research-about-time-track-tools.html","7a613a15c37c4f571f4a9ee4e7f1bcc5"],["/blog/run-background.html","1d15c46581b73450f32c42936075c449"],["/blog/sanguosha-pudg.html","7c21f5170d409b57dd103fb9d6cad4eb"],["/blog/simplest-note-develop-note.html","5cd01199a6878637fc7a019870116c6f"],["/blog/simplify-the-img-upload-in-markdown.html","1de9bfd32cf2dc327867b7053919bbb6"],["/blog/ss-set.html","45a37babd0d2d64e2cb6ff57d0f3597b"],["/blog/tools.html","e6aaf9117ccc4777ea2c8d050f21bcbf"],["/blog/use-mklink-to-save-space-of-C.html","5fa6515cd92f4c5437ed21a4a1a563fb"],["/blog/verilog.html","756a4a58aa163576b143b9bc6951478d"],["/blog/vim.html","fbf327be7a4d156fb0ab464c563e7b20"],["/blog/virtualbox-add-physical-disk.html","c1aab3a971105cd3d5feaa6a084b92c5"],["/blog/virtualbox-archlinux-screen-resolution.html","f561353d9f62f066ea2913cf74c913b1"],["/blog/vps-choice.html","d14d91fdcc61e3819a6600ea4acf3666"],["/blog/whats-new-in-python.html","ee75f0794c8c3cd5316eb100b6a245e5"],["/blog/win10-boot-repair.html","af2f127200df446f9274c513d57951d5"],["/blog/win10-bug-about-bing.html","89fdef9060d89f63c9de9dda9822e8d8"],["/blog/windows-linux-autostart.html","f06d873dc9d852eccb68febfa38f7415"],["/blog/windows-or-linux.html","41088b2cec4e7b9486cce9141c477375"],["/blog/windows.html","26bf84773bb1eae64fd0b0f74319c77e"],["/blog/xiaoshuo.html","30822962c6a7bfd03c9a65cba2e38283"],["/blog/xilinx-vivado-usage.html","2b445544c2ca3eeaca3a315a5ece040a"],["/blog/xipai.html","62dbe7dbde2fafb0f178500a6e22d135"],["/blog/your-name.html","038d71689cf017fead1cd3f19c466ee5"],["/blog/zedboard-1.html","225c2d75fef4227b2412544c77fb923f"],["/blog/zedboard-2.html","c69541d61e13d1203ed71fb3807eab1f"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","e2ff3fa877de6bafcb1ca32e6e59e0cc"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","6134aa198787169e9b22ce94a1154b48"],["/page11/index.html","8d57d956ffb86e7dfa6b38c9a360d87a"],["/page2/index.html","5176854df486fa7aa06d9eef0f38e153"],["/page3/index.html","144b951dd2b2b1550ba67215bbe35970"],["/page4/index.html","c636cbae9d53eb2ec1f64296259a6066"],["/page5/index.html","939e4ee9d6239bf6d59eba979412fc19"],["/page6/index.html","4cb5f7e16031eb4e42dcfd45c7ab5356"],["/page7/index.html","f177e9ba7b2ac3ba603b2e5c2268970a"],["/page8/index.html","8013e408fd43049f0640d1a195ae3619"],["/page9/index.html","411f55a38a902ed2844b5293ad4f15c4"],["/tag.html","02a5669ddb530f41d8d040c8e2657901"]];
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








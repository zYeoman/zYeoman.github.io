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

var precacheConfig = [["/404.html","58a1fa4f60b8f0e6830bfc503f6e8934"],["/blog/7z-extract-and-zip.html","3af147baf096f121d8bf521e84d43300"],["/blog/A-bug-in-python-about-import.html","dde70d8605f2316feac8dab6c2a560ca"],["/blog/A-script-every-day-1.html","e4261bacc9fc713888fdc6516cfce239"],["/blog/DOS-rename-many-txt.html","312e482e29d32719e5645573e3af718c"],["/blog/English-punctuation-to-Chinese-punctuation.html","473c6fae256959aa69467877ab18e370"],["/blog/How-to-Write-a-Git-Commit-Message.html","323a2de5387a5b38c45506448963afc6"],["/blog/ISE-error-when-generate-hls-to-pcore.html","bd6ffceeb80e4825e19647d473ee0654"],["/blog/Interesting-APIs.html","08c5c6332e2e377d37cab463edc1a62f"],["/blog/Keep-Your-Commits-Atomic.html","cf97f9a4a49e412337d11a89240305d6"],["/blog/MacType-conflict.html","b111f0b6013c7bc0f1a413960b817577"],["/blog/Minor-CPU-model-of-gem5.html","a137a7a346e6d336fd91e60558bb35ba"],["/blog/Python-translate-maketrans.html","324ff0741b794331182eaeaf95450ae9"],["/blog/Raspberry-PI-Using.html","c5c28d76e16a8ccf5f330471ed9bd7cb"],["/blog/Test-My-Blog.html","95b9597b2556d2729bd37c04a3392512"],["/blog/Xilinx-can-not-find-gpioh.html","a49aa92da93e1698c54ebaa8e8816f94"],["/blog/android.html","cfa549d0b5cd8e27493ccf980d9e225a"],["/blog/anime-2016-10.html","770e6be00ab14a303d64e14c93417e04"],["/blog/anime-2017-1.html","a5019dab5e3ece90b8a1cc5ddfe5e7cb"],["/blog/anime-2017-10.html","c07954b1c3bc73b9ed319889fe447e48"],["/blog/anime-2017-4.html","1f4267a1f4b4a852562f9e4585e54eff"],["/blog/anime-2017-7.html","db78dde0753ddf79eb1574a4770e0ae1"],["/blog/anime-2018-01.html","25596a8db9690df77227d16c7aed3d55"],["/blog/anime-2018-7.html","f49c883b8c1ec9ffce5cb8cc6ced7fa1"],["/blog/anime-list.html","72239946fa8fdd41600a29b8c0b87e14"],["/blog/archlinux-gui.html","38c823b5c9ab4f5263a6c6b88c002428"],["/blog/archlinux-install.html","db88f8c55cf5adea799ce733ad2d74f5"],["/blog/bat-command-line-parametric.html","336f730aada5ce051a31e0fd9eb7139b"],["/blog/bat-file-argv.html","72762f71d9f6035fee33ecddcaf795f1"],["/blog/bing-to-qqpinyin.html","f29edd6764da509b67f0f16a9cbae618"],["/blog/blog-categries-change.html","aa63226068c7584243804034886ff5d0"],["/blog/blog-update.html","b5404570cd2e97ee64316ce5ac762323"],["/blog/bookmark.html","cb9dcd96afef5a337000df84480b24d2"],["/blog/bufanjilu.html","c42f605de9b840c36b83bd4ea369f9c0"],["/blog/byr-spider.html","f0e5111f1632bf10e9e1833cc5ed237a"],["/blog/c-standard-library-learn-1.html","75d67751d70aa832afc42602fc03cf87"],["/blog/chinese-hacker.html","9b1380314eb921f7c10e6670dff2feeb"],["/blog/choulaobie.html","573dc845565085eb94d743024a945134"],["/blog/chuanyuelishi.html","6081ed9624eeac1844af2e19ca6e35c4"],["/blog/database-test.html","370b39fcd700df6fbf6c7bdb5267cdd6"],["/blog/diandongche.html","ec586be555aba9c7822a7baba48adc82"],["/blog/digital-image-processing-hw4.html","1792466ada76d8d51f2d4d79406e0a83"],["/blog/fortune-lolcat.html","58f2b91571fadb659ad41131c3d51578"],["/blog/from-observable-universe-to-planck-length.html","2e080f3691193fb0f81a32d1928f3fad"],["/blog/fsutil-hardlink-junction-and-ln.html","8ed5617d620f1015d5faf694317ce54d"],["/blog/geek-tech-internet-browser-to-editor.html","cd2325d3af3c0dacc919bc8b77ae2180"],["/blog/gem5-tutorials.html","5220c7c61721ba06b92999a19e303cbc"],["/blog/git-undo.html","b6b687a79266cbbd8f26809529d9e736"],["/blog/github-education-pack.html","bb8451fb69f1ac9de4440a093bdbf31e"],["/blog/graduate.html","f889893b411c4d58e9def7b196192f70"],["/blog/helloseed-api.html","d291d2075a5e9a8dde632c629fab75a0"],["/blog/https-github-pages-custom-domain.html","026a45be1daa46e8d3d5132961e9603c"],["/blog/huawei-P7-error.html","6f532c0129ac823ceed933b9d7e9ea41"],["/blog/jekyll-editor-hack.html","1b64745e8ff7077686444e30f11f1490"],["/blog/linux.html","238f78e6408eaafa3320fa89e5a765f1"],["/blog/magic-weekly-1.html","67ae1235e9763af290c123639195de64"],["/blog/magic-weekly-2.html","0db49fd77eba8343f90499483fc8de2e"],["/blog/magic-weekly-3.html","58914e8f09b4f0a5d3bcf463e8084064"],["/blog/magic-weekly-4.html","07083dbd14c65c95851855dfc17881ef"],["/blog/magic-weekly-5.html","02ccc1717616269266da684973446745"],["/blog/magic-weekly-6.html","59b8651bae5002af1e2fa8a919f9c7d0"],["/blog/malatang.html","1f72e6b7c5337d5c1b9d29cac9e74021"],["/blog/markdown-extended-latex.html","b83bd3f40aec1f902d72db5ed9ae0f49"],["/blog/master-interview.html","4e30f5c342260ee009b152b38affbd67"],["/blog/midnight-thought-1.html","8972b67a1ef3b7e059d60304f4a89e64"],["/blog/midnight-thought-2.html","eb85eeb088fb0dfbf218c4aac23b6b84"],["/blog/midnight-thought-3.html","30c6a4b46ba6fad94b80165dbcbe9b3a"],["/blog/midnight-thought-4.html","e7dbc2e45d2911b28c29c346ced54dca"],["/blog/minicom-the-best.html","b9619bf05ff0abbc0d9e75e22a1d607e"],["/blog/my-desktop.html","e90f11c905e08722a1ac80876d3b70fa"],["/blog/note-take-tools.html","12ab9ffea9932e49c6dd79197b25d8ec"],["/blog/owncloud-nextcloud-install.html","eb530507b4d70f1cac5658f64ced6a15"],["/blog/pass-google-pagespeed.html","06f6aa45da631dc9099ce0a00a93de73"],["/blog/pep-257-docstring-conventions-zh.html","1ceb6f202978e2aa33d0c253049cd757"],["/blog/python-argv-error-in-windows.html","41a79cfd92fd5d72cbe2692e49d185bf"],["/blog/python-skills.html","17a7a1ef012deb2518893ccafd7a7ff6"],["/blog/python-special-method-names.html","03028b2c0cec4df52b60aa13d3b36c8e"],["/blog/quickstart-for-simulink.html","3840fc204ed4d5d600758ecc4c66b1f1"],["/blog/run-background.html","0b2aa3a9789fa5b263c4cfe5b74bcfab"],["/blog/sanguosha-pudg.html","962fe685d6a4502f5a04594dc647f4d0"],["/blog/simplest-note-develop-note.html","a8fdbbb41aab275866215d12eae76b76"],["/blog/simplify-the-img-upload-in-markdown.html","7478340e8c6a3ca3edace9b2fb1bbc4a"],["/blog/ss-set.html","f5a5211dda1d9d1393b94daa1d43373c"],["/blog/tools.html","e4b714b2c551b5a5f434a5247a2657e7"],["/blog/use-mklink-to-save-space-of-C.html","32563fbf82e02a92d4e958555b7d1a26"],["/blog/vim.html","4cd6e7c9a2bf25dd3c8c8fe0c5d30552"],["/blog/whats-new-in-python.html","ceeb32ebbbcd2ff5b0460c97797ddec3"],["/blog/win10-bug-about-bing.html","2b545f3ce004e65985e57fef6e004d4a"],["/blog/windows-linux-autostart.html","a79ba968b5c4ffc0369bca86a810c15a"],["/blog/windows-or-linux.html","bd9450de168b49e2ed50353b943e93e7"],["/blog/windows.html","a376f98a0601dd148fc6d8b6f65d23ba"],["/blog/xiaoshuo.html","565cf09fc4bcaead80e8fbe85b858fb6"],["/blog/xilinx-vivado-usage.html","b8f31a64e8ed05a45ad7173b27b6be01"],["/blog/xipai.html","75a4201b837bac2df4c29ab26de7ef8c"],["/blog/your-name.html","85b82864a9f9b54ace442b69680e71dc"],["/blog/zedboard-1.html","e5f0922349a6b93991c5de818d23bee9"],["/blog/zedboard-2.html","2a6a8db70898510a75030f73173c651d"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","0cf02db664a29218b2d881602884e8e5"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","9c6c15f34c486555262179b8ed8ecf8c"],["/page2/index.html","af5c7a2058472f2ed60cd2de40174b98"],["/page3/index.html","74b481c3a2833f1a69e24a182ecc0d45"],["/page4/index.html","b9a791b2a69fea351a95b711677c1cbc"],["/page5/index.html","a74410918c463d1f2d2edc044d54df32"],["/page6/index.html","01911f3362e906c0172ceb2d3e9b470e"],["/page7/index.html","d752e87312ecd20e898c8ba6ff9e92c4"],["/page8/index.html","19d4dc0ef567f436d227374aaa5c39a6"],["/page9/index.html","4c37257d55dc9e806174e5623910a8aa"],["/tag.html","902ba74a9ea385626d971fb7dadf1e18"]];
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








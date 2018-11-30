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

var precacheConfig = [["/404.html","897afcabe08bc70b0cd13fa807b2fe05"],["/blog/7z-extract-and-zip.html","f7bb1fff10b3da1306c86dcd8aa96082"],["/blog/A-bug-in-python-about-import.html","8990176fe26cb8c044543ccca8eea70e"],["/blog/A-script-every-day-1.html","4cef435a72900f753ddea6bcd0bbdcb9"],["/blog/DOS-rename-many-txt.html","a40d011a4f03e8b373217c4ea2630a12"],["/blog/English-punctuation-to-Chinese-punctuation.html","44a412d2558ddcd7990a51f1d6bc4964"],["/blog/How-to-Write-a-Git-Commit-Message.html","fac6b04599a19f0fb97fd05185502b78"],["/blog/ISE-error-when-generate-hls-to-pcore.html","2cb12e4e9ecf189440b24dd63cd42547"],["/blog/Interesting-APIs.html","b9a3e3c77e08320c5de6827da3c5dd55"],["/blog/Keep-Your-Commits-Atomic.html","2a5a73296c81eddf33fbd60164b9c1c8"],["/blog/MacType-conflict.html","a6c2e43eb33ab4b91519c49aef439fe9"],["/blog/Minor-CPU-model-of-gem5.html","9b6599134ca3550da6c1cb7831c85e98"],["/blog/Python-translate-maketrans.html","521cd9a83bec8186a39af499d9e420ed"],["/blog/Raspberry-PI-Using.html","71eec3fd66e353c0c2f8baa525f63cbb"],["/blog/Test-My-Blog.html","6af366cb07d3f60f4b4090bb88ea7aa7"],["/blog/Xilinx-can-not-find-gpioh.html","a2e690f0db401724f94c6bf216381206"],["/blog/android.html","3283fc05fc839935029e729b22544154"],["/blog/anime-18-10.html","292d18ac670a88c7e4160ac08b9d5c36"],["/blog/anime-2016-10.html","b1ad749da73ae1a1fdd00c2190c6f6c2"],["/blog/anime-2017-1.html","9c5a421e24f8c60f2a56f7c4d8e0c7c8"],["/blog/anime-2017-10.html","2d5b9e1ceb22b8372fc96c5f43a8418a"],["/blog/anime-2017-4.html","aae099c9bea35fa4e3e2ecaa3a7b9591"],["/blog/anime-2017-7.html","c9ccb6b4c19d37134496e9388c6d9961"],["/blog/anime-2018-01.html","aecafda06327caabca8a64fd3708c31f"],["/blog/anime-2018-7.html","586a2a000e2f0267c2ddc2896709afd1"],["/blog/anime-list.html","dd8e38bb20eb6dd5a7afa07bce33ddf4"],["/blog/archlinux-gui.html","4be452a695fe9f5624460dc1c84375cb"],["/blog/archlinux-install.html","e4992f621f7ef21a764a3fc12f44ed51"],["/blog/bat-command-line-parametric.html","45532001b92c4c331bff7f89be0de35e"],["/blog/bat-file-argv.html","5aeffbc91e2bc3a939cb5aaaeb6e80a7"],["/blog/bing-to-qqpinyin.html","a6d6ac1d2faa92ee2fa50cb0bb9f1e1e"],["/blog/blog-categries-change.html","064f46a024dc2467a89d08f3ee65c90a"],["/blog/blog-update.html","79a99091a05948c339f88998ea2ab8c6"],["/blog/bookmark.html","d5624f6f7470496b101480a16077ca5e"],["/blog/bufanjilu.html","ad76afa3cdc926691d95a8a98bf60b57"],["/blog/byr-spider.html","e694d76a5b611cbdf4e81db282908865"],["/blog/c-standard-library-learn-1.html","276e1f6518b9b15e19548ddf5e5c842a"],["/blog/chinese-hacker.html","f98507990c34c1ba6e7da1f614b91e2a"],["/blog/choulaobie.html","635ce5b6ea0f9fed5e5d804618ac6116"],["/blog/chuanyuelishi.html","42dbb6931a20c19602af92ef074c8ba3"],["/blog/database-test.html","4ad56fa0c61c3c9f3335e0976ab48e8b"],["/blog/diandongche.html","1e51eb47ea0a34eb56cbc3e36a77ddd0"],["/blog/digital-image-processing-hw4.html","d4d80d158e1d545b4d661d383344b53e"],["/blog/fortune-lolcat.html","3ba2b9f520a807c55648c4dfb4cbc4a2"],["/blog/from-observable-universe-to-planck-length.html","981f8a113f186a070cd1229f42daaec6"],["/blog/fsutil-hardlink-junction-and-ln.html","55e8ed92f8d2063be6cb3eeba77fb6b0"],["/blog/geek-tech-internet-browser-to-editor.html","cef72b7dc7ecec93939921f085567a37"],["/blog/gem5-tutorials.html","918a7afe86bc65f7087e77a54e4cdf1f"],["/blog/git-undo.html","0d451cc9020f524cc0ac70c8d7853cdc"],["/blog/github-education-pack.html","916a800b589c83df65d13fbea10326c8"],["/blog/graduate.html","14f4c644e8a9c9df251f4f92ed0bfa96"],["/blog/helloseed-api.html","49b959d0cd69e716e69b4bb7816d8961"],["/blog/https-github-pages-custom-domain.html","495c14188eaf6f6530519b5efcf15f01"],["/blog/huawei-P7-error.html","0115f64c4a1f2e5fcb598c5df890d21b"],["/blog/install-archlinux-on-USB.html","86d95f84801bbc8d0bb85acd39ffda73"],["/blog/jekyll-editor-hack.html","5265c8f3ae67068be27902e43c5d9f95"],["/blog/linux.html","5244018d2201f768156ca6e772602075"],["/blog/magic-weekly-1.html","859532cb441766fea6fc69f863d7334d"],["/blog/magic-weekly-2.html","68c0bd770789368f01244d7716157830"],["/blog/magic-weekly-3.html","7f83cc01c6a60cf701af162ae3aa9e46"],["/blog/magic-weekly-4.html","9873d12fbf725c7e2e6c8f0a99fa07ea"],["/blog/magic-weekly-5.html","96f958cb1dbf84c41aa629602c6cae6c"],["/blog/magic-weekly-6.html","c36aaceb72f205dd06af42c81d228c63"],["/blog/malatang.html","d8b0b71378106e0be78bd8d73336c8b2"],["/blog/markdown-extended-latex.html","5aa6ea9383d28a0afb14a12229635503"],["/blog/master-interview.html","1e27f076f38a54e7688241dbd7eaddc0"],["/blog/midnight-thought-1.html","25cf9c818c3c73bde177895cc77794da"],["/blog/midnight-thought-2.html","60fa6f0d41fbc4f380be349e561c66ec"],["/blog/midnight-thought-3.html","e38ae885f849959743a04b7ea2d080c1"],["/blog/midnight-thought-4.html","15b391b4cbe421c2c4bedd0c38930feb"],["/blog/minicom-the-best.html","b1dc6e7cbce9386fc051117ded7a7068"],["/blog/my-desktop.html","64981302d636d84e3e725386c3ebb8b7"],["/blog/note-take-tools.html","ec83da7a78f822a7d54b2dc3271ebbf4"],["/blog/owncloud-nextcloud-install.html","f4297528041517e1bc371793733d7158"],["/blog/pass-google-pagespeed.html","bc30b9fd870fc24cc790d455a661e1b0"],["/blog/pep-257-docstring-conventions-zh.html","82373efbfff03aa8c7300c3f868107f2"],["/blog/python-argv-error-in-windows.html","49cb71c921d3c3294aaec79ab194ff5e"],["/blog/python-skills.html","8084fa55cc4d5a38f090b616cdb48158"],["/blog/python-special-method-names.html","8a26d0b0cfce4a9fafc20cda420f6870"],["/blog/quickstart-for-simulink.html","6ccc8631e30528f61ae08e4fbc1aa7d8"],["/blog/run-background.html","56e1d303625f37127220af0990e252a8"],["/blog/sanguosha-pudg.html","e190a16060eff104449e73d7758f6612"],["/blog/simplest-note-develop-note.html","55d39bdb9904074fe1a7eb25f003666f"],["/blog/simplify-the-img-upload-in-markdown.html","dedb5e458b66a7726c9e94cd3401ce05"],["/blog/ss-set.html","bd9412d6aa6a330b433eba8952336ce4"],["/blog/tools.html","bf7ec589bbadeb77e86fbd1ae16cd2b3"],["/blog/use-mklink-to-save-space-of-C.html","377197f4fcdf279f04edbb0bc762a04c"],["/blog/vim.html","3b2cf81c0f1ff75c255062e9c3e588e3"],["/blog/vps-choice.html","2569a02300accb0c262e83efb33ef936"],["/blog/whats-new-in-python.html","bf7a7f22ed732a81a0dd5cb088fa4b9c"],["/blog/win10-boot-repair.html","79f926efc8cd3bb7f011d3636e5f8dd6"],["/blog/win10-bug-about-bing.html","1ee751181da96a8df4de983ea9472a19"],["/blog/windows-linux-autostart.html","29dfadd1f5a9fdc6d27eef266047ff9e"],["/blog/windows-or-linux.html","c33a5414bc7600c7857b31eacfdd5660"],["/blog/windows.html","af7f61976ecfe5232adbb347a0c0d08b"],["/blog/xiaoshuo.html","494d791f578ac175fc61ba587523b6d4"],["/blog/xilinx-vivado-usage.html","de04ce31b446d0654bec5d614f0b38c1"],["/blog/xipai.html","21aacbadd07e354c5fe7933c87ead4fe"],["/blog/your-name.html","b99d0b4576f196e1c194e77baf7a2ed2"],["/blog/zedboard-1.html","70cac6ccefca5d864f5a04f422f70c92"],["/blog/zedboard-2.html","cba0ee6ecf835dc0bc796bb77cf807ad"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","04914732d18be8791d0cdf1a7f703ce3"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","558ad01ce866045c8337195b6b7c1425"],["/page2/index.html","dcc1da9b9f4e3b8208e8bd90f6f43b54"],["/page3/index.html","b4671a24e744cf30685b9ef3e08b2e3d"],["/page4/index.html","e91d5a0bfa8839e804d98d49494f9c73"],["/page5/index.html","23b8fdff12c7297abe45f9a63d8e7925"],["/page6/index.html","ddac8ef59fbdb6582928039f76787869"],["/page7/index.html","764a839345288d347d863fdab711fcc1"],["/page8/index.html","52af6c94424032743a4cd855cb5254a1"],["/page9/index.html","7f107309f8cc6fcc5570aeffb1f0a7b1"],["/tag.html","47346c38893df23c7ceef48b144d281e"]];
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








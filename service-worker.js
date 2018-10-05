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

var precacheConfig = [["/404.html","f8e3a3db736b27b4c06f3ba7d8c6f004"],["/blog/7z-extract-and-zip.html","c0c69c8d70c523a66222ba04e55be53d"],["/blog/A-bug-in-python-about-import.html","d50aa24f200a7cef198e9e068a76a78c"],["/blog/A-script-every-day-1.html","73645e2a1c90a5b00cf3ea3523b35809"],["/blog/DOS-rename-many-txt.html","29576b53fbf28df0a0a760fa620c08f1"],["/blog/English-punctuation-to-Chinese-punctuation.html","54220488a38b760250734445b52f91ac"],["/blog/How-to-Write-a-Git-Commit-Message.html","456713a084527630877493809747db13"],["/blog/ISE-error-when-generate-hls-to-pcore.html","fdaed21e2e6217c9e372a63d898ff210"],["/blog/Interesting-APIs.html","e3d70534f4b7c9bd390d0ce0458b2e0f"],["/blog/Keep-Your-Commits-Atomic.html","e83920359f3d1443f2cfe40fc9229def"],["/blog/MacType-conflict.html","330bf62a85325d707e513c9b154cb077"],["/blog/Minor-CPU-model-of-gem5.html","178730819bd1f0fcc9d0eeec89cd3987"],["/blog/Python-translate-maketrans.html","e4fadd47f6c4f7e5dede68cf479cdb5a"],["/blog/Raspberry-PI-Using.html","900531050717471b7618b1f637fd0af5"],["/blog/Test-My-Blog.html","8183a321bdb0dc002024885c22855266"],["/blog/Xilinx-can-not-find-gpioh.html","16525a3e07cddd1a08a4281b6517d42b"],["/blog/android.html","f3b07ccc6338479864cfd031e80e759a"],["/blog/anime-18-10.html","25280ac893bd70570e8b00139032cdcb"],["/blog/anime-2016-10.html","015cfc96d0fb7de0b90cdb6f849c92ad"],["/blog/anime-2017-1.html","df13a6a8caa45bca72a34804ccf510c6"],["/blog/anime-2017-10.html","123294c20719d1be67d349383d722dc6"],["/blog/anime-2017-4.html","830affa49d45b54df63afbdd4e4e5f45"],["/blog/anime-2017-7.html","ba0d3d97829eb287de93b25b99686de8"],["/blog/anime-2018-01.html","d2775645fb53ecd4df983f950c9f7463"],["/blog/anime-2018-7.html","47ee28c187e69786684eb5a7ce5df11f"],["/blog/anime-list.html","e442b67e49aaca2d10108a7304be2036"],["/blog/archlinux-gui.html","dcfed2357eb21dffa017c5e02e60afd6"],["/blog/archlinux-install.html","3bd412f8f354bc22834d14759043321d"],["/blog/bat-command-line-parametric.html","2b52c93fa549f19a72f92d5c4a63f9af"],["/blog/bat-file-argv.html","b184f072c3dcfcccb58ab0c64b978043"],["/blog/bing-to-qqpinyin.html","c913e78f27accaa3031512c95b60da96"],["/blog/blog-categries-change.html","e84c568e1296036598394cd362ed9de3"],["/blog/blog-update.html","22e2155afb815eade99c599f8318cec6"],["/blog/bookmark.html","a27202ad5255bdff50b39b68e1a4dc86"],["/blog/bufanjilu.html","00e2ade269eebd1d3eaac8ac9bbea522"],["/blog/byr-spider.html","f1289226bdc7c68c3c0cf9927ca90aa3"],["/blog/c-standard-library-learn-1.html","042db3fd32309ccb889cdbe20495f42b"],["/blog/chinese-hacker.html","410c5e74fba879a9654248d42acd9bf3"],["/blog/choulaobie.html","29e4a20696bd3cc19da0eb98fca69dc1"],["/blog/chuanyuelishi.html","0d1a2dbbd6afec4556df4d349de93622"],["/blog/database-test.html","8cc778c23baeb139ff3d15dbc7049127"],["/blog/diandongche.html","1cdd2ea2b35853ccde0b0149d9b3962f"],["/blog/digital-image-processing-hw4.html","1cf5907f01ed6071caf65eeafcb24705"],["/blog/fortune-lolcat.html","c901e56b3a0ce8d261c99586dfefc38a"],["/blog/from-observable-universe-to-planck-length.html","109b1e048300bcb29bf156f461cd7b42"],["/blog/fsutil-hardlink-junction-and-ln.html","456f493369958c37cfdb68a26535af58"],["/blog/geek-tech-internet-browser-to-editor.html","425655dc533f7d574272781542cce893"],["/blog/gem5-tutorials.html","36b565b1e8a7df3872c6bae8ce56691c"],["/blog/git-undo.html","4c27a6e69f2a34fa331e01af9c1ffa2b"],["/blog/github-education-pack.html","4c19b4bb7c479e6c4538f57a1e50bcde"],["/blog/graduate.html","7c00783956e040483dbd9b689709e632"],["/blog/helloseed-api.html","a5ce34a7949b83cbd0cc9593f898a94f"],["/blog/https-github-pages-custom-domain.html","9426ef9adf0adf5ddcbaac3dfeadcf57"],["/blog/huawei-P7-error.html","e49dcd415a6158736fb0d0153d8b537d"],["/blog/install-archlinux-on-USB.html","527eaa51cdee1213ec0f1769cac2d813"],["/blog/jekyll-editor-hack.html","8cc3c91a92446e5bc83e60457c3ad037"],["/blog/linux.html","6790f2b2ca121fbc3102677aff762c66"],["/blog/magic-weekly-1.html","c5b7dab9fd50dbd3ceea3b3ac418ff28"],["/blog/magic-weekly-2.html","68d56ef8c29c02271a052eac1c25133a"],["/blog/magic-weekly-3.html","71d26c6f703de80e06a175a4fd7f5194"],["/blog/magic-weekly-4.html","520e0fd711c871527df6c6a9ff0b4025"],["/blog/magic-weekly-5.html","d7b97d21c8bd5a1b06a880ebb8a818a0"],["/blog/magic-weekly-6.html","c505040b334253784cdf8ce4a0390729"],["/blog/malatang.html","563e3b56c9d08ee2bc553d7819f55458"],["/blog/markdown-extended-latex.html","ed37dfa44f955282a6016718d7f3ca80"],["/blog/master-interview.html","03ad23414aabf0ffb1056d8022a3108b"],["/blog/midnight-thought-1.html","d2b2117eeae3a3d52f657d4534647b60"],["/blog/midnight-thought-2.html","58872ac29803e832af7a3f5c7b25090a"],["/blog/midnight-thought-3.html","08a3d73ccd8b8df6b7298f0636524650"],["/blog/midnight-thought-4.html","72dd0e1dd0353e523fc8bfbe5cfcdb1b"],["/blog/minicom-the-best.html","4030fcadf1e11ea126c44fe6b86c4e4e"],["/blog/my-desktop.html","877c7afa702d87e5eae12b562c7b5e8e"],["/blog/note-take-tools.html","7fc51f54cac01490f5462acf5c637479"],["/blog/owncloud-nextcloud-install.html","ce63f34f917a25be63be86aafff43ce0"],["/blog/pass-google-pagespeed.html","04bc183587fa3ff9e6c18310f201556a"],["/blog/pep-257-docstring-conventions-zh.html","1f5501d31933c37cdbf0ce4f8cf135fa"],["/blog/python-argv-error-in-windows.html","d97ee2b90825d1ef8bc495baf5e82a7d"],["/blog/python-skills.html","bafc9154698d2d350d01e1726f640dca"],["/blog/python-special-method-names.html","57d40f24abf1acfa3fc0afb0ee9c2cdb"],["/blog/quickstart-for-simulink.html","8d82fec211427854fea9e2024af5d7d3"],["/blog/run-background.html","cac409e287c3f20c67e7ff28b1632250"],["/blog/sanguosha-pudg.html","47289a12716ee74fcd2321d72211053f"],["/blog/simplest-note-develop-note.html","71b6ca6c979c021081e32ef74f550e38"],["/blog/simplify-the-img-upload-in-markdown.html","74d55a80c6af80ea36dde7579d0a869a"],["/blog/ss-set.html","d729cc8cab9068e5c91749b8815bd263"],["/blog/tools.html","b73d81ff3b245f7c589f3f93250e430b"],["/blog/use-mklink-to-save-space-of-C.html","305f5b3a5bab627b108f66d0818a06e8"],["/blog/vim.html","b0a90e7d17b96b9650d8923045cfbd6c"],["/blog/vps-choice.html","898f7ff23378a6162a52c48b94664b2f"],["/blog/whats-new-in-python.html","a9bece5059fad9cd700d4c08301d3b0d"],["/blog/win10-bug-about-bing.html","2f294bd5584db1ec4102637043cceea1"],["/blog/windows-linux-autostart.html","cf3803f3268f9dff16d47f9041531c61"],["/blog/windows-or-linux.html","a35caef47f63e38c91ecd327f87c3cb0"],["/blog/windows.html","76ddaac4c2ff916e86fc5aac7b598682"],["/blog/xiaoshuo.html","2096f833063d436fda817e94d3f63b83"],["/blog/xilinx-vivado-usage.html","92a9e6136add81beb5043cd1328ff64e"],["/blog/xipai.html","98bb45707fe8e91de76e8a4563006b71"],["/blog/your-name.html","30a2bf7858da7ede21fa32468bdc3b32"],["/blog/zedboard-1.html","b7aa918bd68ce8d40561ed6c122db59d"],["/blog/zedboard-2.html","1e28978fdb32e5b0edc2ff607191088d"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","3dd74902ddb6858b5f4a3b3d6c6467af"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","61ee5ae27f84cd5b2b543df6ac376a90"],["/page2/index.html","073101534b1744ee0982427474b41c3e"],["/page3/index.html","c2d5b8ad80331af35e3609400941cf31"],["/page4/index.html","ea293bd38d536ca636102db89ea49b64"],["/page5/index.html","cca362ee0177fe00615d0815812f316a"],["/page6/index.html","1a8481e2acc82e4c524bf5b4d0e8437e"],["/page7/index.html","ca58dcd21e2eceae3f33ea333d6a8d83"],["/page8/index.html","4d1ca3017a33372e03a823ac54d968d7"],["/page9/index.html","12a0ad17afee3a86822076ae4ca89d00"],["/tag.html","a4cca1d622c0b2f84ee4beaf82317396"]];
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








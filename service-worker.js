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

var precacheConfig = [["/404.html","23622c77be5b713ae6315a39376e82a7"],["/blog/7z-extract-and-zip.html","ff9d549786123eab1422ddc86ff8c61f"],["/blog/A-bug-in-python-about-import.html","d70cc8c0062c14cc3de3e67ec425c358"],["/blog/A-script-every-day-1.html","77cc7f65bb84b9c4ca231d3c52c6be89"],["/blog/DOS-rename-many-txt.html","61d0d51e219fae2a9cc3b135bc0aabf7"],["/blog/English-punctuation-to-Chinese-punctuation.html","66e4c5cd2edbb053984d88da99f2f95e"],["/blog/How-to-Write-a-Git-Commit-Message.html","3af48a75e7686bb343819ccc9635a5cb"],["/blog/ISE-error-when-generate-hls-to-pcore.html","18cadc2bb000abd560b89120008bda13"],["/blog/Interesting-APIs.html","3df891399d5087ca940ea0350b2e0884"],["/blog/Keep-Your-Commits-Atomic.html","044693a9d1aed4d52158dc4b658e6ad4"],["/blog/MacType-conflict.html","cc67b7f1de0b59b1633e91a25ed2cb2e"],["/blog/Minor-CPU-model-of-gem5.html","78641807305711cf296c475e80d3c160"],["/blog/Python-translate-maketrans.html","376c1c9463d1bfcb5b0e34bbc8465f78"],["/blog/Raspberry-PI-Using.html","7e2ecbf845797d9246d348b12c60bed1"],["/blog/Test-My-Blog.html","22b28b74be3c65cfa28969833eaacb94"],["/blog/Xilinx-can-not-find-gpioh.html","abce49da0b39a0d6fc6ddebddae4834b"],["/blog/adsklfjasdlkfjasdlf.html","e61faff4d83a3717596f50c171b019e9"],["/blog/android.html","9547a3831e96ba0736f3167c24e73b9a"],["/blog/anime-2016-10.html","a620dc1680268f627aa186d4c114710b"],["/blog/anime-2017-1.html","5d6d6f091706dc1ff7c95af318885c3c"],["/blog/anime-2017-10.html","8fb37a3cf62961ebaa79980e1ee23f59"],["/blog/anime-2017-4.html","4cb9c0ef6348b3d6b29e5eeac47bf3c9"],["/blog/anime-2017-7.html","85fcf64c151b20002306cb854de9d874"],["/blog/anime-2018-01.html","558b9de04eca12c5362266836828dc37"],["/blog/anime-2018-7.html","c412df057e126cd9feb53c736c074073"],["/blog/anime-list.html","7095d9f9a369e15ee811068bdd430eaf"],["/blog/archlinux-gui.html","47cde0052af1416ad8c9acd6c1cafd90"],["/blog/archlinux-install.html","488132292393f685f431737210941ab6"],["/blog/bat-command-line-parametric.html","2a3dc9e8259aeb6886f71cd8b1494542"],["/blog/bat-file-argv.html","ae060cbbd0217543dce930fe1047cc8a"],["/blog/bing-to-qqpinyin.html","24a6318069c6be2f571d762e2b7cdb69"],["/blog/blog-categries-change.html","19ca7cd00ea976d843b16aaf4c05eba3"],["/blog/blog-update.html","0a7c6aa652269eaa33576565adee89ef"],["/blog/bookmark.html","0bc5baf6fa6092b637887c81e5ee51eb"],["/blog/bufanjilu.html","77e6d3de1053390da5fb9caa91940213"],["/blog/byr-spider.html","524913e5940b26edf9b3ade999718a1a"],["/blog/c-standard-library-learn-1.html","0e0a8d8aa97ada14cb7e50743bff8f16"],["/blog/chinese-hacker.html","fa58224cb19e81d9bc2599dc91337902"],["/blog/choulaobie.html","bb8d8c4157e7dbc21218e9c473564893"],["/blog/chuanyuelishi.html","7416923939a1c5253c8e713a21ac3769"],["/blog/database-test.html","8aa882c8f7e9bc970eea5b23d21fdcd0"],["/blog/diandongche.html","3c043cb4ac46b1fc0b25b355e0c25f4f"],["/blog/digital-image-processing-hw4.html","d5c4db61253a95d6109b64f715317b17"],["/blog/fortune-lolcat.html","ac4cfee4dfd6e99d670941ead7617537"],["/blog/from-observable-universe-to-planck-length.html","045052952b60c4daa4ee01b88447c146"],["/blog/fsutil-hardlink-junction-and-ln.html","8f57be17583173cf3dc72286147622ac"],["/blog/geek-tech-internet-browser-to-editor.html","725faa732fb7b9cb820862b146f5a56d"],["/blog/gem5-tutorials.html","0d185cb01101369aa109d9cf31afdbe9"],["/blog/git-undo.html","b29c3dd96c989cd9fe1fd9109e8d2384"],["/blog/github-education-pack.html","e7dcbe9a43ae8eee04203e90ed9b11d3"],["/blog/graduate.html","3695e0b1e0ea6b87ff73d4d7e481cf15"],["/blog/helloseed-api.html","f4431fc9e42c4dab119152bfb72a1049"],["/blog/https-github-pages-custom-domain.html","521ded515dbc74f6c77f5eef381ed6e3"],["/blog/huawei-P7-error.html","c95c37f1d71b8f3807e97338b86c2c45"],["/blog/install-archlinux-on-USB.html","947de36b5979e44e4ff46a032db0eac3"],["/blog/jekyll-editor-hack.html","f06ea349b439874e4b2fcb21dade6b02"],["/blog/linux.html","046213040df152b5a73f046ff11ff9d0"],["/blog/magic-weekly-1.html","f895a1c18520de81fc5989acdf170264"],["/blog/magic-weekly-2.html","1ea5c727f60b0af903d3a25610e69c4d"],["/blog/magic-weekly-3.html","79de7f10df2ac29a431abd819c483af1"],["/blog/magic-weekly-4.html","d200ccefdf42aabcbee23059457f535a"],["/blog/magic-weekly-5.html","7ffd6cfb32a999e99b213a952e2eff79"],["/blog/magic-weekly-6.html","8722b38bb1af4f74ab3323bf17d44188"],["/blog/malatang.html","da97cf196b83c75b84979fa8d6896d29"],["/blog/markdown-extended-latex.html","52e71b65fd2428425cc2c385182a1899"],["/blog/master-interview.html","f341721d4881141adb655195e605aa61"],["/blog/midnight-thought-1.html","535fb035e62114f3131332a301e7bdba"],["/blog/midnight-thought-2.html","65039b558b8470372398ae19bc066f5a"],["/blog/midnight-thought-3.html","7eee2cdfb52dc58a1aaccd7bc3c2dc96"],["/blog/midnight-thought-4.html","66fa216af9f03c371db96db80b8f5f0f"],["/blog/minicom-the-best.html","a6c1e0eb0b5b2190c3269781339cf7eb"],["/blog/my-desktop.html","fa2f08a136aa340ec423208bd3ffc2fc"],["/blog/note-take-tools.html","4d6c40913458abee94089c4776c2ccbd"],["/blog/owncloud-nextcloud-install.html","345fc56039c1aaaf0015b138347b0f55"],["/blog/pass-google-pagespeed.html","5803f08126a67989cd9c8b93be4412c1"],["/blog/pep-257-docstring-conventions-zh.html","d453d8ee72d73e68c2953b421d7c6cfa"],["/blog/python-argv-error-in-windows.html","a38e821ca064aa9565194e7b0ea07b5f"],["/blog/python-skills.html","55a3b8e5b82999b17ef909fd74e652ce"],["/blog/python-special-method-names.html","c2dcd4fd1fe4a5e10710d494dda41d27"],["/blog/quickstart-for-simulink.html","737f10d6ff159838222d12ccdb38e297"],["/blog/run-background.html","b4e00cdeb3ae4e44210c71f3965e4452"],["/blog/sanguosha-pudg.html","90a872b0ae4a53032e23cff64dd0d6b6"],["/blog/simplest-note-develop-note.html","aa18f747f0ec249be67e350e7fd8eed7"],["/blog/simplify-the-img-upload-in-markdown.html","27626eccadf32a934818e35b8a29b854"],["/blog/ss-set.html","181db748b0e98f1e9917fc5a3cae5859"],["/blog/tools.html","ceea0ec34325558dbca912e10dc3e685"],["/blog/use-mklink-to-save-space-of-C.html","dcc65771544ef4798930006e4fdb4ecb"],["/blog/vim.html","b90985b9d6fb44ddd47a00ddb233c2c7"],["/blog/whats-new-in-python.html","e255ed9a8dd043f4b0db18f1b998203e"],["/blog/win10-bug-about-bing.html","a8cc9cd76fd0d1437c5c0d8de548dfb4"],["/blog/windows-linux-autostart.html","8ce4d402cf4f41fedb4ab83757158ee9"],["/blog/windows-or-linux.html","3428bc718edee333d3890dfb0401d820"],["/blog/windows.html","22fcbabe799e753c9de3e5a15887b709"],["/blog/xiaoshuo.html","d2e83765beb87d5f20087c7f784fe2b4"],["/blog/xilinx-vivado-usage.html","fe2c5ea8f4b9239532d9f8bfc9ee26ab"],["/blog/xipai.html","b88c8dd2099a8baa31e3e543f2146795"],["/blog/your-name.html","ce24fc6e4bb448d6833554c69921e4f1"],["/blog/zedboard-1.html","35b82dbb6d20f8d381369c5baeecdbeb"],["/blog/zedboard-2.html","ed28cdd7ab00901bcfa76244ddb0ed93"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","c84fb7bd6afc51e15e0ee61adea36d6e"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","bf938406a1ec69dcceeffa9d6316336d"],["/page2/index.html","4a10bbf25dc73534a9097ade32ecce04"],["/page3/index.html","57c3425acb2e7d3359b3e9536c9cd3ff"],["/page4/index.html","c01a67c32e55a405181c99bf0b8676c1"],["/page5/index.html","4e465749e168c07132876e92d306190e"],["/page6/index.html","a8b88662855e646df136bdde15dd9dbe"],["/page7/index.html","667d9f17bd55b032783b00db0863ad28"],["/page8/index.html","259f355c99d598b987872ec88a86c5c4"],["/page9/index.html","01eb903d41369920e2166b2c76ec6203"],["/tag.html","f762b17007419dcd45b2a0c816bb8884"]];
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








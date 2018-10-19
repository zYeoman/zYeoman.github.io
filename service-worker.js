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

var precacheConfig = [["/404.html","cf476af3b629792bf0ea7814f121b786"],["/blog/7z-extract-and-zip.html","10e43cf0d546deef3e81b8ce1ef57f75"],["/blog/A-bug-in-python-about-import.html","8a90bcd33a1ee53b8bc182f25ef9efa9"],["/blog/A-script-every-day-1.html","a36ef936dd45d0df7d4239a6fdc9a0af"],["/blog/DOS-rename-many-txt.html","3327642f4f0e0f3cc587da75969e3f31"],["/blog/English-punctuation-to-Chinese-punctuation.html","a981d2d438685fc836fbbb83c49c325b"],["/blog/How-to-Write-a-Git-Commit-Message.html","f66a6ca5779721b3f086cf5602e65489"],["/blog/ISE-error-when-generate-hls-to-pcore.html","5741bb75cca5fa46f1b3b0bc12ec2053"],["/blog/Interesting-APIs.html","80adf2643af37f62d73ede0a441826e3"],["/blog/Keep-Your-Commits-Atomic.html","944850e00a5af7562586ce2597490b67"],["/blog/MacType-conflict.html","5ec5ef360b5575dc83393fd6c4c312a6"],["/blog/Minor-CPU-model-of-gem5.html","1445a068950faa93e5eed669cd53fbd2"],["/blog/Python-translate-maketrans.html","801f51e23aaa6affe5b6085a62afdcf8"],["/blog/Raspberry-PI-Using.html","12656125ed2d981820265272cfc687a9"],["/blog/Test-My-Blog.html","cbb2ca15158bf309201df819e5b80d95"],["/blog/Xilinx-can-not-find-gpioh.html","10d8398cb1e2e7caf0c440de1a260c01"],["/blog/android.html","826e4f8f38cc10f9929d4a0a7c69ff68"],["/blog/anime-18-10.html","703e3f3f8eeeee31437ba6f876093574"],["/blog/anime-2016-10.html","3720835c59f0ac29e97dbbbe51820094"],["/blog/anime-2017-1.html","12679d26d1ec21d4c699f4bf8eba48d1"],["/blog/anime-2017-10.html","342c11966158c286d3dc61084ea36148"],["/blog/anime-2017-4.html","26b3cc0c6d90a24a2f3ba095a56a88c7"],["/blog/anime-2017-7.html","e40a5ae1e1d6f79388e9d4995c2c651e"],["/blog/anime-2018-01.html","e8c986e74e8ed500eda92931b4660c7b"],["/blog/anime-2018-7.html","49c168f27dc5f5db6f6926b24b8320db"],["/blog/anime-list.html","aa0eb866019620665c59dfb8785ded0d"],["/blog/archlinux-gui.html","ed9272f347da9da24c9ffb0e61e8222f"],["/blog/archlinux-install.html","d4631d9c067006e77ecbd1764abf8ea8"],["/blog/bat-command-line-parametric.html","6e97556b1d41d497a04f1b53c2b74688"],["/blog/bat-file-argv.html","83fb1064aa5a2d24eb15dcca508192bf"],["/blog/bing-to-qqpinyin.html","48c6a1f9767af73a53b3eb4d424be1f4"],["/blog/blog-categries-change.html","674044786f00aec0f4a44794bdeaef0d"],["/blog/blog-update.html","95146126e3cbd625deee0fec859439a2"],["/blog/bookmark.html","9b5f6c67dbb2e6cf64c0379722a9a0c4"],["/blog/bufanjilu.html","27370215f95b1ef25fbc5d54395514bc"],["/blog/byr-spider.html","c6350bff22bfa28d7ca5fe184efed48e"],["/blog/c-standard-library-learn-1.html","7405528fc575c870d226b1fe7fec9ec7"],["/blog/chinese-hacker.html","00376581ee02d7a465a082bc6bb9f755"],["/blog/choulaobie.html","c8fe13b62e61732f46bd363070544924"],["/blog/chuanyuelishi.html","55d99b0caf53ddcb3c96ccdb4b1d20a9"],["/blog/database-test.html","af21d79e55c70eec9583f91d52160c79"],["/blog/diandongche.html","2609ace6b501dadfa1a6876e8043ea07"],["/blog/digital-image-processing-hw4.html","f6a41df5ca19b946aac2d25b9ee56ce7"],["/blog/fortune-lolcat.html","b7c69b0de2198d7341d7f96bbb1f6f04"],["/blog/from-observable-universe-to-planck-length.html","820b7a49e12f267c67e2add8caf56a17"],["/blog/fsutil-hardlink-junction-and-ln.html","67b788178eb0415f4da28900af0fe5fa"],["/blog/geek-tech-internet-browser-to-editor.html","8c3c45e09d615b536a743a5ffcf58ee9"],["/blog/gem5-tutorials.html","a06c463f1dbd90f50448a22f4c68f8f9"],["/blog/git-undo.html","472d3f4a6854fc8a1c73f4c72de6dbba"],["/blog/github-education-pack.html","cf2efc4e968b717174185d6ea7c180b5"],["/blog/graduate.html","dc9050369923d8552a6209066be61303"],["/blog/helloseed-api.html","d74025bae21d2f43c8b27c636b1d49f1"],["/blog/https-github-pages-custom-domain.html","f7206cb17f693675814a203545a38fe7"],["/blog/huawei-P7-error.html","f4f5ddf307b3a0943494697a61eebcce"],["/blog/install-archlinux-on-USB.html","6fef6d70e9a1eb1f65cc37b5cb23cceb"],["/blog/jekyll-editor-hack.html","7a1504e888705206125fdc9d374a6547"],["/blog/linux.html","54093f96bb27b54a03617a496cd1e08d"],["/blog/magic-weekly-1.html","7a8d6ebe1332797fc3fc7dfbf8d34d5e"],["/blog/magic-weekly-2.html","8a1aa43e5f98f4a0de613e97fffc0d51"],["/blog/magic-weekly-3.html","89484d3cc4b246108b4a8ba1ecce5216"],["/blog/magic-weekly-4.html","6cb7818e7d133542c529cb879d549d9a"],["/blog/magic-weekly-5.html","4691623e5f35a6161cab602c589a5cb8"],["/blog/magic-weekly-6.html","59e057860d213c7d8c394b25f99be864"],["/blog/malatang.html","39d34447167e6ead719c439536fe361c"],["/blog/markdown-extended-latex.html","e19a0e6c2b3ebfa053814ce9a039ed65"],["/blog/master-interview.html","5506fa3419ab372941cce9311c7369eb"],["/blog/midnight-thought-1.html","cbf3caf4ead901b2b11600fe6ffe5963"],["/blog/midnight-thought-2.html","fd69b5ed44cac883809c95e428c3ffeb"],["/blog/midnight-thought-3.html","7e371a2732949f3fb98bee37e9c96e78"],["/blog/midnight-thought-4.html","3c7a7d934c552280f1885a6017f7d94f"],["/blog/minicom-the-best.html","f0370bcd234fb26e81b97bb61b85ab6b"],["/blog/my-desktop.html","338fc77a884175697f44393856e938c7"],["/blog/note-take-tools.html","e5b18ad69da8319ded7604c23d24ee7d"],["/blog/owncloud-nextcloud-install.html","867c311745b3f199a2f1502501902f99"],["/blog/pass-google-pagespeed.html","cbeafc9be9607268497b39e6055e2229"],["/blog/pep-257-docstring-conventions-zh.html","c34f8f23be0a99ed60570f77c8029a0f"],["/blog/python-argv-error-in-windows.html","17cd22ecffe60d37c4ab1bc9c03d0427"],["/blog/python-skills.html","534a8e1a04a44c73de1375e689fa5764"],["/blog/python-special-method-names.html","e36049a69520afb239c70e69e2a29232"],["/blog/quickstart-for-simulink.html","6afec4c8f99defc6ac1d9a82f3258422"],["/blog/run-background.html","4b2c7c11eb6c4b3f7916d823e6983e14"],["/blog/sanguosha-pudg.html","15847cc8e08e52327ece9d5b5cd5adc2"],["/blog/simplest-note-develop-note.html","9ab169e9668f39df3d5651799c68b7dd"],["/blog/simplify-the-img-upload-in-markdown.html","8357324c4540b8989dd685b4fad47af9"],["/blog/ss-set.html","94579b8781f94fa02e3210b2a9bfc4a3"],["/blog/tools.html","52c9651bea9e3899dd6f4a1d7ab51807"],["/blog/use-mklink-to-save-space-of-C.html","6fe7e95f2a51370e9339be62d3c03c8a"],["/blog/vim.html","00a4bfaa3c17011e4c6730f1cc33e12f"],["/blog/vps-choice.html","332962ee880c5a964f725b25fd1fb47d"],["/blog/whats-new-in-python.html","cf435006396a385335edaba8f0b4d6b6"],["/blog/win10-bug-about-bing.html","c570877bcbdaf9574acfa7907b5bd518"],["/blog/windows-linux-autostart.html","ee7fbd57494daf8204e5247331c9394f"],["/blog/windows-or-linux.html","9643c4399de961a964c53d11c29c8c33"],["/blog/windows.html","a43d5fc1843309b655f6ae4245b3a826"],["/blog/xiaoshuo.html","21f68fc46dfd595776ba58710d255d68"],["/blog/xilinx-vivado-usage.html","501607d15e85e9955c45141e967cfc31"],["/blog/xipai.html","97732b6a760c87d2b9c48a0b6d3a8f64"],["/blog/your-name.html","e1bd13e877dbfcef7c6c99f333cea68d"],["/blog/zedboard-1.html","d22e4b840df39f31e566a97eac481b1b"],["/blog/zedboard-2.html","8b40a5b27b16bd2749d97527d7f854b5"],["/favicon.ico","6a0f965780305636d4f0cfbcd00fe9c5"],["/ie.html","5ed1c821aa9823c07aa4bc9a610fb3af"],["/images/icon128.png","0cdb14fe748b85d91c503f1824d7b17d"],["/images/icon192.png","14b76723a06e315e723cd361ac20a72c"],["/images/icon256.png","89e6aa3015ed510dc7fbcaf530de57f8"],["/images/icon48.png","61dab8b71103434a77855a64fbf7025a"],["/images/icon512.png","e4b488d25dccbb299dd96a3ef80ec823"],["/images/icon57.png","3c3106cd2a92b48562d5a0a1345a6220"],["/images/icon64.png","9449d84967e2d0fbb4ef74e216592fae"],["/images/icon72.png","b7997ba95198a8b3497e901aaf52f824"],["/images/icon96.png","f0eb37420b068c04fe596de397b01025"],["/index.html","e0c17448c3374308c94b285720a0bea1"],["/manifest.json","24a7ee2efe5dc6f0c21172337f5f5d47"],["/package-lock.json","5f933fac97e8a63bca02d44aba470923"],["/package.json","4adc5410695f2df09593b3796926b577"],["/page10/index.html","bf0b98e58201646ae7261ef1b6843b14"],["/page2/index.html","d71592ed05535b71199bf45123ca643b"],["/page3/index.html","b5c5659dc304d8d37927024e8a2a8eda"],["/page4/index.html","d4df1efb8ea5988c3cc05ad55a214a6b"],["/page5/index.html","d94601cbcf337685744753f809a24362"],["/page6/index.html","ba22f3b22605d7b61d87690ac6111d9b"],["/page7/index.html","f5c9e5126a089c543121032d186201ff"],["/page8/index.html","f98ec31d62c9248cbbd9b2112cfd3de3"],["/page9/index.html","8ab294f46d44b32b2efe64be2e7b2242"],["/tag.html","c00a6bb833c1bc0a6c0e0ea482f2520e"]];
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








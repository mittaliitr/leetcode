'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bbac00cd0f1b05a40d2122bbbf975114",
"index.html": "c6165ae2cd4b3115d3818be05396a48d",
"/": "c6165ae2cd4b3115d3818be05396a48d",
"main.dart.js": "94df2801a40b37fa2b2c5a0a17dcd1d6",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"LinkedList_Patternl.html": "31575844f99ece96e90938178dc31889",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "40b87115ad330ab50c87c8049f49fd20",
".git/config": "e8ade46248eacf66a28b9200fcbcb6fb",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/3b/8b705ec0149da57a80298bc681356d1fa1a4f7": "f3947ae0923565274b936da66337e6cc",
".git/objects/32/c57ec5f47d97eaac51e19310d3371925d2f4f3": "17adf20720f222f46ce0cdad460b414f",
".git/objects/3c/33d50fdbdd165e5a430b11b8b0394caec52310": "0d34744688b31140ef64b9acd7e9ea19",
".git/objects/5a/62ee684d3507d39a09ff65d9bf9676604fcb15": "2c86b8139758e4a514dbb31c0b212915",
".git/objects/05/d303c4cd2ca0e1eb6043140212fdfd7afbfdf6": "427eeb73e8875962395371799240fac0",
".git/objects/02/98dbc35978a78ce24266c85c3a0593f36f0f34": "825aaf17e0250a2f4557d6402760de6b",
".git/objects/b2/4cdf2ce8253f7754daa2cfc42ae3f1d8c63898": "92edf75efc0e2ef3a91fbbafcfeb942b",
".git/objects/ac/854f5e9b41d4b28e8d20abcef13010f9948e26": "d391039d879de86ea4a1e22157e52ff7",
".git/objects/ac/b301758943af24fab653e87520cc63592fbcb4": "04edeb0af712650aa2144a7b542d0675",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/f745584b8aacd92497358225f0b85e4c9ed20a": "8f3973e8b723bb95005d288838d52654",
".git/objects/fd/0b4d25b272e381a5ebed81bfee17e348fc5321": "7a159d25c64ccf686c5ab0cc9879e398",
".git/objects/f2/6e149162dd15ab0643756ae28d2f85b5f01d80": "9cd617ac49d48464ef56453a300ccb63",
".git/objects/fe/2e52ea3ba98c76c2290e7cb53743134c82ced4": "c29c5caa6d131467afead66481c59f68",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/5cc3e13ea8761432f1b3c4dc7d8a9d114e3abf": "117a364d55f4e9ade130a7b3bf9ccbf3",
".git/objects/11/bc7ee544c4ef8b9fdc86414efedcc1b3c387d4": "55b18d5971063e69dee4f3518be4abc0",
".git/objects/7d/8961fd35cbe3579c38605e89d4525efcde1ab6": "d71d5c88b19ef65d48b50c6d89466055",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/42/bf43a19882be29426ba6891a3a4394c5861e78": "269c14756849c2dd480950571de294db",
".git/objects/45/15f23b8749f183a0b40bc0216ea2ece8085228": "2c6f2f69716238d79e58791b703a9b18",
".git/objects/1a/5fc592c0631d1603a6490a61cbff834a9ef716": "0b919451e2c06b672fae7527fc630295",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/bf9d6121034a0cda5cf2f41b507dc131e96746": "42c9ee1e3aa76235b031f2d506d65024",
".git/objects/2a/67b055f2089d51b193683471eaa685cb37e17b": "23fcf5925ad08ad4471067954b58cddc",
".git/objects/2f/e0f332348d66a62ede494b6b0b9a45ddcda77d": "20d0dd4ae672588d7f28ac1ea9959f1d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/4f1b500c99b3fe6c40d8411cb4ecc90729595d": "e4a3599a810064dc866b0916e6a5e4b8",
".git/objects/00/747acd73495ca4d2641b5005207ee759ceeed7": "0991ba951f386f9f2ac7332b591c442f",
".git/objects/36/f2d1c2ee8108b4c5f3883e45e9c7256edddf77": "eb3e520298560c8ab9fae286e1ca9be0",
".git/objects/31/4ce8af4a42aaedd95e7c2de16357bd953f97b4": "5ec8af1dfc2c9e1fb75a890166c5452f",
".git/objects/65/219b3a000e42bb525b1fffcd31b148a313eea7": "bcce7b72590453d0465fef2822e2bed3",
".git/objects/96/5feee47efd64fe7d38823886bc86ea459e08af": "6b97160f356232823d66d822c0f84318",
".git/objects/3a/cc641534479df8285ecf94cf76e7e75c08791b": "7559500cf0b918ce1b4170c4d6c4a059",
".git/objects/53/8b96e492275bea7200a6945d5b03b2f41a17f8": "9e8a8b0029aab67e5a3f269b10f3b385",
".git/objects/01/c9b0a9b56b812d202c9fb968cba0105d1e5578": "2476fa1da9a303ab912350a30172869c",
".git/objects/52/9afb9381f09ce5597259bf9dc564e8ef47d35f": "c5b8589945534ec380217d6d69f88b0f",
".git/objects/64/abfbedbe601db890fdae5e05d25624608e675e": "b969c829a94317cea2e03fdbe0f50e99",
".git/objects/bf/63f519f0935ce0ab2fd9d726dbb9eb3c3825d9": "513644683f519a1e749c8118320a1039",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/88a719c282811683262ed2fbf2abde4ceb6294": "8cf7f075612ba7776e2136f75a5ced60",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/624fa6b542c6e7fdbf7b9198064a9279e138bc": "55b113b065d6c7700422ab6b979cf33a",
".git/objects/e1/42c3b4cd05f6cf38b2389e492005aef4bfed35": "784fd20ed08bd32bee3e44d6fe5e94cd",
".git/objects/e1/51f76879c44c688e888941e4d292d410b70a47": "5ac73063a9984c8a02d3b5a83116d9b5",
".git/objects/e1/26d7727e18158f50773be8ae019d616618c4b5": "2eb11b59df6fd6bbe7fbdecd05999b32",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/ae0197dbee20c2c31ff63f263740a2f327e136": "cd3fbf7af06ed9cef3a0757dbf632edb",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/a719168d760aa5564f65772012f560b8444dd3": "a121c7010e8ba57b0c7b26b1bfaeaced",
".git/objects/e7/d970d2f1b76a5195a5299e499c78700e23bab1": "b8bbcb59ca969639e00fb39028aabb63",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c6e0a94a16d17d11fbe309f17791b8572dc6c4": "35ee74e9b8da87900ccbe7bd3e274718",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/83/f6a5c933242a000608963b324cb0815f11b6f7": "f45d2870fb4579e0a243d0eb64e2c526",
".git/objects/77/56aa99425698e79756be090c65a13e0020f557": "569cd7020e78b0881a73b3a4c1e8fad7",
".git/objects/4a/fa7905efca2a0fe6cf536990b7883b1eb821cb": "9988986d2f20ea0bc21ae2860f682373",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/652a7bf9c504861f56dcb42c178dbb5cd875e4": "9ee72448e6d523ee9b1405ed5fa9abe0",
".git/objects/49/f7043df766612d28dd9af428ec669a96af5b47": "6e76fa234ba7d5b1417121b8698d8db2",
".git/objects/2e/5d07fa0b4839ec547180ba8b1cae7d3bce4649": "8d595870d915566c9088d3631029117b",
".git/objects/22/eca0af27ec18c628bc9f2d94a65f99ac24153b": "11bff94e290f2de92ad6101e741794a2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d14a2139fdb0c7acda164ec91a05e0c1",
".git/logs/refs/heads/master": "d14a2139fdb0c7acda164ec91a05e0c1",
".git/logs/refs/remotes/origin/master": "32416ac87554b6a5b89618454dbba404",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "0c4f946424a40e5591a978ea6b8f56dc",
".git/refs/remotes/origin/master": "0c4f946424a40e5591a978ea6b8f56dc",
".git/index": "651a65b9aa004812537891a5ac6d9e1d",
".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
"assets/images/LinkedList_Patternl.html": "31575844f99ece96e90938178dc31889",
"assets/images/questions.json": "cfc9b2c05e71d08e4d825216731656c1",
"assets/images/background_image.jpg": "98ac8828af0b0b45d5d9571f50c1bce2",
"assets/AssetManifest.json": "358f6f746ed6c3e321b788f497905d51",
"assets/NOTICES": "6a532ac35f664bcfe857b691ccb1d09c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

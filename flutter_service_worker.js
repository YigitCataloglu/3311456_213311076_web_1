'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "8a7ee7b6e8993ff57568b2cd13ecf53c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c51e77dc4a3502f138210a1f196a4cf3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f1dd9f48ad924bcc512c85912f2d5422",
".git/logs/refs/heads/main": "5d755c04ab4cf969bc69fec773672383",
".git/objects/00/e8246a668292878550451c8f9a9a7fe0a4799a": "30d972f969eae9bb9cdc0d57a298b3a4",
".git/objects/04/cd8ababb7099d7423a96151a672fbe05ebe080": "63eaf6517eba049609c6ec2fc04707ac",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/18/ef7f5256d774368f9cc6aabcfdd5945dc575b7": "80c5964879aec5448ada5996842d5fd6",
".git/objects/19/0c1c7d7c7c0e3ae3077cb6b46c536191fed2fa": "7ed005ecb846ef823285f18e70a86fbc",
".git/objects/1c/9f72c596b508fe80771f8f882d91b69b8bff81": "1e76c5126aa3f08226557808f367ca1a",
".git/objects/24/61155e68605525d3f840c8260b120e4f9d1e99": "1edb249d4f95db8788f61e7c6a685205",
".git/objects/27/b337c0e1236ce8dcf83f854b56ae30031adceb": "e57f7c8cc1e0197f394ad388f0d2e1c6",
".git/objects/29/58627670e6582c65747d86da40c5b9ece671bc": "cc72c1770128c78429897cea4af96cdc",
".git/objects/2a/8090ec86b24b7639d7a85df66fa88deaefcbfd": "245569ca68962e73bd8fc63ac68ab6a5",
".git/objects/2b/6e4418151d31a64d15865822ec77d60f356ecf": "99cdf64ccdcc7bcef84cbe2cf6b2a09a",
".git/objects/2c/1233c7cd43a0694e07857e83b855c4ca66c0a3": "78998df1d0453132fcd2618e37900dd1",
".git/objects/30/6501ccb55da18f21e57f24552e6a35ac2fedf4": "bac153967ea8205adbae9d9ef63e3bd4",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/bf5b362c2cb3d0f0474d7f120a41eb486c64ed": "65a482ca986966f3a33d35ac53f919d6",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/c79d028d2f622dbfacf9d34d9795f16b1e549b": "2b72a72a6d36fb6f84b43a44d98465e3",
".git/objects/45/0d807fb7b29254b20d11bc114009b3839bf3c5": "becc61a7805d8ca9b2b003fdd4a19f02",
".git/objects/4a/d2365ce53a668b5d489971a6de86db043ef880": "99b5f5db1a2a409ee6fe4faa18d8a6f1",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/114579367bbe236a11b8f8e9e05b98703261ab": "feb182d02ba56fb0f2cba1fe3c6d7cf3",
".git/objects/4f/3ce2e17e4b510c0b654ba66de5b9b892a6b8fa": "46f381a8c5c2983f589ab8d0da57bec7",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5a/cffc0aece4e0738d77eae26a8d566f2d60f08a": "469bcdec44d74c16f91ec77e8d546fac",
".git/objects/60/7d9495fc590e38da5222f6660b0d0949455703": "65d6d6eb4da66e9f33a169f59ae328f2",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/b0701989e04f1693badd44b776e849b976a3b8": "a347797c97c87eb994d323fc970be55e",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/e96c643589aedd190370e5426f83e89d8fdff6": "8937ba6079290f6dc6c3a2eab8e72cc1",
".git/objects/85/433256b205c161f09bcfb5a59d5c0fa82a379a": "39f63168a972067dbb329670bd7ff509",
".git/objects/85/94dfcbc95921970224f867d75084d58b870b18": "ecb461c1bc26b2ac2118c9feac1fd405",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/97a1d0ef8ceeea58532e737f1cc6f74adbcea9": "7c7f0a2d6b2363c287c347f5e13d345d",
".git/objects/8e/d81bb2f7b079628a63c7a9818f43d4e4c284b2": "dcc8ad1eeb8db50498bfc9a04797f473",
".git/objects/96/252b0b31f186c334ac5e7bb9b706a4ea9522bb": "9e5a871e7c070a8d09af0453e45e6dc5",
".git/objects/96/ba627ec13edd4e21a2913ae8012c7c3eba710e": "2f949ccbd5730bf8a9eb69b9e9ef3cc1",
".git/objects/9b/110a484ffa60d6a9f9905e2f50e8151bd300a9": "9ecc0692f1634b854acc7ff45bf43038",
".git/objects/9b/ec9c72304a61f5857eca327b244451d6a691d2": "724a462258cecb3c11f05cd9fa5de58a",
".git/objects/9e/c95813fbcd6e2e580ca1379cb1cd21c2443e55": "0bc4a2aca2283e85212b4d84ffdb9c2a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/2f9f463aa147b89f10f663d7d802457b87eae9": "aef101ff19a88e50b14f436e04943c1a",
".git/objects/a5/dfebcf1c2d089c29defa2f036da98793babbf3": "4b6e4a445cc2929cc0895879b2cb15d8",
".git/objects/a8/783e849db074f4a1c148b9f78335de12e9d821": "5976906e6b453280a3e0c916039206ba",
".git/objects/a9/22fe99a9f9bd27b25faeaf0e23bd7d2bab292f": "eaf945def270b41615677ad6b1c41f30",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/3740f9b6c1da3d1aed411ee99956d0f5f095f5": "82b41773ea2be4a0a80bed545c4d36ff",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/732c92b2ad4048d59dc79b54f75704409a73cb": "012295ad0add4fba63ba741401483bb5",
".git/objects/c4/518be204073830a1e1451cd434058ece98631a": "f59b17f7fd8f996a4b5f2d25cc28c244",
".git/objects/c5/48cdf543d68bca9e35dcd54e7e3e2bcc3b2188": "c9b3f2618beb1eb248f49fbb92f57350",
".git/objects/c7/580c7ebe7dac20ab13ab393c580a74dbb3b562": "59fcd75c8ece6d50e32da362a22c7aff",
".git/objects/cc/295e8d85dca2170d86c3b8cbcee40c17e71b12": "543e4e89481f99f2c61d04466262d527",
".git/objects/ce/c8f0a984239254f28f1f6c4dd279e30d104e49": "486c4a8c969d9314c6aad13c8f3367fb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/d66a9741e9eb6ccebc0d733dc15864ae4248da": "7f43b4311a2730b3cd558641ea342a7e",
".git/objects/e1/08b0def3e7b6afb06dd9ccb6feddce63f954ce": "a7d9b871015159b9b153ea1d26f940e4",
".git/objects/e1/0d0595e795611dce45c332f5b2928cac4cee66": "378733a225cb4a9fdf5ad7207238e43c",
".git/objects/e3/cb2ab7fa6f059e20363c16f20c6d3be9d607f6": "9f81af160d9cd6259783f30cd3225552",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/db55a721f2ffaa9b19ed28024511c1708fe12b": "076aab75e00a7b88b96b42147d0eadee",
".git/objects/e7/62116423d4fe48dcd8eb1736b146967b7a24a4": "46449c246f3b895071d8c08a8b395f8a",
".git/objects/e7/eaac28c38f9a7442a0a820cc83c12456a194fd": "d09ac73aa17e97a8c84f04dd550d6605",
".git/objects/e9/b8cf796f3016144ab60b002ec6eb0b8eab5f86": "98fc01d75aacae2e4e7a82b1470d0cdc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/09d0bfb39260659966c772717007bb294e9ebe": "4cc9bbf32c77e17e90b8c537e7df01b5",
".git/objects/f0/58e972c45c95a4af624a9f51059a4d039f37e3": "d1fc36791a7d7b6449bafc5c087fed5c",
".git/objects/f1/0ef4c1c71bc7899a103d8a2b0d5264485f5d8e": "987f167c5c68bf1e881dc53b0e3f0470",
".git/objects/f1/930625ada8f973be5e25822864b640910f9b95": "2920c83a4d70a4eb630c767c5574c486",
".git/objects/f4/ff3a258e7fc9f0c93ad8a40cce8a61b1fc1852": "c4483ae92edca1cbd722ac5775716fc8",
".git/objects/fa/a07414d52f8cd219a44a8329745dd7c5daea87": "c5eeb324b7eb93c7123bbb4b644862a3",
".git/objects/ff/5b9c5ca6fb16005df479e174652d076d3de46a": "9f197802f08cf8529fc8337b2347252c",
".git/refs/heads/main": "f5b79896c5026f5493c430c6a21abee1",
"assets/AssetManifest.json": "bb006235efa620961cdd3ed1fc633ae9",
"assets/assets/fonts/Philosopher-Italic.ttf": "e72e183b755b70c41b9c182f5700fb5b",
"assets/assets/fonts/PTSerif-Italic.ttf": "f264e36f9419562f1605901418716d43",
"assets/assets/fonts/ZillaSlab-Italic.ttf": "cc185d6e758004f8a84ed64c80e5842c",
"assets/assets/images/backgroundlogin.jpg": "3020722adb34a86b9eddd01147990be2",
"assets/assets/images/borsa.png": "0402be60623998a2c9d53cfe8a9c643b",
"assets/assets/images/borsa3.png": "fbffb2be125999a733431c1a1ed4ff17",
"assets/assets/images/doviz.png": "447b96612fc78f15a2c5091855a0032e",
"assets/assets/images/erdemir-logo.png": "9aa8be239c20512e52d9ff51f829e610",
"assets/assets/images/eregli1.jpg": "9275aeaa49e330a21eb2973dd399fe55",
"assets/assets/images/eregli2.jpg": "7485133755d6797ae5534c32fd973d7f",
"assets/assets/images/eregli3.png": "873c6c83f7de8b4a81585d972ad64761",
"assets/assets/images/eregli4.png": "66a052790f14e5c278afeb82d2e9b5d3",
"assets/assets/images/eregli5.jpg": "8ba9c8dc896ad09285c264c977daef6d",
"assets/assets/images/ford1.jpg": "61234b8f44dca54619925aa63371e5f2",
"assets/assets/images/ford2.jpg": "f6aed503ef49b649c8f5fb43e61fd746",
"assets/assets/images/ford3.jpg": "180b05319670ce6c6334ca39c37ac87c",
"assets/assets/images/ford4.png": "13acf6bbcd85122a50a4cc6cbee7a935",
"assets/assets/images/ford5.jpg": "90308dd19a7c9deb8f08e4ec391c5367",
"assets/assets/images/fordlogo.png": "6f27cf5a5df3d804c624128e309cdc68",
"assets/assets/images/fordotosan.png": "0ca179a36681ce6ea6e0688203f06fc9",
"assets/assets/images/fordpng.png": "509499e6abc20ecb75f7a3140f65c0e0",
"assets/assets/images/kkart.png": "810d0e6fbf535cc2359f88ce8ff07284",
"assets/assets/images/logoson.png": "1dd0165122706bf99918a0d374b6e066",
"assets/assets/images/mastercard_logo.png": "2191c8dfac39522b3d6e083f40282b01",
"assets/assets/images/pastagrafik.png": "4c39a662597cd29cca85baaabca543c3",
"assets/assets/images/person.jpg": "c2ec8ddde44fae32c37f10fde0d6fb34",
"assets/assets/images/sisecam1.jpg": "7ae755da2b79af5ac59d946034909a05",
"assets/assets/images/sisecam2.jpg": "274a5daba522ed7f237922b4e9362b77",
"assets/assets/images/sisecam3.jpg": "4d3d889f74f1d3679dfb2a618902bcd0",
"assets/assets/images/sisecam_logo.png": "0407407cadabce9cb6c284ca64bdedab",
"assets/assets/images/sisecam_yatay_logo.png": "9bc63b8a60eb9a015b3f3d94dac54847",
"assets/assets/images/tofas1.jpg": "4b8b28412a70dda9d2ebf26912d6359e",
"assets/assets/images/tofas2.png": "f3f6a25a33e5cdefe56a81a69c64eb50",
"assets/assets/images/tofas3.png": "00164a8ef02aa79e887a4142b2f19f16",
"assets/assets/images/tofas4.png": "5d8279c34435e96fd632eb83c359c168",
"assets/assets/images/tofas5.png": "0c20c1a710c841f09e8b753ab043eadd",
"assets/assets/images/tofaslogo.png": "8cfdc352683f88d7aff7863063d64e8a",
"assets/assets/images/tofaslogo2.png": "5764a465c320e8bf7528bd64c0bb5ebd",
"assets/assets/images/varliklarlogo.png": "fafa56f66a672a5232b72b49b706ea80",
"assets/assets/images/varliklarlogo2.png": "220458fdc55ae6cda855376a5790ce21",
"assets/assets/images/varliklarlogo3.png": "07488594c0fffd9d2ec05fe7d3621b16",
"assets/assets/images/vesisbank.png": "a05e7c25df99fcb3a4ec61016f8856be",
"assets/FontManifest.json": "d9fd0685b51fb66cd895cb6462442e4a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "6fc7858907a85d6fa7dc1da5457b252f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "467f2874ed907ddd6eed762aa5cf09b8",
"/": "467f2874ed907ddd6eed762aa5cf09b8",
"main.dart.js": "e054500fefc86d6919654d25be8be66a",
"manifest.json": "e95b5a8694a451abae50a88add093d5e",
"version.json": "0c53cc2b7a2e230a4d0c731dfdb1124d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

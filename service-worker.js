const CACHE_NAME = 'leitor-codigos-cache-v1';
const urlsToCache = [
  './index.html',
  './style.css',
  './script.js',
  'https://unpkg.com/html5-qrcode@2.3.8/minified/html5-qrcode.min.js'
];

// Instalando o Service Worker e cacheando arquivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Ativando o Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Interceptando requisições e servindo do cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
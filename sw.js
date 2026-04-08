const CACHE_NAME = 'libre-tentacion-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './logo.png',
    './alfajores.png',
    './alfajores2.png',
    './atun.png',
    './brownie.png',
    './empanadas.png',
    './jamonyqueso.png',
    './muffins.png',
    './muffinsclasicos.png',
    './pan.png',
    './pastaflorasmini.png',
    './pollo.png',
    './porcionpollo.png',
    './porciones.png',
    './zapallito.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

const staticCacheName = 'site-static-v1';
const dynamicCacheName = 'site-dynamic-v1';
const assets = [
    '/',
    //html
    '/index.html',
    '/loginAndSignUp.html',
    '/Customer_details.html',
    '/sitter.html',
    '/Explore.html',
    '/To-DoList.html',
    '/fallback.html',

    //css
    '/home.css',
    '/login.css',
    '/CustomerStyles.css',
    '/explore.css',
    '/sitter.css',
    '/swiper-bundle.min.css',
    '/To-DoList.css',

    //javascript
    '/app.js',
    '/home.js',
    '/customer.js',
    '/explore.js',
    '/script.js',
    '/Server.js',
    '/sitter.js',
    '/swiper-bundle.min.js',

    '/images'

];

const limitCacheSize = (name, size) =>{
    caches.open(name).then(cache => {
      cache.keys().then(keys => {
        if(keys.length > size){
            cache.delete(keys[0]).then(limitCacheSize(name,size));
        }
      })
    })
};

self.addEventListener('install',evt =>{
    //console.log('Service worker has been installed')
    evt.waitUntil(
    caches.open(staticCacheName).then(cache =>{
     console.log('caching shell assets')
        cache.addAll(assets)
    })
    );
   });

   self.addEventListener('activate',evt => {
    //console.log('Sevice worker has been activated')
    evt.waitUntil(
        caches.keys().then(keys =>{

            //console.log(keys)
            return Promise.all(keys
            .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key =>caches.delete(key)))
        })
    )
   });

   self.addEventListener('fetch',evt =>{
    //console.log('fetch event',evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes =>{
            return cacheRes || fetch(evt.request).then(fetchRes =>{
                return caches.open(dynamicCacheName).then(cache =>{
                    cache.put(evt.request.url, fetchRes.clone())
                    limitCacheSize(dynamicCacheName, 15);
                    return fetchRes;
                })
            });
        }).catch(() => {
            if(evt.request.url.indexOf('.html') > -1){
                return caches.match('/fallback.html');
            }
        
           
        })
    );
});
   
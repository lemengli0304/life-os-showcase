const DEMO_CACHE='lifeos-public-demo-v1';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
 const u=new URL(event.request.url);const scope=new URL(self.registration.scope);
 if(u.origin!==scope.origin||!u.pathname.startsWith(scope.pathname+'play/'))return;
 if(u.pathname===scope.pathname+'play/judge-guide.js'){event.respondWith(fetch(new URL('judge-guide.js',scope).href,{cache:'no-store'}));return;}
 event.respondWith((async()=>{
  const cache=await caches.open(DEMO_CACHE);const hit=await cache.match(event.request,{ignoreSearch:true});
  if(hit)return hit;
  if(event.request.destination==='audio')return new Response(null,{status:204});
  return new Response('This demo needs to load its asset pack first. Open ../demo.html to start.',{status:404,headers:{'Content-Type':'text/plain'}});
 })());
});

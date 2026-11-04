// Service worker mínimo: deixa o site instalável sem guardar nada em cache,
// para que as atualizações do quadro apareçam sempre na hora.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});

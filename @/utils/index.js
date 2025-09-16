export function createPageUrl(name){
  const route = '/' + String(name || '').toLowerCase();
  return route === '/home' ? '/' : route;
}

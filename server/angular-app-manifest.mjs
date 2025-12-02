
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sst-consulting-portal/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sst-consulting-portal"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5054, hash: '5ebdebd548dcffe7b4650e5f056e56fc6ba8cfba76d908a4656a1af43759253b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 977, hash: 'beb466cfd69c8f95f689b253a1c54ce5268ea58d57056c2f93c2dea8bd5e533e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25081, hash: 'e373a7320d4ca0b9131708abab5f268ccf31713a09dc8fb9fb9bc0ec857dcbf3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KOCVEOV2.css': {size: 315667, hash: 'Cw/Mao3XZhQ', text: () => import('./assets-chunks/styles-KOCVEOV2_css.mjs').then(m => m.default)}
  },
};

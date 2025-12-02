
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/SST-CONSULTING-PORTAL',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/SST-CONSULTING-PORTAL"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5053, hash: '905e6444690142b1567b7e54903152d6d0ab5a75f0229e7767752e27b3992b5d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 976, hash: '8baa641f14847c963e8c6961721f368e57f60a6e3695916bacb3bd88f73f2539', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25080, hash: '5f013e588c03ad42feb77a64f744c062bcd87b76a2c550dfb16c688b7cb89dcd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KOCVEOV2.css': {size: 315667, hash: 'Cw/Mao3XZhQ', text: () => import('./assets-chunks/styles-KOCVEOV2_css.mjs').then(m => m.default)}
  },
};

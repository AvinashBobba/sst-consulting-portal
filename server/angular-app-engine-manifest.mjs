
export default {
  basePath: '/SST-CONSULTING-PORTAL',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

# SRISIMHA TECH Consulting Portal

Angular marketing site for SRISIMHA TECH CONSULTANCY LLC.

## Development

Run the local dev server:

```bash
npm start
```

## Build

Create a production build:

```bash
npm run build
```

The deployable static site is written directly to `dist/sst-consulting-portal`.

## Tests

Run the unit test suite:

```bash
npm test -- --watch=false
```

## Deployment

Deployment should be handled by Cloudflare Pages.

Use these Cloudflare Pages build settings:

```text
Framework preset: None
Build command: npm ci && npm run build
Build output directory: dist/sst-consulting-portal
Node.js version: 20.20.2
```

Cloudflare Pages reads `public/_redirects` for the Angular single-page app fallback and
`public/_headers` for cache/security headers.

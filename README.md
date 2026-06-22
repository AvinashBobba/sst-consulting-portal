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

Deployment is handled by GitHub Pages. On pushes to `main`, the GitHub Actions workflow builds the
app, adds the single-page app fallback, and publishes `dist/sst-consulting-portal`.

The custom domain is configured by `public/CNAME` and should point to GitHub Pages in DNS.

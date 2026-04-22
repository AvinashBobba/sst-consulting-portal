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

The default local build output is written to `dist/sst-consulting-portal`.

## Tests

Run the unit test suite:

```bash
npm test -- --watch=false
```

## GitHub Pages

Deployment is handled by GitHub Actions. On pushes to `main`, the workflow builds the app with the
GitHub Pages base path and publishes the generated static site automatically.

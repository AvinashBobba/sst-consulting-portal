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

The deployable static site is written directly to `dist/sst-consulting-portal`. Use that folder as
the Azure Static Web Apps app artifact for manual deployments.

## Tests

Run the unit test suite:

```bash
npm test -- --watch=false
```

## Deployment

Deployment is handled by Azure Static Web Apps. On pushes to `main`, the Azure pipeline builds the
app, verifies the deploy artifact, and uploads `dist/sst-consulting-portal`.

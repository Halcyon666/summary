# Website

[![Deployment](https://github.com/Halcyon666/summary/actions/workflows/deploy.yml/badge.svg)](https://github.com/Halcyon666/summary/actions/workflows/deploy.yml)

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```shell
pnpm i
```

## Local Development

```shell
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```shell
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Run the builder dist

```shell
pnpm run serve
```

## Deployment

Using SSH:

```shell
USE_SSH=true pnpm deploy
```

Not using SSH:

```shell
GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## forse refesh npm packages

```
pnpm update --latest
```

## Project desc

Build tool: Vite (replacing Webpack)

Transpiler: SWC (via @docusaurus/faster)

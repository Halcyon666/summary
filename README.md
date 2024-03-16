[![Deployment](https://github.com/Halcyon666/summary/actions/workflows/deploy.yml/badge.svg)](https://github.com/Halcyon666/summary/actions/workflows/deploy.yml)

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ pnpm i
```

### Local Development

```
$ pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Run the builder dist

```
$ pnpm run serve
```

### Deployment

Using SSH:

```
$ USE_SSH=true pnpm deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## i18n 

[git i18n](https://docusaurus.io/docs/i18n/git)

My source essaies is Chinese, and the tanslation is English. Using the following script to test the translate code. 

```shell
# inint
pnpm write-translations --locale en
# start locally
pnpm run start --locale en
```

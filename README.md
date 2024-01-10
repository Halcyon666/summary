[![Deployment](https://github.com/Halcyon666/summary/actions/workflows/deploy.yml/badge.svg)](https://github.com/Halcyon666/summary/actions/workflows/deploy.yml)

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## i18n 

[git i18n](https://docusaurus.io/docs/i18n/git)

My source essaies is Chinese, and the tanslation is English. Using the following script to test the translate code. 

```shell
# inint
yarn write-translations --locale en
# start locally
yarn run start --locale en
```

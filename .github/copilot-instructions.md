# Project Guidelines

## Code Style

- Use TypeScript for configuration and scripts (see tsconfig.json).
- Follow Docusaurus and React conventions for components and pages.
- Use consistent formatting; see example: src/components/ and src/pages/.
- MDX is used for documentation and blog posts (see docs/, blog/).

## Architecture

- Built on Docusaurus 3.x (see package.json dependencies).
- Main content in docs/, blog/, src/components/, src/pages/.
- Custom scripts in scripts/ (e.g., generate-graph.js for graph data).
- Static assets in static/ and build/ (output).
- Internationalization in i18n/.

## Build and Test

- Install dependencies: `pnpm i`
- Local development: `pnpm start`
- Build static site: `pnpm build`
- Serve build output: `pnpm run serve`
- Type check: `pnpm run typecheck`
- Deploy: `pnpm deploy` (see README.md for SSH/GitHub setup)
- Update packages: `pnpm update --latest`

## Project Conventions

- All content and docs in MDX format.
- Custom scripts run before build/start (see scripts/ and package.json scripts).
- Use pnpm as the package manager.
- Docusaurus config in docusaurus.config.ts; sidebar in sidebars.ts.
- Use @docusaurus/tsconfig for TypeScript config extension.

## Integration Points

- Uses Docusaurus plugins and themes (see package.json).
- Integrates Ant Design (antd) and @ant-design/icons for UI.
- Uses react-force-graph-2d for graph visualizations.
- Blog and docs support KaTeX and Mermaid for math/diagrams.

## Security

- No sensitive credentials in repo; deployment uses SSH or GitHub user token.
- Static site only; no backend/auth logic in this repo.

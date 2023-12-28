---
"docs": patch
"@shaggytools/nhtsa-api-wrapper": patch
---

🛠️ Fixes

- fix(output): fix export file paths in published packages, add trailing `./` to all export paths in package.json; use correct export for `unpkg`
- fix(docs): vitepress broken after update, add type:module to docs package.json

🧪 Tests

- coverage: switch from coverage-c8 to coverage-v8, c8 is deprecated in vitest

🏡 Chores

- Add dependency `@vitest/coverage-v8` - `v1.0.1`
- Remove dependency `@vitest/coverage-c8`

- Update dependency `pnpm` to `v8.9.2`
- Update dependency `turbo` to `v1.10.16`
- Update dependency `typescript` to `v5.2.2`
- Update dependency `vue` to `v3.3.7`
- Update dependency `sass` to `v1.69.4`
- Update dependency `dotenv` to `v16.3.1`
- Update dependency `rimraf` to `v5.0.5`
- Update dependency `typedoc` to `v0.25.2`
- Update dependency `typedoc-plugin-markdown` to `v3.16.0`
- Update dependency `vite` to `v5.0.5`
- Update dependency `@vite-pwa/vitepress` to `v0.3.1`
- Update dependency `vitepress` to `v1.0.0-rc.31`
- Update dependency `vite-plugin-dts` to `v3.6.4`
- Update dependency `vite-plugin-pwa` to `v0.17.3`
- Update dependency `vite-tsconfig-paths` to `v4.2.1`
- Update dependency `vitest` to `v1.0.1`
- Update dependency `@vitest/ui` to `v1.0.1`
- Update dependency `prettier` to `v3.0.0`
- Update dependency `eslint` to `v8.52.0`
- Update dependency `eslint-config-prettier` to `v9.0.0`
- Update dependency `eslint-plugin-prettier` to `v5.0.0`
- Update dependency `eslint-plugin-markdown` to `v3.0.1`
- Update dependency `@typescript-eslint/eslint-plugin` to `v6.9.0`
- Update dependency `@typescript-eslint/parser` to `v6.9.0`
- Update dependency `@commitlint/cli` to `v18.1.0`
- Update dependency `@commitlint/config-conventional` to `v18.1.0`
- Update dependency `@changesets/cli` to `v2.26.2`
- Update dependency `@types/node` to `v18.18.7`
- Update dependency `workbox-window` to `v7.0.0`

Actions:
- Update github action `pnpm/action-setup` to `v2.4.0`
- Update github action `actions/checkout` to `v4.0.0`
- Update github action `actions/setup-node` to `v4.0.0`

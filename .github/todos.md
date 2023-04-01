# Plan of action for v3.0.0 release

## Current Tags:

latest: `v2.0.3`
next: `v3.0.0`
beta: `v3.0.0-beta.1`

There is a potential problem here in that I've already published v3.0.0 under the 'next' tag. I'm
not sure if this will cause any problems, but the official v3 release may need to be v3.0.1 to avoid
problems with publishing.

---

## Plan of action:

- Rename 'master' branch to 'main'
- Update repo settings on github to use 'main' as the default branch
- delete the master branch
- update github actions workflows for new codebase
- make choice on whether to use changesets or similar to manage versioning
- publish v3.0.1 with 'latest' tag

---

## Renaming the 'master' branch to 'main'

Run the following commands to rename the branch:

```bash
git branch -m master main
git push -u origin main
```

Then update the default branch in the repo settings on github.

---

## Github Actions Workflows

On pull (/push?) to any branch:

- build lib and docs
- lint
- test
- upload coverage report?

On push to branch 'main':

- build lib and docs
- lint
- test
- upload coverage report
- publish 'latest' tag
- publish latest docs to github pages (should we use Vercel or similar?)

On push to branch 'staging':

- build lib and docs
- lint
- test
- upload coverage report?
- publish 'next' tag
- publish next docs to github pages, this may have conflicts with the 'latest' docs if we stick with github pages

All dependency update pull requests (renovate.json) are made against the 'staging' branch and merged manually into 'main' from there.

## Publishing nhtsa-api-wrapper lib

### Publishing to NPM

Github Action to deploy to NPM on push to 'main' branch.

### Publishing to Github Packages

Github Action to deploy to Github Packages on push to 'main' branch.

---

## Publishing Docs

Github Action to deploy docs to gh-pages branch on push to 'main' branch.

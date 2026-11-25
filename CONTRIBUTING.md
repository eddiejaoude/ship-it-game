# Contributing to Ship It!

Thanks for wanting to help ship it. All contributions are welcome: new jokes, levels, enemies, bug fixes, accessibility and performance improvements.

By taking part you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting started

The game has no build step and no runtime dependencies. Node.js is only needed to run the tests.

1. Fork the repo and clone your fork
2. Create a branch: `git checkout -b my-change`
3. Open `index.html` in a browser (or run `npx serve .` / `python3 -m http.server` if you prefer a local server)
4. Make your change and refresh the page

`window.SHIPIT` exposes the game state in the browser console, which is handy for testing (for example jumping straight to the boss).

### Running the tests

CI runs a [Playwright](https://playwright.dev) smoke test on every pull request. It loads the game on desktop and mobile Chrome, starts a run and fails on any JavaScript error. To run it locally (needs Node.js and Python 3):

```sh
npm install
npx playwright install chromium
npm test
```

## Where things live

Everything is in `index.html`. Near the top of the script:

| What | Where |
|---|---|
| Jokes and text | `FEATURES`, `IDEAS`, `BOSS_LINES`, `BG_TXT` |
| Levels and enemy patterns | `LEVELS`, `buildLevel()` |
| Level-up cards | `UPGRADES` |
| Difficulty / enemy HP | `hpFor()` |

## Good first contributions

- Add a funnier feature request, shiny idea or boss line
- Pick up an issue labelled [`good first issue`](../../labels/good%20first%20issue) or [`help wanted`](../../labels/help%20wanted)
- Build one of the levels from the "Ideas for more levels" list in the README

## Pull requests

- Keep each PR focused on one change
- Keep the game dependency-free and in a single file unless an issue agrees otherwise
- Test on desktop (mouse and keyboard) and, if you can, on a phone (touch). `npm test` must pass
- For visual changes, add a screenshot or short clip to the PR
- Link the issue your PR closes (`Closes #123`)

For bigger changes (new mechanics, new levels, refactors) please open an issue first so we can agree on the approach before you spend time on it.

## Reporting bugs

Open a [bug report](../../issues/new/choose) with your browser, device and steps to reproduce.

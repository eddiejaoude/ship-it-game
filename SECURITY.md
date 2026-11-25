# Security Policy

Ship It! is a single static HTML file with no backend, no accounts and no stored data, so the attack surface is small. Security reports are still welcome and taken seriously.

## Supported versions

Only the latest version on the `main` branch (deployed to https://eddiejaoude.github.io/ship-it-game/) gets security fixes.

## Reporting a vulnerability

**Please do not open a public issue for security problems.**

Report it privately via [GitHub's private vulnerability reporting](https://github.com/eddiejaoude/ship-it-game/security/advisories/new) (Security tab → "Report a vulnerability").

Please include:

- What the issue is and how it could be exploited
- Steps to reproduce, or a proof of concept
- The browser and version you tested with

## What to expect

- An acknowledgement within 7 days
- An assessment and, if confirmed, a fix plan as soon as practical
- Credit in the advisory and release notes, unless you'd rather stay anonymous

## Scope

In scope: anything in this repository, for example script injection through text rendered in the game or share links, or a malicious change to the game page or the CI workflow.

Out of scope: GitHub Pages hosting itself, and issues that need an already-compromised browser or device.

#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

STASH_DIR="$(mktemp -d)"
cleanup() {
  if [[ -d "$STASH_DIR/api" ]]; then mv "$STASH_DIR/api" "$ROOT/app/api"; fi
  if [[ -d "$STASH_DIR/admin" ]]; then mv "$STASH_DIR/admin" "$ROOT/app/admin"; fi
  if [[ -d "$STASH_DIR/dashboard" ]]; then mv "$STASH_DIR/dashboard" "$ROOT/app/dashboard"; fi
  if [[ -f "$STASH_DIR/middleware.ts" ]]; then mv "$STASH_DIR/middleware.ts" "$ROOT/middleware.ts"; fi
  rm -rf "$STASH_DIR"
}
trap cleanup EXIT

# Static export cannot include API routes, middleware, or cookie-based admin pages.
[[ -d app/api ]] && mv app/api "$STASH_DIR/api"
[[ -d app/admin ]] && mv app/admin "$STASH_DIR/admin"
[[ -d app/dashboard ]] && mv app/dashboard "$STASH_DIR/dashboard"
[[ -f middleware.ts ]] && mv middleware.ts "$STASH_DIR/middleware.ts"

export GITHUB_PAGES=true
export NEXT_PUBLIC_BASE_PATH=/aetherio2k26
export NEXT_PUBLIC_SITE_URL=https://sharafahh.github.io/aetherio2k26
export NEXTAUTH_SECRET=github-pages-build-placeholder
export NEXTAUTH_URL=https://sharafahh.github.io/aetherio2k26

npm run build

touch out/.nojekyll

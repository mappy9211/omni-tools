#!/usr/bin/env bash
set -e

UPSTREAM_URL="https://github.com/iib0011/omni-tools.git"
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "🔍 Checking upstream remote configuration..."
if ! git remote | grep -q "^upstream$"; then
    echo "➕ Adding upstream remote: $UPSTREAM_URL"
    git remote add upstream "$UPSTREAM_URL"
fi

echo "📥 Fetching latest upstream changes..."
git fetch upstream

echo "🔄 Updating main branch..."
git checkout main
git pull upstream main
git push origin main

echo "⚡ Rebasing whitelabel customizations onto latest main..."
if git show-ref --verify --quiet refs/heads/whitelabel; then
    git checkout whitelabel
    git rebase main
    echo "🚀 Pushing updated whitelabel branch to origin..."
    git push origin whitelabel --force-with-lease
    echo "✅ Successfully synced and rebased whitelabel branch!"
else
    echo "ℹ️  'whitelabel' branch not found locally. Switch to your customized branch and rebase with 'git rebase main'."
fi

git checkout "$CURRENT_BRANCH"

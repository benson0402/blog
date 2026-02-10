#!/usr/bin/env bash
set -euo pipefail

pnpm docs:build
rsync -avz --delete src/.vuepress/dist/ benson0402@vps.benson0402.com:/var/www/blog/
echo "Deployment complete!"



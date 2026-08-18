#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

IMAGE_URI=$(cat image_uri.txt)

docker run -d \
  --name akari-front \
  --restart unless-stopped \
  -p 3001:3001 \
  "$IMAGE_URI"

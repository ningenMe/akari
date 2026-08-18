#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

IMAGE_URI=$(cat image_uri.txt)
REGISTRY="${IMAGE_URI%%/*}"

aws ecr get-login-password --region ap-northeast-1 |
  docker login --username AWS --password-stdin "$REGISTRY"

docker pull "$IMAGE_URI"

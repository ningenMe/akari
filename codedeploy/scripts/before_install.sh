#!/usr/bin/env bash
set -euo pipefail

if docker ps -a --format '{{.Names}}' | grep -qx akari-front; then
  docker stop akari-front
  docker rm akari-front
fi

#!/bin/bash
set -euo pipefail

# `|| true`: no-op on the very first deployment, when the container doesn't
# exist yet.
docker rm -f akari-front || true

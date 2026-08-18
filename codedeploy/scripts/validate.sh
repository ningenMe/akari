#!/bin/bash
set -euo pipefail

APP_PORT="3001"

# The container has its own Docker HEALTHCHECK, but CodeDeploy's
# ValidateService hook is what actually gates a bad deployment from being
# marked successful, so re-check from the host side too.
for _ in $(seq 1 10); do
  if curl -sf "http://127.0.0.1:${APP_PORT}/" > /dev/null; then
    exit 0
  fi
  sleep 3
done

echo "akari-front did not become healthy on port ${APP_PORT}" >&2
exit 1

#!/bin/bash
set -euo pipefail

APP_PORT="3001"

# The container has its own Docker HEALTHCHECK, but CodeDeploy's
# ValidateService hook is what actually gates a bad deployment from being
# marked successful, so re-check from the host side too.
for _ in $(seq 1 10); do
  if curl -sf "http://127.0.0.1:${APP_PORT}/" > /dev/null; then
    # Drop old akari-front images now that the new one is confirmed
    # healthy. Scoped to images matching this repo (via --filter, which
    # `docker images` supports but `docker image prune` does not) and
    # excludes whatever the running container actually uses - this EC2
    # hosts other apps' containers too, so an unscoped prune would also
    # nuke their images mid-pull.
    current_image_id=$(docker inspect --format='{{.Image}}' akari-front)
    docker images --filter "reference=*/akari-front-repository" -q | sort -u |
      while read -r image_id; do
        if [ "$image_id" != "$current_image_id" ]; then
          docker rmi "$image_id" || true
        fi
      done
    exit 0
  fi
  sleep 3
done

echo "akari-front did not become healthy on port ${APP_PORT}" >&2
exit 1

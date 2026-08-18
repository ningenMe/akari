#!/usr/bin/env bash
set -euo pipefail

# The container has its own Docker HEALTHCHECK, but CodeDeploy's
# ValidateService hook is what actually gates a bad deployment from being
# marked successful, so re-check from the host side too.
for _ in $(seq 1 10); do
  if curl -sf http://localhost:3001/ >/dev/null; then
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

echo "akari-front did not become healthy in time" >&2
exit 1

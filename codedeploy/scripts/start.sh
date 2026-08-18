#!/bin/bash
set -euo pipefail

# Matches infra-terraform/aws-app-platform's port assignment for this app
# (3001=last1tile-front, 3002=health-check, 3003=akari-front).
AWS_REGION="ap-northeast-1"
ECR_REPOSITORY="akari-front-repository"
APP_PORT="3003"
APP_DIR="/home/ubuntu/akari-front"

# Nothing here is a secret: the account ID is resolved via the EC2
# instance's own IAM role (no credentials embedded in this script), and the
# region/repository/port are fixed, non-sensitive values.
account_id=$(aws sts get-caller-identity --query Account --output text --region "$AWS_REGION")
registry="${account_id}.dkr.ecr.${AWS_REGION}.amazonaws.com"
image_tag=$(cat "$APP_DIR/IMAGE_TAG")

aws ecr get-login-password --region "$AWS_REGION" | docker login --username AWS --password-stdin "$registry"
docker pull "${registry}/${ECR_REPOSITORY}:${image_tag}"

docker run -d \
  --name akari-front \
  --restart unless-stopped \
  -p "${APP_PORT}:${APP_PORT}" \
  "${registry}/${ECR_REPOSITORY}:${image_tag}"

# Drop older, now-dangling image layers so the disk doesn't fill up over
# repeated deployments.
docker image prune -f

#!/bin/bash

# Exit on error
set -e
set -o pipefail

docker compose pull
docker compose down --remove-orphans || true
docker compose up -d

# Clean up old images
docker system prune -a -f
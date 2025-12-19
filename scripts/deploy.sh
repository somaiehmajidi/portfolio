#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Pipe failures in a pipeline will also exit the script
set -o pipefail

# Variables
export MANAGERIP=188.121.100.53
export REMOTE_DIR="/home/ubuntu/deploy"
export SSH_KEY="./ssh/ar-somi-privatekey.pem"

# Ensure SSH key file has correct permissions
chmod 600 $SSH_KEY || {
  echo "::error::Failed to set SSH key permissions"
  exit 1
}

# Sync local files to the remote server
echo "::group::Syncing files to the remote server..."
rsync -avz --delete -e "ssh -i $SSH_KEY -o StrictHostKeyChecking=no -o IdentitiesOnly=yes" ./deploy/ ubuntu@$MANAGERIP:$REMOTE_DIR || {
  echo "::error::File synchronization failed"
  exit 1
}
echo "::endgroup::"

# Deploy the Docker stack
echo "::group::Deploying Docker stack..."
ssh -i $SSH_KEY -o StrictHostKeyChecking=no -o IdentitiesOnly=yes ubuntu@$MANAGERIP "cd $REMOTE_DIR && chmod +x ./scripts/deploy.sh && ./scripts/deploy.sh" || {
  echo "::error::Docker stack deployment failed"
  exit 1
}
echo "::endgroup::"

echo "::group::Deployment completed successfully"
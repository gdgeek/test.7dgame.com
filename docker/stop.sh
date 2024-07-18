set -e

echo "Stopping containers..."
docker stop mrpp-node

echo "Removing containers..."
docker rm mrpp-node

echo "Done."
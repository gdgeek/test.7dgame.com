ROOT_PATH=../
DOCKERFILE=./Dockerfile

# Build the app container image
docker build -t mrpp-node-image -f "$DOCKERFILE" "$ROOT_PATH"



# Then the app container, and link it to the DB one
docker run -d \
    -p 8090:80 \
    --name mrpp-node \
    mrpp-node-image
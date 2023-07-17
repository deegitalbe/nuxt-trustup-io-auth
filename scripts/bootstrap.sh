#!/bin/bash

docker run \
  -it \
  --rm \
  --user node:node \
  -v "$PWD":"$PWD" \
  -w "$PWD" node:16-alpine \
  yarn install && \
  yarn generate && \
  docker-compose build --no-cache --build-arg FOLDER="$PWD"
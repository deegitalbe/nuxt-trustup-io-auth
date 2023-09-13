#!/bin/bash

./scripts/set_env.sh && \
  docker run \
    -it \
    --rm \
    --user node:node \
    -v "$PWD":"$PWD" \
    -w "$PWD" node:16-alpine \
    yarn install && \
  yarn generate && \
  git init && \
  npx husky install && \
  docker-compose build --no-cache --build-arg FOLDER="$PWD"
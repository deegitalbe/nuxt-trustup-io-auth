#!/bin/bash

cp ../.env.docker ../.env && \
     docker-compose build --no-cache && \
     ./app.sh yarn install
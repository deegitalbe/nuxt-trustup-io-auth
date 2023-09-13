#!/bin/bash

true > .env && \
doppler secrets download \
  --project "nuxt-trustup-io-auth" \
  --config local \
  --no-file \
  --format env | grep -v '^DOPPLER_' \
  >> .env
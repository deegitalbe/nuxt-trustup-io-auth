#!/bin/bash

cd ../ && ./cli yarn build && npm publish --access public && cd scripts
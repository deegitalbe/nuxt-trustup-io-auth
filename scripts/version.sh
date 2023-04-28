#!/bin/bash

cd ../ && ./cli yarn build && npm version $2 && cd scripts
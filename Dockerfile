# DEPENDENCIES
FROM node:16-alpine as deps

ARG FOLDER

USER node

WORKDIR ${FOLDER}

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile --ignore-scripts

# BUILDER
FROM deps as builder

ARG FOLDER

USER node

WORKDIR ${FOLDER}

COPY --chown=node:node --from=deps ${FOLDER}/node_modules ./node_modules

COPY --chown=node:node . .

# RUNNER
FROM builder as runner

ARG FOLDER

USER node

WORKDIR ${FOLDER}

COPY --chown=node:node --from=builder ${FOLDER} ./

CMD yarn dev
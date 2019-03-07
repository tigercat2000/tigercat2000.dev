#!/usr/bin/env bash
curl --user ${CIRCLE_TOKEN}: \
    --request POST \
    --form revision=d72a93ef76b773\
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/tigercat2000/tigercat2000.dev/tree/master
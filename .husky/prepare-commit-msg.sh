#!/bin/bash

echo "Modify commit message: "

COMMIT_MESSAGE=$1

echo "$COMMIT_MESSAGE"

printf "[HMOUNIR] $(cat $COMMIT_MESSAGE)" > $COMMIT_MESSAGE

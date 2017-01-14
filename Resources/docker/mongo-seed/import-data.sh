#!/bin/bash

for file in elastic-bibles/metadata/*.metadata.json; do
  echo "importing $file"
  mongoimport --host mongodb --db elastic-bibles --collection BibleMetadata --type json --file $file --jsonArray
done

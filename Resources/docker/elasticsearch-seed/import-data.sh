#!/bin/bash

for file in elastic-bibles/bibles/*.json; do
  echo "importing $file"
  curl -XPUT http://elasticsearch1:9200/${file%%.*} --data-binary @./elastic-bibles/mappings/es-mapping.json
  curl -XPUT http://elasticsearch1:9200/_bulk --data-binary  @$file
done

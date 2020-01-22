#!/bin/bash
web-scripts audit --help &> /dev/null

if ! [ $? -eq 0 ]; then
  echo "Bootstrapping web-scripts..."
  yarn lerna run bootstrap
fi

web-scripts audit --threshold low

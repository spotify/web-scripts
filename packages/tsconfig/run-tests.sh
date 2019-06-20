#! /bin/bash

for folder in __fixtures__/pass/*; do
  pushd $folder
  result=$(npx tsc --build)
  if [[ $? -ne 0 ]]; then
    echo "!!!!! $folder failed and should not have"
    echo $result > /dev/stderr
    exit 1
  fi
  popd
done

for folder in __fixtures__/fail/*; do
  pushd $folder
  result=$(npx tsc --build)
  if [[ $? -eq 0 ]]; then
    echo "!!!!! $folder succeeded and should not have"
    echo $result > /dev/stderr
    exit 1
  fi

  popd
done

exit 0
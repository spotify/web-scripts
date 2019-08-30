# this message appears when one of the commits found by web-scripts should trigger a release.
expected_release_message="The release type for the commit is"

# run web-scripts release in dry-run mode, looking of the release message
yarn web-scripts release --dry-run | grep "${expected_release_message}"

if [ $? -eq 0 ]
then
  echo "spotify/web-scripts: A release will be triggered."
  yarn lerna publish --yes --conventional-commits --registry=https://registry.npmjs.com
  exit 0
else
  echo "spotify/web-scripts: No release will be triggered." >&2
  exit 0
fi
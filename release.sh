# This release script determines if a publish should happen using a dry run of semantic release to determine if the
# commits contain publishable changes (feat, bug, breaking change). If so, lerna will be used to perform the actual
# publish, however, lerna also has its own logic for determining whether to publish. Specifically, it will run git diff
# in each package, excluding markdown files, tests, etc. So any attempt to force a version bump with an empty commit or
# readme tweak will fail. To get around this, we pass the `force-publish` option to lerna, skipping the git diff for
# changed packages. This allows the semantic release dry run check to be the deciding factor for publishing.

# this message is logged by semantic-release when one of the commits found by web-scripts should trigger a release
expected_release_message="The release type for the commit is"

echo "spotify/web-scripts: Running semantic-release in --dry-run to see if we should trigger a lerna release."
yarn web-scripts release --dry-run | grep "${expected_release_message}"

if [ $? -eq 0 ]
then
  echo "spotify/web-scripts: A release will be triggered."
  echo "spotify/web-scripts: Configuring git for Github Actions Lerna publish..."
  git config --global user.email "no-reply@spotify.com"
  git config --global user.name "GitHub Action"
  git remote set-url origin "https://${GH_USERNAME}:${GH_TOKEN}@github.com/spotify/web-scripts.git"
  git checkout master
  echo "spotify/web-scripts: Configuring npm for publishing..."
  echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" >> ~/.npmrc
  echo "spotify/web-scripts: Attempting publish..."
  npx lerna publish --yes --force-publish --conventional-commits --create-release=github --registry=https://registry.npmjs.org
  exit $?
else
  echo "spotify/web-scripts: No release will be triggered." >&2
  exit 0
fi

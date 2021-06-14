pushd ../gatsby-remark-image-attributes && \
  yarn build && \
  popd && \
  gatsby clean && gatsby build

BUILD_RESULT=$?

if [[ $BUILD_RESULT -eq 0 && "$1" == "-s" ]]; then
  http-server -p 8000 ./public
fi

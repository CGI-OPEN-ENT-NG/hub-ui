#!/bin/bash

if [ ! -e node_modules ]
then
  mkdir node_modules
fi

case `uname -s` in
  MINGW*)
    USER_UID=1000
    GROUP_UID=1000
    ;;
  *)
    if [ -z ${USER_UID:+x} ]
    then
      USER_UID=`id -u`
      GROUP_GID=`id -g`
    fi
esac

# install global
install () {
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" app pnpm install
}

# run local test ui
runLocalUi() {
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" app pnpm run start-app-local-ui
}

# run storybook
storybook() {
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" app pnpm run storybook
}

# build base library
buildUiLibrary() {
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" app pnpm run build-ui-library
}

# build base library watch mode
buildUiLibraryWatch() {
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" app pnpm run build-ui-library-watch
}

# global build
build() {
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" app pnpm run build
}

# publish
publish() {
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" app pnpm run publish
}

# clean projects
clean () {
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" app pnpm run clean && docker-compose down ; rm -rf .pnpm-store ; docker rmi hub-ui:1.0.0
}

test() {
  docker-compose run -u "$USER_UID:$GROUP_GID" app pnpm run test
}

lint() {
  docker-compose run -u "$USER_UID:$GROUP_GID" app pnpm run lint
}

formatLint() {
  docker-compose run -u "$USER_UID:$GROUP_GID" app pnpm run lint-fix
}

for param in "$@"
do
  case $param in
    clean)
      clean
      ;;
    install)
      install
      ;;
    runLocalUi)
      runLocalUi
      ;;
    storybook)
      storybook
      ;;
    buildUiLibrary)
      buildUiLibrary
      ;;
    buildUiLibraryWatch)
      buildUiLibraryWatch
      ;;
    runLocalUi)
      runLocalUi
      ;;
    build)
      build
      ;;
    publish)
      publish
      ;;
    test)
      test
      ;;
    lint)
      lint
      ;;
    formatLint)
      formatLint
      ;;
    *)
      echo "Invalid argument : $param"
  esac
  if [ ! $? -eq 0 ]; then
    exit 1
  fi
done

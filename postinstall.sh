web-scripts --help &> /dev/null;
if ! [ $? -eq 0 ]; then
  echo "Bootstrapping web-scripts..."
  yarn lerna run bootstrap
fi

web-scripts postinstall --threshold low
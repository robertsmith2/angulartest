# 3. Install NPM packages
if [ -e "$DEPLOYMENT_TARGET/package.json" ]; then  
  cd "$DEPLOYMENT_TARGET"
  eval $NPM_CMD install --production
  eval $NPM_CMD install --only=dev
  exitWithMessageOnError "npm failed"
  cd - > /dev/null
fi  
let path = require("path");

module.exports = {
    mode: 'development', // whether we're building for dev or prod
    entry: './code.js', // which file to begin with
    output: {
      path: path.resolve(__dirname, "."), // what folder to put bundle in
      filename: 'bundle.js' // what name to use for bundle
    }
  };
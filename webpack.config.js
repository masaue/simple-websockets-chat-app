// https://dev.to/elthrasher/managing-multiple-functions-with-aws-sam-and-webpack-1581
module.exports = {
  entry: {
    onconnect: `./src/handlers/onconnect.js`,
    ondisconnect: `./src/handlers/ondisconnect.js`,
    sendmessage: `./src/handlers/sendmessage.js`,
  },
  mode: 'development',
  output: {
    filename: '[name]/app.js',
    libraryTarget: 'commonjs2',
    path: `${__dirname}`,
  },
  target: 'node',
};

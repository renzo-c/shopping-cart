/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production')
    })
  ],
  devtool: 'source-map'
};

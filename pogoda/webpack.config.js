const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  // ваши настройки webpack
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ]
};

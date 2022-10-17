const alias = require('./importAliases');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias,
          extensions: ['.jsx', 'js']
        }
      ]
    ]
  };
};

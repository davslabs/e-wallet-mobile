module.exports = function (api) {
  api.cache(() => process.env.NODE_ENV === "production");
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        { moduleName: '@env', path: '.env', blacklist: null, whitelist: null, safe: false, allowUndefined: true },
      ],
    ],
  };
};

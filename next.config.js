const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules')(['dom7', 'swiper']);
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack')

module.exports = withPlugins([
  withTM,
  withImages,
  withFonts,
],
{
  webpack(config, options) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./src/polyfill.js')
      ) {
        entries['main.js'].unshift('./src/polyfill.js')
      }

      return entries
    }

    return config;
  },
});

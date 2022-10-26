const { createRunOncePlugin, withAndroidManifest } = require('@expo/config-plugins');

console.log("Plugin activated!")
const withAndroidManifestHavingBetterSecuritySettings = config => {
  return withAndroidManifest(config, config => {
    const androidManifest = config.modResults.manifest;
    const mainApplication = androidManifest.application[0];
    if(process.env.CHANNEL !== 'dev') {
    androidManifest.$ = {
      ...androidManifest.$,
      'xmlns:tools': 'http://schemas.android.com/tools',
    };
    mainApplication.$['tools:replace'] = 'android:usesCleartextTraffic';
    mainApplication.$['android:usesCleartextTraffic'] = 'false';
  }

    return config;
  });
};

module.exports = createRunOncePlugin(
  withAndroidManifestHavingBetterSecuritySettings,
  'withAndroidManifestHavingBetterSecuritySettings',
  '1.0.0'
);
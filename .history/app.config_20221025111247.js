const { processColor } = require("react-native");

module.exports = {
  name: 'Trena',
  version: '1.0.0',
  extra: {
    apiUrl: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY
  },
};
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// IP adresini elle ayarlayalım (bilgisayarınızın yerel IP adresi)
config.server = {
  port: 8081,
  enhanceMiddleware: (middleware) => {
    return (req, res, next) => {
      // CORS izinleri ekleyelim
      res.setHeader('Access-Control-Allow-Origin', '*');
      return middleware(req, res, next);
    };
  }
};

module.exports = config;

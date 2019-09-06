(function() {
  var global = global || window || self || Function('return this')();
  var ENV_CONFIG = {
    development: {
      ENTRY_POINT: 'https://tu-dev.finxos.com'
    },
    default: {
      ENTRY_POINT: 'https://cloud.finxos.com'
    },
    'uat.finxos.com': {
      ENTRY_POINT: 'https://uat.finxos.com'
    }
  };

  module.exports = function(inEnv) {
    var host = window.location.host;
    var env = process.env.NODE_ENV;
    var ENV_DEBUG = window.__EDITOR_FRONTEND_ENV__;
    var result;
    switch (true) {
      case typeof ENV_DEBUG === 'object':
        result = ENV_DEBUG;
        break;
      case typeof inEnv === 'string':
        result = ENV_CONFIG[inEnv];
        break;
      case env === 'development':
      case host === 'tu-dev.finxos.com':
        result = ENV_CONFIG.development;
        break;
      default:
        result = ENV_CONFIG[host];
        break;
    }
    return result || ENV_CONFIG.default;
  };
})();

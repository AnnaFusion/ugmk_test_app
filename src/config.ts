enum EnvTypeENUM {
  development = 'development',
  staging = 'staging',
  production = 'production',
}

export const envType = (process.env.REACT_APP_ENV_TYPE ||
  process.env.ENV_TYPE ||
  EnvTypeENUM.development) as EnvTypeENUM;

const config = {
  apiBaseUrl: 'http://localhost:3001',
};

switch (envType) {
  case EnvTypeENUM.staging:
    config.apiBaseUrl = 'http://localhost:3001';
    break;

  case EnvTypeENUM.production:
    config.apiBaseUrl = 'http://localhost:3001';
    break;

  // no default
}

if (process.env.REACT_APP_SERVER_BASE) {
  config.apiBaseUrl = process.env.REACT_APP_SERVER_BASE;
}

export default config;

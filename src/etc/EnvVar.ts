interface Env {
  API_KEY: string;
  AUTH_DOMAIN: string;
  PROJECT_ID: string;
  STORAGE_BUCKET: string;
  MESSAGINGSENDER_ID: string;
  APP_ID: string;
  MEASUREMENT_ID: string;
}

const EnvVar: Env = {
  API_KEY: process.env.REACT_APP_API_KEY || '',
  AUTH_DOMAIN: process.env.REACT_APP_AUTH_DOMAIN || '',
  PROJECT_ID: process.env.REACT_APP_PROJECT_ID || '',
  STORAGE_BUCKET: process.env.REACT_APP_STORAGE_BUCKET || '',
  MESSAGINGSENDER_ID: process.env.REACT_APP_MESSAGINGSENDER_ID || '',
  APP_ID: process.env.REACT_APP_APP_ID || '',
  MEASUREMENT_ID: process.env.REACT_APP_MEASUREMENT_ID || '',
};

export default EnvVar;

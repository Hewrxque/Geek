//CONSTANTS
//const deploy = 'development';
const deploy = process.env.REACT_APP_NODE_ENV;

export const API_BASE_URL =
    deploy === 'production' ? process.env.REACT_APP_URL_PRODUCTION : 'http://localhost:3333/api/v1';

export const API_URL = process.env.REACT_APP_SUBDIRECTORY_URL;

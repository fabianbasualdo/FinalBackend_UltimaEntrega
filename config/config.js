const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(process.cwd(), `${process.env.NODE_ENV.trim()}.env`)
});

const { DB_USER, DB_PASS, DB_CLUSTER } = process.env;

const DB_URI = `${DB_USER}:${DB_PASS}@${DB_CLUSTER}`

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 8080,
  MODE: process.env.MODE || 'FORK',
  DATA_SOURCE: process.env.DATA_SOURCE || 'MEM',
  COOKIE_SECRET: process.env.COOKIE_SECRET || 'ProyectoFinal',
  DATABASE: process.env.DATABASE || 'ProyectoFinal',
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  DB_URL: process.env.DB_URL,
  //DB_URL: 'mongodb+srv://coder_c20:CONTRASEÑA@cluster0.qm7sph7.mongodb.net/DesafioCapas?retryWrites=true&w=majority',


  
  mongodb: {
    connectTo: (database) =>
    process.env.DB_URL
  },
}

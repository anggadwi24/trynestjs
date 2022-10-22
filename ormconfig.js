require('dotenv').config();
module.exports = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    entities: [],
    synchronize: true,
    dropSchema:false,
    logging:true,
    entities:['src/**/*.entity.ts','dist/**/*.entity.js'],
  }
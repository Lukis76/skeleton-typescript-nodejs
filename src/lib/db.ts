import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('root', 'root', 'root', {
  host: '0.0.0.0',
  port: 5432,
  dialect: 'postgres',
  database: 'root'
})
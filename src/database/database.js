import Sequelize from 'sequelize';

// Datos de la base de datos

// logging: false   -> No muestre msg en la console
// Name de DB, User, Password, Config de host
export const db = new Sequelize(
  'postgres',
  'postgres',
  'Postgress',
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 1000
    },
    logging: false
  }
)
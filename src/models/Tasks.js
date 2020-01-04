import Sequelize from 'sequelize';
import { db } from '../database/database';

// Vamos a construir el modelo ORM de la tabla

const Task = db.define('tasks', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
  },
  done: {
    type: Sequelize.BOOLEAN
  },
  projectid: {
    type: Sequelize.INTEGER
  },

}, {
  timestamps: false
});

export default Task;
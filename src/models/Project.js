import Sequelize from 'sequelize';
import { db } from '../database/database';

// Importar las Tareas para relacionarlas

import Tasks from './Tasks';

// Vamos a construir el modelo ORM de la tabla
/*  Parametros de la funcion define
define(
  1: Nombre la tablas,
  2: JSON con las propiedades del projecto
  3: Configuraciones del Modelo: {
    timestamps: false   -> Para que no tenga problema con las fechas
  }
) */
const Project = db.define('projects', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
  },
  priority: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.INTEGER
  },
  deliverydate: {
    type: Sequelize.DATE
  }

}, {
  timestamps: false
});


// Un  projecto tiene muchas tareas
/*
hasMany(
  1. Nombre de la tabla 
  {
    2. Lavel Foranea de la tabla 
    3. Llave primaria a la que se va a relacionar
  }
  )
*/

Project.hasMany(Tasks, { foreingKey: 'projectID', sourceKey: 'id' });

// Una tarea pertenece a ......
Tasks.belongsTo(Project, { foreingKey: 'projectID', sourceKey: 'id' });


export default Project;
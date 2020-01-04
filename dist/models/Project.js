"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Tasks = _interopRequireDefault(require("./Tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Importar las Tareas para relacionarlas
// Vamos a construir el modelo ORM de la tabla

/*  Parametros de la funcion define
define(
  1: Nombre la tablas,
  2: JSON con las propiedades del projecto
  3: Configuraciones del Modelo: {
    timestamps: false   -> Para que no tenga problema con las fechas
  }
) */
var Project = _database.db.define('projects', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  priority: {
    type: _sequelize["default"].INTEGER
  },
  description: {
    type: _sequelize["default"].INTEGER
  },
  deliverydate: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
}); // Un  projecto tiene muchas tareas

/*
hasMany(
  1. Nombre de la tabla 
  {
    2. Lavel Foranea de la tabla 
    3. Llave primaria a la que se va a relacionar
  }
  )
*/


Project.hasMany(_Tasks["default"], {
  foreingKey: 'projectid',
  sourceKey: 'id'
}); // Una tarea pertenece a ......

_Tasks["default"].belongsTo(Project, {
  foreingKey: 'projectid',
  sourceKey: 'id'
});

var _default = Project;
exports["default"] = _default;
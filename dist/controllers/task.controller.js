"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTask = createTask;
exports.getTasks = getTasks;
exports.deleteTask = deleteTask;
exports.updateTask = updateTask;
exports.getOneTask = getOneTask;
exports.getTaskByProject = getTaskByProject;

var _Tasks = _interopRequireDefault(require("../models/Tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createTask(_x, _x2) {
  return _createTask.apply(this, arguments);
}

function _createTask() {
  _createTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, done, projectid, tasksave;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, done = _req$body.done, projectid = _req$body.projectid;
            _context.next = 3;
            return _Tasks["default"].create({
              name: name,
              done: done,
              projectid: projectid
            }, {
              fields: ['name', 'done', 'projectid']
            });

          case 3:
            tasksave = _context.sent;
            res.json({
              messague: "Tarea Creada Satisfactoriamente",
              task: tasksave
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createTask.apply(this, arguments);
}

function getTasks(_x3, _x4) {
  return _getTasks.apply(this, arguments);
}

function _getTasks() {
  _getTasks = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var tasks;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Tasks["default"].findAll({
              attributes: ['id', 'projectid', 'name', 'done'],
              order: [['id', 'DESC']]
            });

          case 2:
            tasks = _context2.sent;
            res.json({
              messgue: "Tareas",
              tasks: tasks
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getTasks.apply(this, arguments);
}

function deleteTask(_x5, _x6) {
  return _deleteTask.apply(this, arguments);
}

function _deleteTask() {
  _deleteTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, taskdel;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Tasks["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            taskdel = _context3.sent;
            res.json({
              messague: "Tarea Boorrada",
              col: "Columnas borradas: " + taskdel
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deleteTask.apply(this, arguments);
}

function updateTask(_x7, _x8) {
  return _updateTask.apply(this, arguments);
}

function _updateTask() {
  _updateTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, projectid, name, done, task, uptask;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, projectid = _req$body2.projectid, name = _req$body2.name, done = _req$body2.done;
            _context4.next = 4;
            return _Tasks["default"].findOne({
              attributes: ['id', 'projectid', 'name', 'done'],
              where: {
                id: id
              }
            });

          case 4:
            task = _context4.sent;
            _context4.next = 7;
            return _Tasks["default"].update({
              name: name,
              done: done,
              projectid: projectid
            }, {
              where: {
                id: id
              }
            });

          case 7:
            uptask = _context4.sent;
            res.json({
              messague: 'Task Updated',
              uptask: uptask
            });

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateTask.apply(this, arguments);
}

function getOneTask(_x9, _x10) {
  return _getOneTask.apply(this, arguments);
}

function _getOneTask() {
  _getOneTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, task;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _Tasks["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'name', 'projectid', 'done']
            });

          case 3:
            task = _context5.sent;
            res.json({
              task: task
            });

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getOneTask.apply(this, arguments);
}

function getTaskByProject(_x11, _x12) {
  return _getTaskByProject.apply(this, arguments);
}

function _getTaskByProject() {
  _getTaskByProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id, tareas;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return _Tasks["default"].findAll({
              where: {
                projectid: id
              },
              attributes: ['id', 'name', 'projectid', 'done']
            });

          case 3:
            tareas = _context6.sent;
            res.json(tareas);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getTaskByProject.apply(this, arguments);
}
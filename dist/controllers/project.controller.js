"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProject = updateProject;
exports.deletProject = deletProject;
exports.getProject = getProject;
exports.getProjects = getProjects;
exports.createProject = createProject;

var _Project = _interopRequireDefault(require("../models/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function updateProject(_x, _x2) {
  return _updateProject.apply(this, arguments);
}

function _updateProject() {
  _updateProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, _req$body, name, priority, description, deliverydate, projects;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _req$body = req.body, name = _req$body.name, priority = _req$body.priority, description = _req$body.description, deliverydate = _req$body.deliverydate; // Primero se verifica que exista ese datos TODO??
            // let ProjectUp = await Project.update({
            //   name,
            //   priority,
            //   description,
            //   deliverydate
            // }, {
            //   where: {
            //     id
            //   }
            // });
            // Primero buscar si existe
            // Buscar el projecto

            _context2.next = 4;
            return _Project["default"].findAll({
              attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
              where: {
                id: id
              }
            });

          case 4:
            projects = _context2.sent;

            if (!(projects.length > 0)) {
              _context2.next = 11;
              break;
            }

            console.log("entra"); // Actializa cada projecto que haya coincidido con la busqueda above

            projects.forEach(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(project) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return project.update({
                          name: name,
                          priority: priority,
                          description: description,
                          deliverydate: deliverydate
                        });

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x11) {
                return _ref.apply(this, arguments);
              };
            }());
            return _context2.abrupt("return", res.json({
              messague: 'Project Updates successfully ',
              data: projects
            }));

          case 11:
            return _context2.abrupt("return", res.json({
              messague: 'El dato a actualizar no se encantra '
            }));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _updateProject.apply(this, arguments);
}

function deletProject(_x3, _x4) {
  return _deletProject.apply(this, arguments);
}

function _deletProject() {
  _deletProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, ProjectDlt;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id; // console.log(req.params.id);

            _context3.next = 3;
            return _Project["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            ProjectDlt = _context3.sent;
            res.json({
              messague: 'Project delete ',
              data: ProjectDlt
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deletProject.apply(this, arguments);
}

function getProject(_x5, _x6) {
  return _getProject.apply(this, arguments);
}

function _getProject() {
  _getProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, ProjectOne;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id; // console.log(req.params.id);

            _context4.next = 3;
            return _Project["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            ProjectOne = _context4.sent;
            // let tareasPro = await Task.findAll({
            //   where: {
            //     projectid: id
            //   }
            // })
            res.json({
              messague: 'Project',
              data: ProjectOne
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getProject.apply(this, arguments);
}

function getProjects(_x7, _x8) {
  return _getProjects.apply(this, arguments);
}

function _getProjects() {
  _getProjects = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var Projects;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Project["default"].findAll();

          case 2:
            Projects = _context5.sent;
            return _context5.abrupt("return", res.json({
              messague: 'Projects',
              data: Projects
            }));

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getProjects.apply(this, arguments);
}

function createProject(_x9, _x10) {
  return _createProject.apply(this, arguments);
}

function _createProject() {
  _createProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body2, name, priority, description, deliverydate, newProject;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log(req.body);
            _req$body2 = req.body, name = _req$body2.name, priority = _req$body2.priority, description = _req$body2.description, deliverydate = _req$body2.deliverydate;
            _context6.prev = 2;
            _context6.next = 5;
            return _Project["default"].create({
              name: name,
              priority: priority,
              description: description,
              deliverydate: deliverydate
            }, {
              fields: ['name', 'priority', 'description', 'deliverydate']
            });

          case 5:
            newProject = _context6.sent;

            if (!newProject) {
              _context6.next = 8;
              break;
            }

            return _context6.abrupt("return", res.json({
              messague: 'Project Created Successfully',
              data: newProject
            }));

          case 8:
            _context6.next = 14;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            res.status(206).json({
              messague: 'Error con la base de datos'
            });

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 10]]);
  }));
  return _createProject.apply(this, arguments);
}
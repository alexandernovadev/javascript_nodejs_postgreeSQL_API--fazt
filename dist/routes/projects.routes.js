"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _project = require("../controllers/project.controller");

var router = (0, _express.Router)(); // Hago un enrutador
// /api/projects/
// La ruta va asi

router.post('/', _project.createProject);
router.get('/', _project.getProjects); // Get One Project

router.get('/:id', _project.getProject); // Delete

router["delete"]('/:id', _project.deletProject); //Update

router.put('/:id', _project.updateProject);
var _default = router;
exports["default"] = _default;
import { Router } from 'express';
import { createProject, getProjects, getProject, deletProject, updateProject } from '../controllers/project.controller';

const router = Router();
// Hago un enrutador

// /api/projects/
// La ruta va asi
router.post('/', createProject)
router.get('/', getProjects)

// Get One Project
router.get('/:id', getProject)
// Delete
router.delete('/:id', deletProject)
//Update
router.put('/:id', updateProject)

export default router;
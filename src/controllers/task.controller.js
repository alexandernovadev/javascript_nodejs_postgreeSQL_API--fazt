import Task from "../models/Tasks";

export async function createTask(req, res) {

  const { name, done, projectid } = req.body;

  const tasksave = await Task.create({
    name,
    done,
    projectid
  },
    {
      fields: ['name', 'done', 'projectid']
    })

  res.json({
    messague: "Tarea Creada Satisfactoriamente",
    task: tasksave
  })
}


export async function getTasks(req, res) {

  const tasks = await Task.findAll({
    attributes: ['id', 'projectid', 'name', 'done'],
    order: [
      ['id', 'DESC']
    ]
  });

  res.json({
    messgue: "Tareas",
    tasks
  })
}

export async function deleteTask(req, res) {
  const { id } = req.params;

  const taskdel = await Task.destroy({
    where: {
      id
    }
  })

  res.json({
    messague: "Tarea Boorrada",
    col: "Columnas borradas: " + taskdel
  })
}

export async function updateTask(req, res) {

  const { id } = req.params;
  const { projectid, name, done } = req.body;

  const task = await Task.findOne({
    attributes: ['id', 'projectid', 'name', 'done'],
    where: { id }
  });

  const uptask = await Task.update({
    name,
    done,
    projectid
  },
    {
      where: {
        id
      }
    })

  res.json({
    messague: 'Task Updated',
    uptask
  })
}

export async function getOneTask(req, res) {
  const { id } = req.params;

  const task = await Task.findOne({
    where: { id },
    attributes: ['id', 'name', 'projectid', 'done']
  });

  res.json({
    task
  })

}

export async function getTaskByProject(req, res) {

  const { id } = req.params;

  const tareas = await Task.findAll({
    where: { projectid: id },
    attributes: ['id', 'name', 'projectid', 'done']
  })

  res.json(tareas)
}
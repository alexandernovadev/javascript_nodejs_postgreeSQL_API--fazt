import Project from '../models/Project';


export async function updateProject(req, res) {

  const { id } = req.params;
  const { name, priority, description, deliverydate } = req.body;

  // Primero se verifica que exista ese datos TODO??
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

  const projects = await Project.findAll({
    attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
    where: {
      id
    }
  });


  if (projects.length > 0) {
    console.log("entra");

    // Actializa cada projecto que haya coincidido con la busqueda above
    projects.forEach(async project => {
      await project.update({
        name,
        priority,
        description,
        deliverydate
      });
    })

    return res.json({
      messague: 'Project Updates successfully ',
      data: projects
    });
  }
  else {
    return res.json({
      messague: 'El dato a actualizar no se encantra ',

    });
  }




}

export async function deletProject(req, res) {

  const { id } = req.params;
  // console.log(req.params.id);

  let ProjectDlt = await Project.destroy({
    where: {
      id
    }
  });

  res.json({
    messague: 'Project delete ',
    data: ProjectDlt

  });

}

export async function getProject(req, res) {

  const { id } = req.params;
  // console.log(req.params.id);

  let ProjectOne = await Project.findOne({
    where: {
      id
    }
  });

  // let tareasPro = await Task.findAll({
  //   where: {
  //     projectid: id
  //   }
  // })

  res.json({
    messague: 'Project',
    data: ProjectOne,

  });
}

export async function getProjects(req, res) {
  let Projects = await Project.findAll();

  return res.json({
    messague: 'Projects',
    data: Projects

  });
}

export async function createProject(req, res) {
  console.log(req.body);

  const { name, priority, description, deliverydate } = req.body;

  try {

    // Crear un nuevo projecto con sequelize
    /*
 
    1. Datos
    2. Campos que le voy a enviar dentro de un array, que coincidad con la DB
    */
    let newProject = await Project.create({
      name,
      priority,
      description,
      deliverydate
    }, {
      fields: ['name', 'priority', 'description', 'deliverydate']
    });

    if (newProject) {
      return res.json({
        messague: 'Project Created Successfully',
        data: newProject

      })
    }
  } catch (error) {

    console.log(error);

    res.status(206).json({
      messague: 'Error con la base de datos',
    })
  }


}
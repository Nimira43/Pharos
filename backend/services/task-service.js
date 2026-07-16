import taskRepository from '../repository/tasks-repository.js'

export const createTask = async (req, res) => { 
  if (req.body.status === '') {
    req.body.status = 'TO DO'
  }

  const currentUser = req.user

  if (!currentUser) { 
    return res.status(401).json('Unauthorised - Task Service Layer.')
  }

  try {
    const newSavedTask = await taskRepository.createTask({
      ...req.body,
      userId: currentUser._id,
    })

    return res.status(201).json(newSavedTask)
  } catch (error) {
    console.log(error)
    return res.status(500).json('Something went wrong.')
  }
}



export const getAllTasks = async (req, res) => { }
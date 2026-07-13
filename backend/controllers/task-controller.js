import * as TaskService from '..services/task-services.js'             

export const getAllTasks = async (req, res) => { 
  return TaskServices.getAllTasks(req, res)
}

export const createTask = async (req, res) => {}
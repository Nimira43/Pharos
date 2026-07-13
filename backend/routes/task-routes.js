import express from 'express'
import * as TaskController from '../controllers/task-controller.js'
import authCheck from '../middleware/auth-middleware.js'

const router = express.Router()

router.get('/', authCheck, TaskController.getAllTasks)
router.post('/', authCheck, TaskController.createTask)

export default router
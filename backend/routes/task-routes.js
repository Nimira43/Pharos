import express from 'express'
import * as TaskController from '../controllers/task-controller.js'
import authCheck from '../middleware/auth-middleware.js'

const router = express.Router()

router.get('/', authCheck, TaskController.getAllTasks)

export default router
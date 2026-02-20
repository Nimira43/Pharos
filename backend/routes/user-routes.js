import express from 'express'
import * as UserController from '../controllers/user-controller.js'

const router = express.Router()

router.post('/auth/create', UserController.createUser)

export default router
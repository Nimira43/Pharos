import express from 'express'
import * as UserController from '../controllers/user-controller.js'
import * as UserValidation from '../validations/create-user-validation.js' 

const router = express.Router()

router.post(
  '/auth/create',
  UserValidation.createUser, 
  UserController.createUser
)

router.post(
  '/auth/login',
  UserValidation.login, 
  UserController.login
)

export default router
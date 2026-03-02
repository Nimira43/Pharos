import * as UserService from '../services/user-service.js'

export const createUser = async (req, res) => {
  return UserService.createUser(req, res)  
}
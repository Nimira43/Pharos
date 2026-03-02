import UserRepository from '../repository/user-repository.js'
import bcrypt from 'bcrypt'

export const createUser = async (req, res) => {
  let { name, email, password, confirmPassword } = req.body
  
  const salt = await bcrypt.genSalt(10)
  password = await bcrypt.hash(password, salt)

  try {
    const newUser = (await UserRepository.createUser({
      ...req.body,
      password
    })).toObject()

    delete newUser.password
  
    return res.status(201).json(newUser)
  } catch (error) {
    console.log('UserRepository - unable to save new user to database.', error)
    
    return res.status(400).json(error)
  }
}
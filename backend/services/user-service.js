import UserRepository from '../repository/user-repository.js'
import bcrypt from 'bcrypt'
import JwtHelper from '../utils/jwt-helpers.js'

export const createUser = async (req, res) => {
  let { name, email, password, confirmPassword } = req.body
  
  const salt = await bcrypt.genSalt(10)
  password = await bcrypt.hash(password, salt)

  if (await UserRepository.getSingleUser({email})) {
    return res.status(400).json('An account with this email already exists.')
  }

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

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await UserRepository.getSingleUser({ email })

    if (!user) {
      return res.status(401).json('Invalid credentials.')
    }

    const checkPassword = bcrypt.compareSync(password, user.password)

    if (!checkPassword) {
      return res.status(401).json('Invalid credentials.')
    }

    const jwtToken = await JwtHelper.generateToken({
      _id: user._id,
      email: user.email,
    })

    return res.status(200).json({ token_generated: jwtToken })

  } catch (error) {
    console.log(error)
  }
}
import User from '../models/user-model'

class UserRepository {
  async createUser(data) {
    const user = new User({
      name: data.name,
      email: data.email,
      password: data.password
    })

    return await user.save()
    
  }
}

export default new UserRepository()
import User from '../models/user-model.js'

class UserRepository {
  async createUser(data) {
    const user = new User({
      name: data.name,
      email: data.email,
      password: data.password
    })

    return await user.save()
  }

  async getSingleUser(query) {
    return await User.findOne(query).lean(true)
  }
}

export default new UserRepository()
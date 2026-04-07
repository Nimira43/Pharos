import jwt from 'jsonwebtoken'

class JwtHelper {
  static async generateToken(data) {
    return new Promise((resolve, _reject) => {
      const signOptions = {
        issuer: 'pharos',
        subject: 'pharos. [Author: nimiratech]',
        algorithm: 'HS256',
        audience: ['Europe'],
      }

      signOptions.expiresIn = '2h'

      jwt.sign(data, process.env.JWT_SECRET, signOptions, (err, token) => {
        if (err) {
          logger.error(err.message)
        }

        resolve(token)
      }) 
    })
  }
}

export default JwtHelper
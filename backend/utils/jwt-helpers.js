import jwt from 'jsonwebtoken'
import config from '../configuration/env.config.js'

class JwtHelper {
  static async generateToken(data) {
    const appConfig = config
    
    return new Promise((resolve, _reject) => {
      const signOptions = {
        issuer: 'pharos',
        subject: 'pharos. [Author: nimiratech]',
        algorithm: 'HS256',
        audience: ['Europe'],
      }

      signOptions.expiresIn = '2h'

      jwt.sign(data, `${appConfig.server_token_secret}`, signOptions, (err, token) => {
        if (err) {
          logger.error(err.message)
        }

        resolve(token)
      }) 
    })
  }
}

export default JwtHelper
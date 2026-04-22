import jwt from 'jsonwebtoken'
import config from '../configuration/env.config.js'

const authCheck = (req, res, next) => {
  const token = req.cookies['access-token']

  if (!token) {
    return res.status(401).json('Unauthorised - caught at middleware.')
  }

  jwt.verify(
    token,
    config.server_token_secret,
    (error, decoded) => {
      if (error) {
        console.log('JWT error:', error)
        return res.status(401).json('Unauthorised - caught at middleware.')
      }

      req.user = decoded
      next()
    }
  )
}

export default authCheck


// Old code

// import jwt from 'jsonwebtoken'
// import config from '../configuration/env.config.js'

// const authCheck = async (req, res, next) => {
//   const appConfig = config
//   const token = req.cookies('access-token')

//   if (!token) {
//     return res.status(401).json('Unauthorised - caught at middleware.')
//   }

//   jwt.verify(
//     token,
//     `${appConfig.server_token_secret}`,
//     async (error, decode) => {
//       try {
//         if (error) {
//           console.log('Log error:', error)
          
//           return res.status(401).json('Unauthorised - caught at middleware.')
//         } else {
//           const data = decoded
//           req('user') = data

//           return next()
//         }
//       } catch (error) {
//         console.log(error)

//         return res.status(500).json('Something went wrong.')
//       }
//     }
//   )
// }

// export default authCheck
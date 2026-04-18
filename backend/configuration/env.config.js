import dotenv from 'dotenv'

dotenv.config()

const config = {
  server_token_secret: process.env.JWT_SECRET,
}

export default config
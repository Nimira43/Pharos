import dotenv from 'dotenv'

dotenv.config()

const config = {
  port: process.env.PORT,
  mongodb_url: process.env.MONGO_URI,
  server_token_issuer: process.env.SERVER_TOKEN_ISSUER,
  server_token_secret: process.env.JWT_SECRET,
  token_expiry_time: process.env.TOKEN_EXPIRY_TIME,
  app_name: process.env.APP_NAME
}

export default config
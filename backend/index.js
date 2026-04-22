import express from 'express'
import connectDB from './configuration/database.js'
import userRoutes from './routes/user-routes.js'
import cors from 'cors'
import taskRoutes from './routes/task-routes.js'
import cookieParser from 'cookie-parser'

connectDB()

const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())

app.listen(port, () => {
  console.log(`Welcome to Pharos. Server listening on Port ${port}.`)
})

app.get('/test-route', (req, res) => {
  res.send('Welcome to Pharos Kanban System.')
})

app.use('/api/v1/tasks', taskRoutes)
app.use('/api/v1/users', userRoutes)


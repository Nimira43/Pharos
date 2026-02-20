import express from 'express'
import connectDB from './configuration/database.js'
import userRoutes from './routes/user-routes.js'

connectDB()

const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
  console.log(`Welcome to Pharos. Server listening on Port ${port}.`)
})

app.get('/test-route', (req, res) => {
  res.send('Welcome to Pharos Kanban System.')
})

app.use('/api/v1/users', userRoutes)


import express from 'express'
import connectDB from './configuration/database.js'

const app = express()
const port = 8000

// Connect to MongoDB
connectDB()

app.get('/test-route', (req, res) => {
  res.send('Welcome to Pharos Kanban System.')
})

app.listen(port, () => {
  console.log(`Welcome to Pharos. Server listening on Port ${port}.`)
})


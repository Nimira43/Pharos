import express from 'express'

const app = express()

const port = 8000

app.listen(port, () => {
  console.log(`Welcome to Pharos. Server listening on Port ${port}.`)
})

app.get('/test-route', (req, res) => {
  res.send('Welcome to Pharos Kanban System.')
})
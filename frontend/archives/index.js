import './styles/stylekanban.css'
import routes from './routes.js'

export const router = async () => {
  const app = document.getElementById('app')
  const path = location.pathname || '/'
  const route = routes[path]

  console.log(app)
  console.log(path)
  console.log(route)
}

router()
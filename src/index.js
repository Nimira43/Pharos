import './styles/stylekanban.css'
import routes from './routes.js'

export const router = async () => {
  const app = document.getElementById('app')
  const path = location.pathname || '/'
  const route = routes[path]
}

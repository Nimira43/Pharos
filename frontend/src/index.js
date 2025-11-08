import './styles/stylekanban.css'
import routes from './routes'

export const router = async () => {
  const app = document.getElementById('app')
  const path = location.pathname || '/'
  const route = routes[path]

  try {
    const res = await fetch(route.path)
    const html = await res.text()
    app.innerHTML = html
  } catch (error) {
    console.log(error)
    app.innerHTML = '<h1>404 Page Not Found</h1>'    
  }
}

router()
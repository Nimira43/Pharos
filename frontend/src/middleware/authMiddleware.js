import store from '../store/store.js'
import { navigateTo } from '../utils/helpers.js'
import Swal from 'sweetalert2'

export const authMiddleware = (route, next) => {
  const authState = store.auth.getState()
  
  if (!authState?.isAuthenticated && route.auth) {
    Swal.fire({
      icon: 'warning',
      title: 'Wait!',
      text: 'To access Pharos, please log in first.',
    })
    navigateTo('/login')
    return false
  }
  next()
}
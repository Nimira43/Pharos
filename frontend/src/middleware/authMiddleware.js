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
      customClass: { confirmButton: 'main-btn' }
    })
    navigateTo('/login')
    return false
  }
  
  if (authState?.isAuthenticated && !route.auth) {
    Swal.fire({
      icon: 'info',
      title: 'You are logged in.',
      text: 'To access the Register or Login form, please log out first.',
      customClass: { confirmButton: 'main-btn' }
    })
    navigateTo('/dashboard')
    return false
  }
  
  next()
}
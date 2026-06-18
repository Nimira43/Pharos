import { router } from '../../src/index.js'

export const eventEmitter = {
  events: {},
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(listener)
  },
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(data))
    }
  }
}

export const navigateTo = (url) => {
  history.pushState(null, null, url)
  router()
}

export const controlNavigation = () => {
  window.addEventListener('popstate', router)
  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault()
        navigateTo(e.target.href)
      }
    })
    router()
  })
}

function updateNavbar() {
  console.log('Login class event emitted.')
}

eventEmitter.on('authStateChange', updateNavbar)

updateNavbar()
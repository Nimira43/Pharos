import { router } from '../../src/index.js'

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
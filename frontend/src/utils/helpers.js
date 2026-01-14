import { router } from '../../src/index.js'

export const navigateTo = (url) => {
  history.pushState(null, null, url)
  router()
}
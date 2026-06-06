import { authMiddleware } from './authMiddleware'

const middlewares = [authMiddleware]

export const runMiddleware = (route, next) => {
  let index = 0

  const runNextMiddleware = () => {
    const middleware = middlewares[index]
    index++

    if (middleware) {
      middleware(route, runNextMiddleware)
    } else {
      next()
    }
  }
  runNextMiddleware()
}
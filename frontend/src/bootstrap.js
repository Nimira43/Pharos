const bootstrap = async (path) => {
  try {
    let module

    switch (path) {
      case '/register':
        module = await import('./pages/auth/register.js')
        break
      case '/login':
        module = await import('./pages/auth/login.js')
        break
      default:
        break
    }

  } catch (error) {
    console.log(error, 'Error loading module.')
  }
}

export default bootstrap
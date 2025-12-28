const bootstrap = async (path) => {
  try {
    let module

    switch (path) {
      case '/register':
        module = await import('./pages/auth/register.js')
        break
      // case '/login':
      //   module = await import('./pages/auth/login.js')
      //   break
      default:
        console.log(`No module found for ${path}`)
        break
    }

    if (module) {
      console.log('module', module)
    }

  } catch (error) {
    console.log(error, 'Error loading module.')
  }
}

export default bootstrap
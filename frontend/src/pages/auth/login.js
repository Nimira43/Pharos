import Swal from 'sweetalert2'

class Login {
  constructor() {
    this.loginForm = document.getElementById('login-form')
    this.render()
  }

  addSubmitEventListener() {
    this.loginForm.addEventListener(
      'submit',
      this.onSubmitLoginForm.bind(this)
    )
  }

  async onSubmitLoginForm(e) {
    e.preventDefault()

    console.log('onSubmitLoginForm called when form submitted.')
  }

  render() {
    this.addSubmitEventListener()
  }
}

export default Login
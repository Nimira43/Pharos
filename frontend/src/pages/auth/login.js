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

    const form = e.target

    const payload = {
      email: form.querySelector("[name = 'email']").value,
      password: form.querySelector("[name = 'password']")
    }

    if (!payload.email || !payload.password) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All fields are required.',
        customClass: { confirmButton: 'main-btn' }
      })
      return
    }

    try {
      console.log('Payload for Backend:', payload)
      
      Swal.fire({
        title: 'Login successful',
        text: 'You are now authenticated.',
        icon: 'success',
        customClass: { confirmButton: 'main-btn' }
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Server Error. Please try again.',
        customClass: { confirmButton: 'main-btn' }
      })
    }
  }

  render() {
    this.addSubmitEventListener()
  }
}

export default Login
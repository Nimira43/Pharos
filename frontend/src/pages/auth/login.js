import Swal from 'sweetalert2'
import AuthenticationApi from '../../services/AuthenticationApi.js'

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
      password: form.querySelector("[name = 'password']").value,
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
      const res = await AuthenticationApi.login(payload)
      
      Swal.fire({
        title: 'Login successful',
        text: 'You are now authenticated.',
        icon: 'success',
        customClass: { confirmButton: 'main-btn' }
      })

      console.log(res.data.data)

      this.clearFieldsAfterSubmit([
        form.querySelector("[name = 'email']"),
        form.querySelector("[name = 'password']")
      ])

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Server Error. Please try again.',
        customClass: { confirmButton: 'main-btn' }
      })
    }
  }

  clearFieldsAfterSubmit(element) {
    element.forEach((item) => (item.value = ''))
  }

  render() {
    this.addSubmitEventListener()
  }
}

export default Login
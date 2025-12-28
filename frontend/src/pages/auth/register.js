import Swal from 'sweetalert2'

class Register {
  constructor() {
    this.registrationForm = document.getElementById('registration-form')
    this.render()
  }

  addSubmitEventListener() {
    this.registrationForm.addEventListener('submit', this.onSubmitRegisterForm.bind(this))
  }

  async onSubmitRegisterForm(e) {
    e.preventDefault()
    const form = e.target

    const payload = {
      name: form.querySelector("[name='name']").value,
      email: form.querySelector("[name='email']").value,
      password: form.querySelector("[name='password']").value,
      confirmPassword: form.querySelector("[name='confirmPassword']").value
    }

    if (
      !payload.name ||
      !payload.email ||
      !payload.password ||
      !payload.confirmPassword
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oh no...',
        text: 'All fields are required.'
      })
      return
    }
  }

  render() {
    this.addSubmitEventListener()
  }
}

export default Register
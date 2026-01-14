import Swal from 'sweetalert2'
import { navigateTo } from '../../utils/helpers'

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
        title: 'Error...',
        text: 'All fields are required.',
        confirmButtonText: 'OK',
        customClass: { confirmButton: 'main-btn' }
      })
      return
    }

    if (payload.password !== payload.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'The passwords do not match.',
        confirmButtonText: 'OK',
        customClass: { confirmButton: 'main-btn' }
      })
      return
    }

    try {
      console.log('Validation passed. Payload ready', payload)

      this.clearFieldsAfterSubmit([
        form.querySelector("[name='name']"),
        form.querySelector("[name='email']"),
        form.querySelector("[name='password']"),
        form.querySelector("[name='confirmPassword']")    
      ])

      Swal.fire({
        icon: 'success',
        title: 'Successful Registration',
        text: 'You are now able to login.',
        confirmButtonText: 'OK',
        customClass: { confirmButton: 'main-btn' }
      })

      navigateTo('/login')
    } catch (error) {
      
    }
  }

  clearFieldsAfterSubmit(element) {
    element.forEach((item) => (item.value = ''))
  }

  render() {
    this.addSubmitEventListener()
  }
}

export default Register
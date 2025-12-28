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
    console.log('Receiving submit event from the Registration Form.')
  }

  render() {
    this.addSubmitEventListener()
  }
}

export default Register
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
    console.log(e.target)
  }

  render() {
    this.addSubmitEventListener()
  }
}

export default Register
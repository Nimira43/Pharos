class Dashboard {
  constructor() {
    this.createForm = document.querySelector('#newTaskForm')
    this.render()
  }

  addCreateFormSubmitEventListener() {
    this.createForm.addEventListener(
      'submit',
      this.onSubmitCreateForm.bind(this)
    ) 
  }

  async onSubmitCreateForm(event) {
    console.log('onSubmitCreateForm called on the create task modal submit event.')
    event.preventDefault()
    event.stopImmediatePropagation()
  }

  render() {
    this.addCreateFormSubmitEventListener()
  }
}

export default Dashboard
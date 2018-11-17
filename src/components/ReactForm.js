import React from 'react'
import FormOne from './FormOne'
import FormTwo from './FormTwo'
import FormConfirm from './FormConfirm'
import FormWin from './FormWin'

class ReactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 1,
      firstname: '',
      lastname: '',
      mail: '',
      age: '',
      height: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type === "number" ? parseInt(e.target.value) || '' : e.target.value
    })
  } 

  handleNext = () => {
    this.setState(prevState => ({
      step: prevState.step + 1
    }))
  }

  handlePrev = () => {
    this.setState(prevState => ({
      step: prevState.step - 1
    }))
  }

  handleReset = () => {
    this.setState({
      step: 1,
      firstname: '',
      lastname: '',
      mail: '',
      age: 0,
      height: 0,
    })
  }

  checkValidity = () => {
    const { firstname, lastname, mail, age, height } = this.state
    if (
      typeof firstname === "string" && firstname !== "" && isNaN(parseInt(firstname)) === true
      && typeof lastname === "string" && lastname !== "" && isNaN(parseInt(lastname)) === true
      && typeof mail === "string" && mail !== "" && isNaN(parseInt(mail)) === true
      && typeof age === "number" && age !== "" && age !== 0
      && typeof height === "number" && height !== "" && height !== 0
      ) {
        this.handleNext()
      } else {
        alert('some fields are not valid or empty')
      }
  }

  render() {

    const { step, firstname, lastname, mail, age, height } = this.state
    const values = { firstname, lastname, mail, age, height }

    switch(step) {

      case 1:
        return (
          <FormOne 
            handleChange={this.handleChange}
            handleNext={this.handleNext}
            values={values}
          />
        )
      
      case 2:
        return (
          <FormTwo 
            handleChange={this.handleChange}
            handleNext={this.handleNext}
            checkValidity={this.checkValidity}
            handlePrev={this.handlePrev}
            values={values}
          />
        )

      case 3:
        return (
          <FormConfirm 
            handleChange={this.handleChange}
            checkValidity={this.checkValidity}
            handlePrev={this.handlePrev}
            values={values}
          />
        )

      case 4:
        return (
          <FormWin 
            handleReset={this.handleReset}
          />
        )

      default:
        return (
          <FormOne 
            handleChange={this.handleChange}
            handleNext={this.handleNext}
            values={values}
          />
        )
    }
  }
}

export default ReactForm
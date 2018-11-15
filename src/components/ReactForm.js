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
      height: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
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
      age: '',
      height: ''
    })
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
            handlePrev={this.handlePrev}
            values={values}
          />
        )

      case 3:
        return (
          <FormConfirm 
            handleChange={this.handleChange}
            handleNext={this.handleNext}
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
    }
  }
}

export default ReactForm
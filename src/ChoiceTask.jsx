import React, { Component } from 'react';
import { Form} from 'semantic-ui-react';
import CheckBox from './Checkbox';

export default class ChoiceTask extends Component {

    constructor(props) {
        super(props)
        this.state = {
          choice: [
            {id: 1, value: "Choice 1", isChecked: false},
            {id: 2, value: "Choice 2", isChecked: false},
            {id: 3, value: "Choice 3", isChecked: false},
            {id: 4, value: "Choice 4", isChecked: false}
          ]
        }
      }

    handleCheckChieldElement = (event) => {
        let choice = this.state.choice
        choice.forEach(choices => {
        if (choices.value === event.target.value)
            choices.isChecked =  event.target.checked
        })
        this.setState({choice: choice})
    }
  
    render() {
      return (
        <Form>
          <h3>Select The Choice Type For The Task</h3>
          {
          this.state.choice.map((choice) => {
            return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement} {...choice} />)
          })
        }
        </Form>
      )
    }
  }
  
import React, { Component } from 'react';
import { Form, Radio} from 'semantic-ui-react';

export default class DecisionTask extends Component {


    state = {};
    handleChange = (e, { value }) => this.setState({ value });
  
    render() {
      return (
        <Form>
          <h3>Please choose True/False to listing decisions</h3>
          <Form.Field name = 'Decision 1' style = {{marginLeft: 20}}>
            <h4>Decision to be made</h4>
            <Radio
              label='True'
              name='Decision'
              value='True'
              checked={this.state.value === 'True'}
              onChange={this.handleChange}
            />
            <Radio
              style = {{marginLeft: 20}}
              label='False'
              name='Decision'
              value='False'
              checked={this.state.value === 'False'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      )
    }
  }
  
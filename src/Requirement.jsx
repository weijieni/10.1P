import React, { Component } from 'react';
import { Form, Radio, Input} from 'semantic-ui-react';

export default class Requirement extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })
  
    render() {
      return (
        <Form>
          <div style = {{display: 'flex'}}>
          <h3>Require Master Workers </h3>
          <Form.Field style = {{marginLeft: 20}}>
            <Radio
              label='Yes'
              name='radioGroup'
              value='Yes'
              checked={this.state.value === 'Yes'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field  style = {{marginLeft: 20}}>
            <Radio
              label='No'
              name='radioGroup'
              value='No'
              checked={this.state.value === 'No'}
              onChange={this.handleChange}
            />
          </Form.Field>
          </div>
          <div style = {{display: 'flex'}}>
          <h3 style = {{width : 200}}>Reward Per Response </h3>
          <Form.Field style = {{marginLeft: 20}}>
            <Input
              placeholder = ""
            />
          </Form.Field>
          </div>
          <div style = {{display: 'flex'}}>
          <h3 style = {{width : 200}}>Name Of Response </h3>
          <Form.Field style = {{marginLeft: 20}}>
            <Input
              placeholder = ""
            />
          </Form.Field>
          </div>
        </Form>
      )
    }
  }
  
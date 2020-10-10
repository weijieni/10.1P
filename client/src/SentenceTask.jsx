import React, { Component } from 'react';
import { Form, TextArea} from 'semantic-ui-react';

export default class SentenceTask extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })
  
    render() {
      return (
        <Form>
          <h3>Please translate following sentence into <b>Spanish</b></h3>
          <p><b>This is a sample sentence</b></p>
          <TextArea placeholder='Put your translation here' style={{ minHeight: 100 }} />
        </Form>
      )
    }
  }
  
import React, { Component } from 'react';
import HeaderMain from './Header';
import HeaderSub from './Subheader';
import Describe from './Describe';
import Requirement from './Requirement';
import ChoiceTask from './ChoiceTask';
import DesicionTask from './DecisionTask';
import SentenceTask from './SentenceTask';
import { Form, Radio, Button} from 'semantic-ui-react';

export default class FormMain extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Form>
        <HeaderMain text = "New Requester Task" choice = {this.state.value}/>
        <div style = {{display: 'flex', justifyContent: 'space-between'}}>
        <h3>Select a task type: </h3>
        <Form.Field>
          <Radio
            label='Choice Task'
            name='radioGroup'
            value='Choice Task'
            checked={this.state.value === 'Choice Task'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Decision-Making Task'
            name='radioGroup'
            value='Decision-Making Task'
            checked={this.state.value === 'Decision-Making Task'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Sentence-Level Task'
            name='radioGroup'
            value='Sentence-Level Task'
            checked={this.state.value === 'Sentence-Level Task'}
            onChange={this.handleChange}
          />
        </Form.Field>
        </div>
        <HeaderSub text = "Describe your task to Workers"/>
        <Describe/>
        <HeaderSub text = "Setting up your Task"/>
        {(() => {
        switch (this.state.value) {
            case "Choice Task":   return <ChoiceTask/>;
            case "Decision-Making Task": return <DesicionTask/>;
            case "Sentence-Level Task":  return <SentenceTask/>;
            default:      return <p>Please Select A Task Type</p>;
          }
        })()}        
        <HeaderSub text = "Worker Requirement"/>
        <Requirement/>
        <Button type='submit' floated = "right">Save</Button>
      </Form>
    )
  }
}

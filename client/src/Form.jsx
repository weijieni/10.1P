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
  handleChange = (e, { value, title, description, date, choiceTask, decisionTask, sentenceTask, options, masterWorkers, reward, workerNumber }) => this.setState({ value, title, description, date, choiceTask, decisionTask, sentenceTask, options, masterWorkers, reward, workerNumber });

  constructor(props) {
    super(props);
    this.state = {
      type: "",
      title: "",
      description: "",
      date: "",
      masterWorkers: "",
      reward: "",
      workerNumber: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUpload = ()=>{
    fetch('http://localhost:4000/upload',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            type: this.state.value,
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
            choiceTask: this.state.choiceTask,
            decisionTask: this.state.decisionTask,
            sentenceTask: this.state.sentenceTask,
            options: this.state.options,
            masterWorkers: this.state.masterWorkers,
            reward: this.state.reward,
            workerNumber: this.state.workerNumber
        })
    })
    .then(response=>response.json())
    .then(data => console.log(data))
    .catch(err => {console.log('Errors:'+err)})
}

  render() {
    return (
      <Form onSubmit = {this.handleUpload}>
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
        <Describe />
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

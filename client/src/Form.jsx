import React, { Component } from 'react';
import HeaderMain from './Header';
import HeaderSub from './Subheader';
import DatePicker from './Datepicker';
import Requirement from './Requirement';
import ChoiceTask from './ChoiceTask';
import DesicionTask from './DecisionTask';
import SentenceTask from './SentenceTask';
import { Form, Radio, Button, Input} from 'semantic-ui-react';

export default class FormMain extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  constructor(props) {
    super(props);
    this.state = {
      taskType: "",
      title: "",
      description: "",
      date: "",
      sentenceTask:"",
      choiceTask:"",
      decisionTask:"",
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
            taskType: this.state.value,
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
            className = 'taskType'
            name='taskType'
            value='Choice Task'
            checked={this.state.value === 'Choice Task'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Decision-Making Task'
            className = 'taskType'
            name='taskType'
            value='Decision-Making Task'
            checked={this.state.value === 'Decision-Making Task'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Sentence-Level Task'
            className = 'taskType'
            name='taskType'
            value='Sentence-Level Task'
            checked={this.state.value === 'Sentence-Level Task'}
            onChange={this.handleChange}
          />
        </Form.Field>
        </div>
        <HeaderSub text = "Describe your task to Workers"/>
        <div>
                <div style = {{display: 'flex'}}>
                    <h3 style = {{width : 100}}>Title</h3>
                    <Input placeholder = 'Enter Task Title' style = {{width : 200}} name = "title" onChange = {this.handleInputChange}>
                        
                    </Input>
                </div>
                <div style = {{display: 'flex'}}>
                    <h3 style = {{width : 100}}>Description</h3>
                    <Input placeholder = 'Enter Task Description' style = {{width : 400}} name = "description" onChange = {this.handleInputChange}>
                        
                    </Input>
                </div>
                <div style = {{display: 'flex'}}>
                    <h3 style = {{width : 100}} name = "date" onChange = {this.handleInputChange}>Expire Date</h3>
                    <DatePicker/>
                </div>
            </div>
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

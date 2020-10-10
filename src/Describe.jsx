import React from 'react';
import { Input } from 'semantic-ui-react';
import { Component } from 'react';
import DatePicker from './Datepicker';


class Describe extends Component {
    render() {
        return (
            <div>
                <div style = {{display: 'flex'}}>
                    <h3 style = {{width : 100}}>Title</h3>
                    <Input placeholder = 'Enter Task Title' style = {{width : 200}}/>
                </div>
                <div style = {{display: 'flex'}}>
                    <h3 style = {{width : 100}}>Description</h3>
                    <Input placeholder = 'Enter Task Description' style = {{width : 400}}/>
                </div>
                <div style = {{display: 'flex'}}>
                    <h3 style = {{width : 100}}>Expire Date</h3>
                    <DatePicker />
                </div>
            </div>
        )
    }
}

export default Describe;
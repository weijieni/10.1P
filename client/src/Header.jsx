import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import './App.css';
import './Form';
import { Component } from 'react';

class HeaderMain extends Component{
    render() {
        return (
            <Segment clearing inverted color = "grey">
            <Header as='h2' floated='left'>
                {this.props.text}
            </Header>
            <Header as='h2' color = "red" floated='right'>
                {this.props.choice}
            </Header>
            </Segment>
        )
    }
}  
export default HeaderMain;
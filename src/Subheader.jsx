import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { Component } from 'react';

class HeaderSub extends Component{
    render() {
        return (
            <Segment clearing inverted color = "grey">
            <Header as='h2' floated='left'>
                {this.props.text}
            </Header>
            </Segment>
        )
    }
}  
export default HeaderSub;
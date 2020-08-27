import React, { Component } from 'react';
import { Row, Button } from 'react-bootstrap';
import Comment from './Comment'

export default class AddComment extends Component {
  constructor() {
    super();
    this.state = {
      commentText: ''
    }
  }

  changeText = (e) => {
    console.log('text changed');
    this.setState({ text: e.target.value });
  }

  render() {
    return <React.Fragment>
      <Row>
        <Comment text={this.state.commentText} changeText={this.changeText}></Comment>
        <Button style={{ marginLeft: 20 }} onClick={() => this.props.addComment(this.state.text)}>Add Comment</Button>
      </Row>
    </React.Fragment>
  }
}
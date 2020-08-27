import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Comment from './Comment';
import AddComment from './AddComment';
import axios from 'axios';

export default class CommentWall extends Component {
  constructor() {
    super();
    this.state = {
      commentTexts: []
    }
  }

  componentDidMount() {
    this.fetchCommentsFromServer();
  }

  fetchCommentsFromServer = async () => {
    try {
      const res = await axios.get('http://localhost:5000/comments');
      this.setState({ commentTexts: res.data.commentTexts });
    } catch (err) {
      console.log(err);
    }
  }

  changeText = (index, commentText) => {
    this.setState({ commentTexts: [...this.state.commentTexts.slice(0, index), commentText, ...this.state.commentTexts.slice(index + 1)] });
  }

  addCommentText = (commentText) => {
    this.setState({ commentTexts: [...this.state.commentTexts, commentText] });
  }

  render() {
    console.log(this.state);
    return <Container>
      {this.state.commentTexts.map((commentText, index) => (
        <Comment key={index} text={commentText} changeText={(e) => this.changeText(index, e.target.value)} />
      ))}
      <AddComment addComment={this.addCommentText} />
    </Container>
  }
}
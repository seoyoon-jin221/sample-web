import React from 'react';
import { Row } from 'react-bootstrap'

const Comment = (props) => {
  return <Row>
    <input type='text' defaultValue={props.text} onChange={props.changeText}></input>
  </Row>
}

export default Comment
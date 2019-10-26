import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import AuthForm from './components/auth/AuthForm'

class App extends Component {
  render() {
    return (
      <Container className="App" fluid>
        <Row >
          <Col></Col>
          <Col xs={4}><AuthForm ></AuthForm></Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}

export default App

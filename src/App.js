import React, { Component } from 'react';
import './App.css';
import { Navbar,Nav,Form,FormControl,Button, Jumbotron } from 'react-bootstrap';

class App extends Component {
  render() {
  return (
    <div className="App">
    <FirstComponent></FirstComponent>
    <SecondComponent></SecondComponent>
    <ThirdComponent></ThirdComponent> 
    </div>
  );
  }
}

class FirstComponent extends Component {
  render() {
  return (
    <div className="firstcomponent">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Etech</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Technologies</Nav.Link>
      <Nav.Link href="#pricing">About Us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </div>
  );
  }
}

class SecondComponent extends Component {
  render() {
  return (
    <div className="SecondComponent">
     <Jumbotron>
  <h1>Welcome to the <i>Etech</i> </h1>
  <p>
    Our Online Application will provide you all kind of resources that you 
    want to learn to make your own Web Application.  
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
    </div>
  );
  }
}

class ThirdComponent extends Component {
  render() {
  return (
    <div className="thirdcomponent">
     <Jumbotron>
<img src={"logo192.png"}  alt='logo'></img>
</Jumbotron>
    </div>
  );
  }
}

export default App; 

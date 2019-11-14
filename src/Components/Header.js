import React, { Component } from 'react';

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
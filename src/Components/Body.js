import React, { Component } from 'react';

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
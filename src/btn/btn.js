import React from 'react';

import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
export default class btn extends React.Component {
    constructor() {
      super();
    //   this.state = {};
    }
    render() {
      return(
        <>
        {/* <h1>Hello</h1> */}
      <Container>
      <Row>
        <Col lg="4" className="aboutme">About me</Col>
        <Col lg="8" className="xx">
            <Row>
                <Col lg="12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Col>
            </Row>
            <br></br>
            <Row>
                <Col lg="12">
                <Button color="secondary">Download Resume</Button>
            </Col>
            </Row>
            </Col>
       
      </Row>
    </Container>
        </>
      )
     
    }
  }
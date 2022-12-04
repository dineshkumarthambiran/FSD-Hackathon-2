import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Cards() {
  return (
   <div class='row' >
    
      {/* <Container className="d-flex h-100">
  <Row className="ml-auto align-self-center">
    <Col>

    <Card style={{ width: '18rem',  height:'25rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1616077167555-51f6bc516dfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
      <Card.Body>
        <Card.Title>Buy Stocks</Card.Title>
        <Card.Text>
          Invest in the Stocks
        </Card.Text>
        <Button variant="primary">Try now</Button>
      </Card.Body>
    </Card>
    
    </Col>
    </Row>
    </Container>

    <Container className="d-flex h-100">
  <Row className="ml-auto align-self-center">
    <Col>

    <Card style={{ width: '18rem', height:'25rem'}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      <Card.Body>
        <Card.Title>Shop online</Card.Title>
        <Card.Text>
          Linked to all top online sites
        </Card.Text>
        <Button variant="primary">Try now</Button>
      </Card.Body>
    </Card>
    
    </Col>
    </Row>
 
    </Container>
    <Container className="d-flex h-100">
  <Row className="ml-auto align-self-center">
    <Col>

    <Card style={{ width: '18rem' , height:'25rem'}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1590599145008-e4ec48682067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHNob3BwaW5nJTIwb25saW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Card.Body>
        <Card.Title>UPI transfer</Card.Title>
        <Card.Text>
          Send money to your friends at one touch
        </Card.Text>
        <Button variant="primary">Try now</Button>
      </Card.Body>
    </Card>
    
    </Col>
    </Row>
 
    </Container> */}

    <section>
    <div class = " container" id="services">
        <div class = "row text-center d-inline">
            <div class ="col-md">
                <div class="card" style={{width: '25rem'}}>
                    <img src="https://assets.mspimages.in/hindi/wp-content/uploads/2022/08/Online-shopping.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">King Suite</p>
                        <a href='/signup'><button type="button" class="btn btn-primary btn-lg">Shop now</button></a>
                      </div>
                </div>
                <div class="card" style={{width: '25rem'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBGV7NMlW2Itu1OHtH38d33F295zpx2ItoA&usqp=CAU" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Private Suites</p>
                      <a href='/signup'><button type="button" class="btn btn-primary btn-lg">Recharge Now</button></a>
                    </div>
                  </div>
                  <div class="card" style={{width: '25rem'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Sql2RCrIu4sEGhja77kFqBxZWjuWulFdYQ&usqp=CAU" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Sea Villas</p>
                      <a href='/regist'><button type="button" class="btn btn-primary btn-lg">Pay Bills and Loans</button></a>
                    </div>
                  </div>

            </div>
        </div>
    </div>
</section>

   
    </div>
  );
}

export default Cards;
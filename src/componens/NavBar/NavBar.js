 import React, {Component, Fragment} from 'react';
 import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
 import Nav from 'react-bootstrap/Nav';
 import Form from 'react-bootstrap/Form';
 import NavDropdown from 'react-bootstrap/NavDropdown';
 import '../../asset/css/bootstrap.min.css';
 import Button from 'react-bootstrap/Button';
// import logo from '../../asset/images/logo.png';
import '../../asset/css/style2.css';

class NavBar extends Component{
      render(){
            return(
                  <Fragment>

                              {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary menu">
                                    <Container>
                                    <Navbar.Brand href="#home"><img src={logo} alt="images" ></img></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                          
                                          
                                    </Nav>
                                    <Nav className="danmenu">
                                          <Nav.Link href="#deets">Home</Nav.Link>

                                          <Nav.Link href="#deets">Service</Nav.Link>

                                          <Nav.Link href="#deets">Protfolio</Nav.Link>

                                          <Nav.Link href="#deets">Blog</Nav.Link>

                                          <Nav.Link href="#deets">contact</Nav.Link>
                                          
                                    </Nav>
                                    </Navbar.Collapse>
                                    </Container>
                              </Navbar> */}



                                    <Navbar expand="lg" className="bg-body-tertiary">
                                          <Container>
                                          <Navbar.Brand href="#">Ninestars</Navbar.Brand>
                                          <Navbar.Toggle aria-controls="navbarScroll" />
                                          <Navbar.Collapse id="navbarScroll">
                                          <Nav
                                                className="ms-auto my-2 my-lg-0"
                                                style={{ maxHeight: '100px' }}
                                                navbarScroll
                                          >
                                                <Nav.Link href="#action1">Home</Nav.Link>
                                                <Nav.Link href="#action1">About</Nav.Link>
                                                <Nav.Link href="#action1">Service</Nav.Link>
                                                <Nav.Link href="#action1">Protfolio</Nav.Link>
                                                <Nav.Link href="#action1">Contact</Nav.Link>
                                                {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                                                <NavDropdown title="DropDowen" id="navbarScrollingDropdown">
                                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action4">
                                                Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action5">
                                                Something else here
                                                </NavDropdown.Item>
                                                </NavDropdown>
                                                
                                          </Nav>
                                          <Form className="d-flex btn">
                                               
                                                <Button variant="outline-success">Get Started</Button>
                                          </Form>
                                          </Navbar.Collapse>
                                          </Container>
                                    </Navbar>

                  </Fragment>
            );
      }
}
export default NavBar;
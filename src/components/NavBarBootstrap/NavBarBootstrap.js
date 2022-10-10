import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import "./NavBarBootstrap.scss"


function BasicExample() {
  return (
    <Navbar className='bgColor'  expand="lg">
      <Container>
        <Navbar.Brand><Link to="/" className='navbar-tittle'>LEALUVE</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}to="/" className='navbar-link'> Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/productos/bandoleras" className='navbar-link'> Bandoleras</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/mochilas" className='navbar-link'> Mochilas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/riñoneras" className='navbar-link'> Riñonera</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/nosotros" className='navbar-link'> Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className='navbar-link'> Contacto</Nav.Link>
            <Nav.Link as={Link} to="/preguntasfrecuentes" className='navbar-link'> Preguntas Frecuentes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
    
  );
}

export default BasicExample;
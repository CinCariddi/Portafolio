import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';

export default function Barra() {
  return (
    <>
        <Navbar className='navBg' variant='dark' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/'>CC</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                        <NavDropdown title="Más Info" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/proyectos'>Proyectos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/estudio'>Habilidades</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/contacto'>Contacto</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <section>
            <Outlet></Outlet>
        </section>
    </>
  );
}
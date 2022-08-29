import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import Logo from '../../Imagenes/Logo.png'
import './NavBar.css'

export default function Barra() {
  return (
    <>
        <Navbar className='navBg' variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href='/'><img src={Logo}/>Cintia Cariddi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#project">Proyectos</Nav.Link>
                        <Nav.Link href="#habilidades">Habilidades</Nav.Link>
                        <Nav.Link href="#contactos">Contacto</Nav.Link>
                        {/* <NavDropdown title="Proyectos" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/clubdeportivo'>Club Deportivo</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/pokemon'>Pokemon App</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/perros'>Dog App</NavDropdown.Item>
                        </NavDropdown> */}
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
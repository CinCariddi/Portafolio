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
                    {window.location.pathname === '/' && <Nav className="me-auto" style={{margin: "0px !important"}}>
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#project">Proyectos</Nav.Link>
                        <Nav.Link href="#habilidades">Habilidades</Nav.Link>
                        <Nav.Link href="#contactos">Contacto</Nav.Link>
                    </Nav>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <section>
            <Outlet></Outlet>
        </section>
    </>
  );
}
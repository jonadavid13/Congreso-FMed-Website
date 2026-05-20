import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router"

const NavigationBar = () => {
  return (
    <Navbar expand="lg" sticky="top">
      <Container className="nav-container" fluid>
        <div className="toggler-group">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <span className="toggler-span">Menú</span>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2">
            <Nav.Link as={Link} to="/#inicio">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/#inscripciones">Inscripciones</Nav.Link>
            <Nav.Link as={Link} to="/#eponimo">Epónimo</Nav.Link>
            <Nav.Link as={Link} to="/#programa-cientifico">Programa Científico</Nav.Link>
            <Nav.Link as={Link} to="/#trabajos-libres">Trabajos Libres</Nav.Link>
            <Nav.Link as={Link} to="/#expo-facultad">Expo Facultad</Nav.Link>
            <Nav.Link as={Link} to="/#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export { NavigationBar }
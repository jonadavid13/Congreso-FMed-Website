import { Container, Nav, Navbar } from "react-bootstrap"

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
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#inscripciones">Inscripciones</Nav.Link>
            <Nav.Link href="#eponimo">Epónimo</Nav.Link>
            <Nav.Link href="#programa-cientifico">Programa Científico</Nav.Link>
            <Nav.Link href="#trabajos-libres">Trabajos Libres</Nav.Link>
            <Nav.Link href="#expo-facultad">Expo Facultad</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export { NavigationBar }
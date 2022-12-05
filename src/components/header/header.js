import "./header.css"
import {Navbar, Nav, NavDropdown, Container, Offcanvas} from "react-bootstrap";
import  {Link} from "react-router-dom";

function Header() {
    return (
        <Navbar key='xxl' bg="black" variant='dark' expand='xxl' className="header">
            <Container fluid className="inner-header">
                <Navbar.Brand href=""><Link to="/">CommUnity</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-xx'`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-xx`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavDropdown
                                title="Подробнее об Unity"
                                id={`offcanvasNavbarDropdown-expand-xxl`}
                            >
                                <NavDropdown.Item href=""><Link to="/history">История</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Игры</NavDropdown.Item>
                                <NavDropdown.Item href="#action5"><Link to="/films">Фильмы</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action6">Архитектура</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Доп. инструменты"
                                id={`offcanvasNavbarDropdown-expand-xxl`}
                            >
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action1">Обучение</Nav.Link>
                            <Nav.Link href="#action2">Новости</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;
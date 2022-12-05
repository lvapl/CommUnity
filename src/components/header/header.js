import "./header.css"
import {Navbar, Nav, NavDropdown, Container, Offcanvas} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from "./images/Logo.png";

function Header() {
    return (
        <Navbar key='xxl' bg="black" variant='dark' expand='xxl' className="header">
            <Container fluid className="inner-header">
                <Navbar.Brand href=""><NavLink to="/"><img src={logo} alt=""/></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-xx'`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-xx`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                            CommUnity
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavDropdown
                                menuVariant="dark"
                                title="Подробнее об Unity"
                                id={`offcanvasNavbarDropdown-expand-xxl`}
                            >
                                <NavDropdown.Item><NavLink className="nav-link" to="/history">История</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink className="nav-link" to="/games">Игры</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink className="nav-link" to="/films">Фильмы</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink className="nav-link" to="/architecture">Архитектура</NavLink></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                menuVariant="dark"
                                title="Доп. инструменты"
                                id={`offcanvasNavbarDropdown-expand-xxl`}
                            >
                                <NavDropdown.Item>Action</NavDropdown.Item>
                                <NavDropdown.Item>
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>Обучение</Nav.Link>
                            <Nav.Link>Новости</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;
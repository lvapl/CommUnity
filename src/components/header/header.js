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
                                className="nav-link"
                                menuVariant="dark"
                                title="Подробнее об Unity"
                                id={`offcanvasNavbarDropdown-expand-xxl`}
                            >
                                <NavDropdown.Item><NavLink className="nav-link" to="/history">История</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink className="nav-link" to="/games">Игры</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink className="nav-link" to="/films">Фильмы</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink className="nav-link" to="/architecture">Архитектура</NavLink></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link><NavLink className="nav-link" to="/add-tools">Доп. инструменты</NavLink></Nav.Link>
                            <Nav.Link><NavLink className="nav-link" to="/learn">Обучение</NavLink></Nav.Link>
                            <Nav.Link><NavLink className="nav-link" to="/news">Новости</NavLink></Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;
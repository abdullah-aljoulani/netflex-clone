import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header(){
    return(
    <Navbar className="Navbar">
    <Container>
    <Navbar.Brand href="#home" id='logo'>Netflix Clone</Navbar.Brand>
    <Nav  >
        <Link to={"/"}>Home</Link>
        </Nav>
        <Nav>
        <Link to={"/FavList"}> Favorit List</Link>
    </Nav>
    </Container>
</Navbar>
    )
}

export default Header;
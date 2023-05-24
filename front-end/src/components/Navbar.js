import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import { Link } from 'react-router-dom';

export default function Header() {
return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/fav">Favorite</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    
    }
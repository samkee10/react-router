import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container className="">
        <Link to="/home" className="navbar-text text-white  text-decoration-none">
          Home🏠
        </Link>
        <Link to="/contacto" className="navbar-text text-white  text-decoration-none">
          Contacto📒
        </Link>
        <Navbar.Brand className="ms-auto">Happy Cake 🍰</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Navigation;
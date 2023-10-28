import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

const NotFound = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Lo sentimos no esta pagina no existe</h1>
      <Link to={"home"}><button>Home</button></Link>
    </Container>
  );
};
export default NotFound;

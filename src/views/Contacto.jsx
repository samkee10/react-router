import { Container } from "react-bootstrap";

import Contact from "../components/Contact";

const Contacto= () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4 text-center">Cuentanos, ¿en que podemos ayudar?</h1>
      <Contact />
    </Container>
  );
};
export default Contacto;

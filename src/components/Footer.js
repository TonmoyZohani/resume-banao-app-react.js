import React from "react";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Container
      fluid
      className="border-top mt-2 text-center bg-light text-dark py-3"
    >
      <p className="m-0 bg-3 text-dark">
        Resume Banao
        <br />{" "}
      </p>
      <p className="m-0 bg-3 text-dark bold">
        Copyright © 2021-2022 Resume Banao- All Rights Reserved <br />{" "}
      </p>
    </Container>
  );
}

export default Footer;

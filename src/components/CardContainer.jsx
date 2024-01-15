import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { data } from "../helper/data";

import Col from "react-bootstrap/esm/Col";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
import FormComp from "./FormComp";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(search, "dış");
  return (
    <>
      
      <FormComp handleChange={handleChange} />
      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="justify-content-center g-3">
          {data
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase().trim())
            )
            .map((player, i) => (
              <Col xl={3} lg={4} md={6} key={i}>
                <PlayerCard {...player} />
              </Col>
            ))}

        </Row>
      </Container>
    </>
  );
};
export default CardContainer;

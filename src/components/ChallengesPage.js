import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import Navbar from "./Navbar";

const ChallengesPage = () => {
  const [challenge, setChallenge] = useState("");
  const [challengesList, setChallengesList] = useState([
    "Complete 10 push-ups",
    "Run 5 kilometers",
    "Do 30 minutes of yoga",
  ]);

  const handleChallengeChange = (e) => {
    setChallenge(e.target.value);
  };

  const handleAddChallenge = (e) => {
    e.preventDefault();
    if (challenge.trim() !== "") {
      setChallengesList([...challengesList, challenge]);
      setChallenge("");
    }
  };

  const handleDeleteChallenge = (index) => {
    const updatedChallenges = challengesList.filter((_, i) => i !== index);
    setChallengesList(updatedChallenges);
  };

  return (
    <Container>
      <Navbar />
      <Row>
        <Col>
          <h1 style={{ margin: "50px" }}>Challenges</h1>
          <Form onSubmit={handleAddChallenge}>
            <Form.Group controlId="challengeForm">
              <Form.Label>Add Challenge</Form.Label>
              <Form.Control
                type="text"
                value={challenge}
                onChange={handleChallengeChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ margin: "50px" }}>
              Add
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ margin: "50px" }}>Challenges List</h2>
          <ListGroup>
            {challengesList.map((challenge, index) => (
              <ListGroup.Item key={index}>
                {challenge}
                <Button
                  style={{ marginLeft: "50px" }}
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteChallenge(index)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ChallengesPage;

"use client";

import { Alert, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const smartList = [
  "Only buy 1 carton of milk (current stock: 2)",
  "Skip spinach this week (2 portions expire tomorrow)",
  "Buy tomatoes for rescue pasta plan",
  "Buy oats instead of cereal multipack",
  "Use frozen protein before buying fresh again",
];

export default function ShoppingPage() {
  return (
    <Container className="py-4">
      <h1 className="display-6 fw-bold">Shopping optimization</h1>
      <p className="text-muted">Reduce duplicate purchases and align shopping with current pantry status.</p>

      <Row className="g-3">
        <Col md={8}>
          <Card className="shadow-sm border-0">
            <Card.Header className="fw-semibold">Recommended shopping actions</Card.Header>
            <ListGroup variant="flush">
              {smartList.map((item) => (
                <ListGroup.Item key={item}>{item}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Alert variant="warning" className="shadow-sm">
            Estimated avoidable spend this week: <strong>$21</strong>
          </Alert>
          <Alert variant="success" className="shadow-sm">
            Waste risk drops when purchases follow expiry priority.
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

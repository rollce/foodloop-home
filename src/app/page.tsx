"use client";

import { Badge, Card, Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="py-4">
      <Card className="p-4 border-0 shadow-sm">
        <Badge bg="success" className="mb-3 w-fit">REAL PROBLEM: HOUSEHOLD FOOD WASTE</Badge>
        <h1 className="display-4 fw-bold">Turn expiring ingredients into meals instead of trash</h1>
        <p className="lead text-muted mt-3">
          FoodLoop helps households track perishables, plan meals from what must be used first, and
          avoid duplicate shopping.
        </p>
        <div className="d-flex gap-2 flex-wrap mt-3">
          <a href="/pantry" className="btn btn-success">Open Pantry</a>
          <a href="/planner" className="btn btn-outline-success">Meal Planner</a>
          <a href="/shopping" className="btn btn-outline-secondary">Shopping Optimizer</a>
        </div>
      </Card>

      <Row className="mt-3 g-3">
        {[
          ["Potential waste reduction", "38%"],
          ["Tracked categories", "5"],
          ["Recipes from leftovers", "24"],
          ["Monthly savings estimate", "$86"],
        ].map(([title, value]) => (
          <Col md={3} sm={6} xs={12} key={title}>
            <Card className="h-100 p-3 shadow-sm border-0">
              <div className="text-muted small">{title}</div>
              <div className="h3 fw-bold mt-1">{value}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

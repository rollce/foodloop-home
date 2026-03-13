"use client";

"use client";

import { useEffect, useMemo, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

interface PantryItem {
  id: string;
  name: string;
  quantity: number;
  expiresInDays: number;
  category: string;
}

export default function PlannerPage() {
  const [items, setItems] = useState<PantryItem[]>([]);

  useEffect(() => {
    fetch("/api/pantry")
      .then((res) => res.json())
      .then((payload) => setItems(payload.items ?? []));
  }, []);

  const urgentItems = useMemo(() => items.filter((item) => item.expiresInDays <= 3), [items]);

  const mealIdeas = useMemo(() => {
    const names = urgentItems.map((item) => item.name.toLowerCase());
    const ideas: string[] = [];

    if (names.some((name) => name.includes("spinach")) && names.some((name) => name.includes("chicken"))) {
      ideas.push("Garlic chicken with sauteed spinach");
    }

    if (names.some((name) => name.includes("yogurt"))) {
      ideas.push("Yogurt fruit bowl or quick marinade");
    }

    ideas.push("Flexible stir-fry using all produce expiring in <= 3 days");

    return ideas;
  }, [urgentItems]);

  return (
    <Container className="py-4">
      <h1 className="display-6 fw-bold">Meal planner from expiring stock</h1>
      <p className="text-muted">Plan meals around urgency, not random shopping impulses.</p>

      <Row className="g-3">
        <Col md={5}>
          <Card className="p-3 shadow-sm border-0 h-100">
            <h5>Use-first list (next 3 days)</h5>
            <ul className="mt-2">
              {urgentItems.map((item) => (
                <li key={item.id}>{item.name} ({item.expiresInDays} days)</li>
              ))}
            </ul>
          </Card>
        </Col>
        <Col md={7}>
          <Card className="p-3 shadow-sm border-0 h-100">
            <h5>Generated meal ideas</h5>
            <ul className="mt-2">
              {mealIdeas.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

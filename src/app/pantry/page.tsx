"use client";

import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";

interface PantryItem {
  id: string;
  name: string;
  quantity: number;
  expiresInDays: number;
  category: string;
}

export default function PantryPage() {
  const [items, setItems] = useState<PantryItem[]>([]);
  const [form, setForm] = useState({ name: "", quantity: 1, expiresInDays: 3, category: "Other" });

  async function loadItems() {
    const response = await fetch("/api/pantry");
    const payload = await response.json();
    setItems(payload.items ?? []);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadItems();
  }, []);

  async function addItem(event: React.FormEvent) {
    event.preventDefault();

    const response = await fetch("/api/pantry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setForm({ name: "", quantity: 1, expiresInDays: 3, category: "Other" });
      await loadItems();
    }
  }

  return (
    <Container className="py-4">
      <h1 className="display-6 fw-bold">Pantry inventory</h1>
      <p className="text-muted">Track quantity and expiry to prevent silent food loss.</p>

      <Row className="g-3">
        <Col md={5}>
          <Card className="p-3 shadow-sm border-0">
            <Form onSubmit={addItem}>
              <Form.Group className="mb-2">
                <Form.Label>Item name</Form.Label>
                <Form.Control value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} required />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" min={1} value={form.quantity} onChange={(e) => setForm((prev) => ({ ...prev, quantity: Number(e.target.value) }))} required />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Expires in (days)</Form.Label>
                <Form.Control type="number" min={1} value={form.expiresInDays} onChange={(e) => setForm((prev) => ({ ...prev, expiresInDays: Number(e.target.value) }))} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select value={form.category} onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}>
                  <option>Produce</option>
                  <option>Dairy</option>
                  <option>Protein</option>
                  <option>Dry goods</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
              <Button type="submit" variant="success">Add to pantry</Button>
            </Form>
          </Card>
        </Col>

        <Col md={7}>
          <Card className="p-3 shadow-sm border-0">
            <Table responsive>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Expiry</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.expiresInDays} days</td>
                    <td>{item.category}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

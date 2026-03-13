"use client";

import { Container, Nav, Navbar } from "react-bootstrap";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Overview" },
  { href: "/pantry", label: "Pantry" },
  { href: "/planner", label: "Planner" },
  { href: "/shopping", label: "Shopping" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <Navbar expand="lg" bg="light" sticky="top" className="border-bottom">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          FoodLoop Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {links.map((link) => (
              <Nav.Link href={link.href} key={link.href} active={pathname === link.href || pathname.startsWith(`${link.href}/`)}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

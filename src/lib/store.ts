export interface PantryItem {
  id: string;
  name: string;
  quantity: number;
  expiresInDays: number;
  category: "Produce" | "Dairy" | "Protein" | "Dry goods" | "Other";
}

const items: PantryItem[] = [
  { id: "i1", name: "Spinach", quantity: 2, expiresInDays: 1, category: "Produce" },
  { id: "i2", name: "Yogurt", quantity: 4, expiresInDays: 3, category: "Dairy" },
  { id: "i3", name: "Chicken breast", quantity: 2, expiresInDays: 2, category: "Protein" },
  { id: "i4", name: "Rice", quantity: 1, expiresInDays: 120, category: "Dry goods" },
];

export function getPantryItems() {
  return items;
}

export function addPantryItem(input: Omit<PantryItem, "id">) {
  const item: PantryItem = {
    ...input,
    id: `i-${Math.random().toString(16).slice(2, 8)}`,
  };

  items.unshift(item);
  return item;
}

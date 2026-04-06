import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";

test("navigates to detail page", async () => {
  render(
    <MemoryRouter initialEntries={["/pokemon/pikachu"]}>
      <App />
    </MemoryRouter>
  );

  const element = await screen.findByText(/pikachu/i);

  expect(element).toBeInTheDocument();
});
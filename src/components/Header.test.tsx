import Header from "./Header";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("render Header correctly", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  it("Render Header initial", () => {
    const Header = screen.getByTestId("Header");
    expect(Header).toBeInTheDocument;
    const link = screen.getAllByTestId("link");
    expect(link).toHaveLength(2);
    expect(link[0].textContent).toBe("HOME");
    expect(link[1].textContent).toBe("CREATE POST");
  });
});

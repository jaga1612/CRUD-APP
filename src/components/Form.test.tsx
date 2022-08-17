import Form from "./Form";

import { render, screen } from "@testing-library/react";

describe("render form correctly", () => {
  render(
    <Form
      title="Post title"
      body="Post Body"
      onSubmit={() => "function called"}
    />
  );
  it("Render correctly initial", () => {
    const form = screen.findAllByRole("form");
    expect(form).toBeInTheDocument;

    const label = document.querySelectorAll("label");

    expect(label).toHaveLength(2);

    expect(label[0].textContent).toBe("Title");
    expect(label[1].textContent).toBe("Comment");

    const inputs = document.querySelectorAll("input");

    expect(inputs).toHaveLength(2);

    expect(inputs[0].value).toBe("Post title");
    expect(inputs[1].value).toBe("Post Body");
  });
});

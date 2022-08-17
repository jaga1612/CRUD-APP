import SinglePost from "./Singlepost";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("render Header correctly", () => {
  render(
    <MemoryRouter>
      <SinglePost
        post={{
          body: "post body",
          id: 1,
          title: "post",
          userId: 1,
        }}
        users={[]}
      />
    </MemoryRouter>
  );

  it("Render Singlepost initial", () => {
    const post = screen.getByTestId("post");

    expect(post).toBeInTheDocument;

    const link = screen.getAllByTestId("link");

    expect(link).toHaveLength(2);

    expect(link[0].textContent).toBe("Delete");
    expect(link[1].textContent).toBe("Edit");
  });
});

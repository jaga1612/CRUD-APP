import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import RenderList from "./RenderList";
import reducers from "../reducers";
import { createStore } from "redux";
import { keys } from "@mui/system";

describe("render list correctly", () => {
  render(
    <Provider store={createStore(reducers)}>
      <RenderList />
    </Provider>
  );

  test("Render list item correctly", async () => {
    const list = await screen.findAllByTestId("list");
    expect(list).not.toHaveLength(0);
    list.map((li) => {
      expect(li).toBeInTheDocument;
    });
  });
});

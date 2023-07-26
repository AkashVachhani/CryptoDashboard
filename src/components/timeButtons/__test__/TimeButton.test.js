import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import TimeButton from "../TimeButton";

describe("Time button", () => {
  it("should show button name", async () => {
    render(
      <Provider store={store}>
        <TimeButton />
      </Provider>
    );

    const buttonElement = screen.getByRole("button", {
      name: /1d/i,
    });

    expect(buttonElement).toBeInTheDocument();
  });
});

import { render, screen, cleanup } from "@marko/testing-library";
import Button from "./fixture.marko";

describe("<app-button>", () => {
  test("Expect 'label' text to be in the document", async () => {
    await render(Button, {
      label: "Add to cart",
    });
    expect(screen.getByText("Add to cart").innerHTML).toBe("Add to cart");
  });

  test("Expect 'label' text to be in the document 2", async () => {
    await render(Button, {
      label: "Add to cart",
    });
    expect(screen.getByText("Add to cart")).toBeInTheDocument();
  });
});

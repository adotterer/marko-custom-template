import { render } from "@marko/testing-library";
import Button from "./fixture.marko";

describe("<app-button>", () => {
  test("Expect 'button' text to be in the document", async () => {
    const { getByText } = await render(Button, {
      label: "Add to cart",
    });
    const button = getByText(/add to cart/i);

    expect(button.parentNode).toHaveAttribute("class", "app-button");
  });
});

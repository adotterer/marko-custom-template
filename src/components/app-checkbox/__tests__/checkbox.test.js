import { render, screen } from "@marko/testing-library";
import Checkbox from "../index.marko";

describe("<app-checkbox>", () => {
  test("should toggle check when clicked", async () => {
    // Arrange: Render the checkbox component
    const { container } = await render(Checkbox, {
      label: "Click here to subscribe",
    });

    // Act: Simulate a click event on the checkbox
    const button = container.querySelector("button");

    button.click();
    expect(button.classList.contains("checked")).toBe(true);
  });
  test("classList string should match snapshot", async () => {
    const { container } = await render(Checkbox, {
      label: "Click here to subscribe",
    });

    const button = container.querySelector("button");
    expect(button.classList.value).toMatchSnapshot();
  });
});

import { render } from "@marko/testing-library";
import userEvent from "@testing-library/user-event";
import Checkbox from "../index.marko";

describe("<app-checkbox>", () => {
  test("should toggle check when clicked", async () => {
    const user = userEvent.setup();
    const { container } = await render(Checkbox, {
      label: "Click here to subscribe",
    });

    const button = container.querySelector("button");
    await user.click(button);
    expect(button.classList.contains("checked")).toBe(true);
  });
  test("classList string should match snapshot", async () => {
    const user = userEvent.setup();
    const { container, getByText } = await render(Checkbox, {
      label: "Click here to subscribe",
    });

    const button = container.querySelector("button");
    await user.click(getByText(/click here to subscribe/i));
    expect(button.classList.value).toMatchSnapshot();
  });
});

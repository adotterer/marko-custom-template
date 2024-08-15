import { render, screen } from "@marko/testing-library";
import DataFetchExample from "./fixture.marko";
import debounce from "../../../utils/debounce";

test("Data fetch table displays headers", async () => {
  await render(DataFetchExample);
  await debounce(1000); // wait for resources to load

  expect(screen.getByText("Avatar")).toBeInTheDocument();
});

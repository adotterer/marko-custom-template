import { render, waitFor } from "@marko/testing-library";
import DataFetchExample from "./fixture.marko";

describe("<app-fetch-data>", () => {
  test("Data fetch table displays headers", async () => {
    const { getByText, debug } = await render(DataFetchExample);
    await waitFor(() => {
      expect(getByText("Avatar")).toBeInTheDocument();
    });
  });
});

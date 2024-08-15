import debounce from "../debounce";

describe("debounce function", () => {
  test("resolves after the specified delay", () => {
    jest.useFakeTimers(); // Use fake timers for more control over the timing

    const delay = 2000;
    const debouncePromise = debounce(delay);

    jest.advanceTimersByTime(delay);

    return debouncePromise.then((res) => {
      expect(res).toBe(true);
    });
  });

  test("does not resolve before the specified delay", () => {
    jest.useFakeTimers(); // Use fake timers for more control over the timing

    const delay = 2000;
    const debouncePromise = debounce(delay);

    jest.advanceTimersByTime(10);

    return expect(debouncePromise).not.toBe(true);
  });
});

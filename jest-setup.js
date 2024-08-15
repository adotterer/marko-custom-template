import { render, screen, cleanup } from "@marko/testing-library";
import "@testing-library/jest-dom";

beforeAll(async () => {
  //   console.log("STARTING TEST _________");
});

afterAll(async () => {
  //   console.log("ENDING TEST _________");
  cleanup();
});

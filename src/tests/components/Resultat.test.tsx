import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Result from "../../components/Result";

let container: any;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("test result value", () => {
  const { container } = render(<Result value="10" />);
  expect(container.querySelector('.result')?.innerHTML).toBe('10');
});
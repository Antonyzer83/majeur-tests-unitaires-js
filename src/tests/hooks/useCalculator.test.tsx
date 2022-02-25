import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import useCalculator from "../../hooks/useCalculator";

test("addition", () => {
  const { result } = renderHook(() => useCalculator());
  let additionResult = result.current.addition('1', '1')
  expect(additionResult).toEqual('2');
});

test("substraction", () => {
  const { result } = renderHook(() => useCalculator());
  const additionResult = result.current.substraction('1', '1');
  expect(additionResult).toEqual('0');
});

test("division", () => {
  const { result } = renderHook(() => useCalculator());
  const additionResult = result.current.division('12', '3');
  expect(additionResult).toEqual('4');
});

test("modulo", () => {
  const { result } = renderHook(() => useCalculator());
  const additionResult = result.current.modulo('5', '3');
  expect(additionResult).toEqual('2');
});

test("square", () => {
  const { result } = renderHook(() => useCalculator());
  const additionResult = result.current.square('25');
  expect(additionResult).toEqual('5');
});
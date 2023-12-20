import { describe, expect } from "vitest";
import { useCounter } from "./useCounter";
import { renderHook,act } from "@testing-library/react";

describe("useContext", () => {
    it("Render default count", () => {
       const {result} = renderHook(useCounter)
       expect(result.current.count).toBe(0)
    })
    it("Render intial count", () => {
       const {result} = renderHook(()=>useCounter(10))
       expect(result.current.count).toBe(10)
    })
    it("Increment", () => {
       //Arrange
       const {result} = renderHook(()=>useCounter(1))
       //Act
       act(()=>result.current.onIncrement)
       //Assert
       expect(result.current.count).toBe(1)
    })
    it("Decrement", () => {
       const {result} = renderHook(()=>useCounter(1))
       act(()=>result.current.ondecrement)
       expect(result.current.count).toBe(1)
    })

})
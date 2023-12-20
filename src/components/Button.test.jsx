import { render,screen } from "@testing-library/react";
import Button from "./Button";

describe("App",()=>{
  it("Props",()=>{
    render(<Button type="button" title="Submit" />)
    expect(screen.getByRole("button")).toHaveTextContent("Submit")
  })
  
})
import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import PageError from "./PageError";

describe("Error Page", () => {
  it("Should show Error message", () => {
    render(<PageError />);

    const testMessage = "Esta Pagina no Existe";
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});

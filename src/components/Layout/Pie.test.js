import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Pie from "./Pie";

describe("Footer Component", () => {
  it("Should show Footer message", () => {
    const testMessage = "Esta Pagina no Existe";

    render(<Pie appname={testMessage} />);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});

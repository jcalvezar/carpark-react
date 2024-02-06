import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";

describe("Auth Tests", () => {
  beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    // Restore the original console.log after all tests are done
    console.log.mockRestore();
  });

  it("shows the Init Screen", () => {
    const testMessage = "Ingresar";

    render(
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    );

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  test("Login & User Screen", async () => {
    const testMessage = "Ingresar";

    render(
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    );

    fireEvent.click(screen.getByText(/ingresar/i));

    const alert = await screen.findByText(/menu/i);

    expect(screen.queryByText(testMessage)).toBeNull();
  });
});

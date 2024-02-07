import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";

beforeAll(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  // Restore the original console.log after all tests are done
  console.log.mockRestore();
  console.error.mockRestore();
});

describe("Auth Tests", () => {
  it("shows the Init Screen", () => {
    const testMessage = "Ingresar";

    render(
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    );

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it("Do Login & Show User Screen", async () => {
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

describe("Users Area Tests", () => {
  it("show Menu items", async () => {
    render(
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    );

    // Click Menu
    fireEvent.click(screen.getByText(/menu/i));

    const alert2 = await screen.findByText(/panel/i);
  });

  it("Click Menu -> Panel de Admin & Show Dashboard", async () => {
    render(
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    );

    // Click Menu
    fireEvent.click(screen.getByText(/menu/i));

    const alert2 = await screen.findByText(/panel/i);

    // Click Menu
    fireEvent.click(screen.getByText(/panel/i));

    const alert3 = await screen.findByText(/usuarios/i);
  });
});

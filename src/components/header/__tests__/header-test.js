import React from "react";
import Header from "../index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import "@testing-library/jest-dom";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

describe("Header.js", () => {
  it("check image is the document", () => {
    render(<AppWrapper />);
    const imgEl = screen.getByTestId("logoImg");
    expect(imgEl).toBeInTheDocument();
  });
});

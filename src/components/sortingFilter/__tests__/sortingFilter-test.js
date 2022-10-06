/* eslint-disable testing-library/no-node-access */
import React from "react";
import SortingFilter from "../index";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import "@testing-library/jest-dom";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SortingFilter />
    </Provider>
  );
};

describe("SortingFilter.js", () => {
  it("Is the page rendering?", () => {
    render(<AppWrapper />);
    const docEl = document.querySelector(".css-a94fqr");
    expect(docEl).toBeInTheDocument();
  });
  it("changing the checked value after clicking the button", () => {
    render(<AppWrapper />);
    const checkedRadio = document.querySelector('[checked=""]');
    expect(checkedRadio).toHaveAttribute("value", "lowToHigh");
    fireEvent.change(checkedRadio, { target: { value: "highToLow" } });
    const changedCheckedRadio = document.querySelector('[checked=""]');
    expect(changedCheckedRadio).toHaveAttribute("value", "highToLow");
  });
});

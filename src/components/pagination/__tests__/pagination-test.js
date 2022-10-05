/* eslint-disable testing-library/no-node-access */
import React, { useState } from "react";
import Pagination from "../index";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

const AppWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [];
  for (let i = 0; i < 20; i++) {
    pages.push(i);
  }

  return (
    <Pagination
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      pages={pages}
    />
  );
};

describe("Pagination.js", () => {
  it("Is the page rendering?", () => {
    render(<AppWrapper />);
    const spanEl = document.querySelector("span");
    expect(spanEl).toBeInTheDocument();
  });
  it("Increament the selected page number after pressing the forward button", () => {
    render(<AppWrapper />);
    const nextBtn = document.querySelector(".css-15951le");
    const currentPage = document.querySelector('[color="#ffffff"]');
    expect(currentPage.textContent).toBe("1");
    fireEvent.click(nextBtn);
    const currentPageNext = document.querySelector('[color="#ffffff"]');
    expect(currentPageNext.textContent).toBe("2");
  });
  it("Opening the page that can be adjusted according to the page number", () => {
    render(<AppWrapper />);
    const clickedPage = document.getElementById("5");
    const firstPageNumber = document.querySelector('[color="#ffffff"]');
    expect(firstPageNumber.textContent).toBe("1");
    fireEvent.click(clickedPage);
    const lastPageNumber = document.querySelector('[color="#ffffff"]');
    expect(lastPageNumber.textContent).toBe("5");
  });
});

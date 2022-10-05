/* eslint-disable testing-library/no-node-access */
import React, { useEffect } from "react";
import BasketProductCard from "../index";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import store from "../../../store";
import { addProductToBasket } from "../../../store/actions";
import "@testing-library/jest-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addProductToBasket({
        tags: ["Fog", "Lake", "Water"],
        price: 9.99,
        name: "Gorgeous Water Mug",
        description:
          "perspiciatis in qui et nemo nisi ad quam consequatur et dignissimos",
        slug: "Gorgeous-Water-Mug",
        added: 1485880263998,
        manufacturer: "Boyle-LLC",
        itemType: "mug",
        id: 12,
        piece: 1,
      })
    );
  }, []);
  return <BasketProductCard />;
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("BasketProductCard.js", () => {
  it("After click the decrease button the product should be deleted", () => {
    render(<AppWrapper />);
    const buttons = document.querySelectorAll("button");
    expect(buttons[1].textContent).toBe("1");
    fireEvent.click(buttons[0]);
    const afterClickButtons = document.querySelectorAll("button");
    expect(afterClickButtons[1]).toBeFalsy();
  });
});

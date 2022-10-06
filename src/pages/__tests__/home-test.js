/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import App from "../Home";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

test("renders learn react link", () => {
  render(<AppWrapper />);
  const containerEl = document.querySelector(".css-xkn873");
  expect(containerEl).toBeInTheDocument();
});

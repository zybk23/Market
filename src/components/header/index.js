import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showBasketCard } from "../../store/actions";
import {
  HeaderBasketContainer,
  HeaderBasketText,
  HeaderContainer,
} from "./styles";

const Header = () => {
  const dispatch = useDispatch();
  const basketTotalPrice = useSelector(
    (state) => state.reducer.basketTotalPrice
  );

  const handleShowBasketCard = () => {
    dispatch(showBasketCard());
  };
  return (
    <HeaderContainer>
      <img src="images/Logo.png" alt="" />
      <HeaderBasketContainer onClick={handleShowBasketCard}>
        <img src="images/basket.png" alt="" />
        <HeaderBasketText>₺ {basketTotalPrice.toFixed(2)}</HeaderBasketText>
      </HeaderBasketContainer>
    </HeaderContainer>
  );
};

export default Header;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseProductPiece,
  decreaseProductPiece,
} from "../../store/actions";
import {
  BasketProductCardButton,
  BasketProductCardContainer,
  BasketProductCardLeftSide,
  BasketProductCardProductCount,
  BasketProductCardProductName,
  BasketProductCardProductPrice,
  BasketProductCardRightSide,
  BasketProductContainer,
} from "./styles";

const BasketProductCard = () => {
  const dispatch = useDispatch();
  const basketProducts = useSelector((state) => state.reducer.basketProducts);
  const handleIncreaseProductPiece = (product) => {
    const params = {
      productId: product.id,
      price: product.price,
    };
    dispatch(increaseProductPiece(params));
  };

  const handleDecreaseProductPiece = (product) => {
    const params = {
      decreaseProductId: product.id,
      decreasePrice: product.price,
    };
    dispatch(decreaseProductPiece(params));
  };

  return (
    <BasketProductContainer>
      {basketProducts.map((item) => (
        <BasketProductCardContainer key={item.id}>
          <BasketProductCardLeftSide>
            <BasketProductCardProductName>
              {item.name}
            </BasketProductCardProductName>
            <BasketProductCardProductPrice>
              ₺ {item.price}
            </BasketProductCardProductPrice>
          </BasketProductCardLeftSide>
          <BasketProductCardRightSide>
            <BasketProductCardButton
              onClick={() => handleDecreaseProductPiece(item)}
            >
              -
            </BasketProductCardButton>
            <BasketProductCardProductCount>
              {item.piece}
            </BasketProductCardProductCount>
            <BasketProductCardButton
              onClick={() => handleIncreaseProductPiece(item)}
            >
              +
            </BasketProductCardButton>
          </BasketProductCardRightSide>
        </BasketProductCardContainer>
      ))}
    </BasketProductContainer>
  );
};

export default BasketProductCard;

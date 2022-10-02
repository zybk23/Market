import React from "react";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../store/actions";
import alertify from "alertifyjs";
import {
  ProductAddButton,
  ProductAddButtonText,
  ProductCardContainer,
  ProductImage,
  ProductImageContainer,
  ProductName,
  ProductPrice,
} from "./styles";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();
  const handleAddProductToBasket = (selectedProduct) => {
    alertify.success("Added to basket");
    dispatch(addProductToBasket(selectedProduct));
  };
  return (
    <>
      {products.map((item) => (
        <ProductCardContainer key={item.id}>
          <ProductImageContainer>
            <ProductImage src={"images/ayi.png"} />
          </ProductImageContainer>
          <ProductPrice>{item.price}</ProductPrice>
          <ProductName>{item.name}</ProductName>
          <ProductAddButton onClick={() => handleAddProductToBasket(item)}>
            <ProductAddButtonText>Add</ProductAddButtonText>
          </ProductAddButton>
        </ProductCardContainer>
      ))}
    </>
  );
};

export default ProductCard;

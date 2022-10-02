import styled from "@emotion/styled";

const BasketProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;
  padding: 8px 0;
`;

const BasketProductCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #f4f4f4;
  margin-bottom: 16px;
`;

const BasketProductCardLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const BasketProductCardProductName = styled.p`
  display: flex;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #191919;
  margin-bottom: 4px;
`;

const BasketProductCardProductPrice = styled(BasketProductCardProductName)`
  font-weight: 600;
  color: #1ea4ce;
  margin-bottom: 0;
`;

const BasketProductCardRightSide = styled(BasketProductCardLeftSide)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BasketProductCardButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  color: #1ea4ce;
  border: none;
  font-size: 22px;
`;

const BasketProductCardProductCount = styled(BasketProductCardButton)`
  background-color: #1ea4ce;
  color: #ffffff;
  font-size: 14px;
  cursor: default;
`;

export {
  BasketProductCardButton,
  BasketProductCardContainer,
  BasketProductCardLeftSide,
  BasketProductCardProductCount,
  BasketProductCardProductName,
  BasketProductCardProductPrice,
  BasketProductCardRightSide,
  BasketProductContainer,
};

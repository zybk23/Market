import styled from "@emotion/styled";

const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1200px;
  padding: 0 104px;
  margin-top: 38px;
  @media (max-width: 1144px) {
    flex-direction: column;
  }
  @media (max-width: 816px) {
    padding: 0 24px;
  }

  @media (max-width: 696px) {
    padding: 0 8px;
  }
`;

const LayoutFilterContainer = styled(LayoutContainer)`
  flex-direction: column;
  width: 296px;
  margin-right: 16px;
  padding: 0;
  margin-top: 0;
  @media (max-width: 1144px) {
    width: 100%;
    flex-direction: row;
  }
  @media (max-width: 1012px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const LayoutBasketCardContainer = styled(LayoutFilterContainer)`
  background-color: #ffffff;
  width: 296px;
  height: auto;
  position: absolute;
  right: 104px;
  margin-right: 0;
  padding: ${(p) => p.padding};
  border: 8px solid #1ea4ce;

  @media (max-width: 1444px) {
    top: -32px;
    display: ${(p) => p.display};
  }
  @media (max-width: 1144px) {
    width: 296px;
    flex-direction: column;
  }
  @media (max-width: 816px) {
    right: 52px;
  }
  @media (max-width: 628px) {
    right: 24px;
  }
  @media (max-width: 424px) {
    right: 0;
  }
`;

const BasketTotalPriceArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const BasketTotalPriceContainer = styled(BasketTotalPriceArea)`
  align-items: center;
  justify-content: center;
  width: 92px;
  height: 51px;
  border: 2px solid #1ea4ce;
`;

const BasketTotalPriceText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #1ea4ce;
`;

const BasketWarningMessage = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

const BasketWarningIcon = styled.i`
  font-size: 24px;
  color: #ff9800;
`;

const BasketWarningText = styled.span`
  font-size: 14px;
  color: #ff9800;
  text-align: left;
  margin-left: 8px;
`;

export {
  BasketTotalPriceArea,
  BasketTotalPriceContainer,
  BasketTotalPriceText,
  BasketWarningIcon,
  BasketWarningMessage,
  BasketWarningText,
  LayoutBasketCardContainer,
  LayoutContainer,
  LayoutFilterContainer,
};

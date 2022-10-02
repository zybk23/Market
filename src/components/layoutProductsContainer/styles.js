import styled from "@emotion/styled";

const LayoutProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 908px;
  margin-right: 16px;
  padding: 0;
  margin-top: 0;
  @media (max-width: 1748px) {
    max-width: 808px;
  }
  @media (max-width: 1648px) {
    max-width: 608px;
  }
  @media (max-width: 1444px) {
    max-width: 755px;
    margin-right: 0;
  }
  @media (max-width: 1144px) {
    max-width: 100%;
    margin-right: 0;
  }
  @media (max-width: 1012px) {
    margin-top: 48px;
  }
`;

const ProductTitle = styled.p`
  display: flex;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  color: #6f6f6f;
  margin-bottom: 16px;
  text-align: left;
`;

const ProductsTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

const ProductsTabItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  background-color: ${(p) => p.bgcolor};
  border-radius: 2px;
  color: ${(p) => p.color};
  cursor: pointer;
  border: none;
`;

const ProductsContainer = styled(ProductsTabContainer)`
  width: 100%;
  flex-wrap: wrap;
  padding: 22px;
  background-color: #ffffff;
  @media (max-width: 1144px) {
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 628px) {
    justify-content: flex-start;
  }
`;

export {
  ProductTitle,
  ProductsContainer,
  ProductsTabContainer,
  ProductsTabItem,
  LayoutProductsContainer,
};

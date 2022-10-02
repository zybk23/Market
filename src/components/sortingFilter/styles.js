import styled from "@emotion/styled";

const StyledFilterContainer = styled.div`
  width: 100%;
  height: 214px;
  margin-bottom: 36px;
  @media (max-width: 1144px) {
    height: 274px;
  }
  @media (max-width: 1012px) {
    width: 50%;
  }

  @media (max-width: 628px) {
    width: 100%;
  }
`;

const StyledFilterTitle = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #697488;
  margin-bottom: 12px;
`;

const StyledFilterArea = styled(StyledFilterContainer)`
  background-color: #ffffff;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 24px;
  @media (max-width: 1012px) {
    width: 100%;
  }
`;

const StyledFilterItemsContainer = styled(StyledFilterArea)`
  margin-bottom: 18px;
  flex-direction: row;
  padding: 0;
`;

const StyledRadioButton = styled.input`
  width: 18px;
  height: 18px;
`;

const StyledFilterText = styled(StyledFilterTitle)`
  color: #525252;
  margin-bottom: 0;
  margin-left: 8px;
  align-items: flex-start;
`;

export {
  StyledFilterArea,
  StyledFilterContainer,
  StyledFilterItemsContainer,
  StyledFilterText,
  StyledFilterTitle,
  StyledRadioButton,
};

import styled from "@emotion/styled";

const StyledFilterContainer = styled.div`
  width: 100%;
  height: 274px;
  &:nth-of-type(2) {
    margin-bottom: 36px;
  }
  @media (max-width: 1144px) {
    margin-left: 12px;
  }

  @media (max-width: 1012px) {
    width: ${(p) => p.mediaWidth};
    margin-left: ${(p) => p.mediaMarginLeft};
  }
  @media (max-width: 628px) {
    width: 100%;
    margin-left: 0;
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
  @media (max-width: 1144px) {
    margin-left: 0;
  }

  @media (max-width: 1012px) {
    width: 100%;
  }
`;

const StyledFilterItemsContainer = styled(StyledFilterArea)`
  max-height: 142px;
  overflow-y: auto;
  padding: 0;
`;

const StyledSearchInput = styled.input`
  width: 248px;
  height: 36px;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  padding: 12px;
  outline: none;
  margin-bottom: 17px;
  @media (max-width: 628px) {
    width: 100%;
  }
`;

const StyledFilterItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 18px;
`;

const StyledCheckbox = styled.input`
  width: 18px;
  height: 18px;
`;

const StyledFilterText = styled(StyledFilterTitle)`
  color: #525252;
  margin-bottom: 0;
  margin-left: 8px;
`;

const StyledFilterSpan = styled(StyledFilterText)`
  color: #a8a8a8;
`;

export {
  StyledCheckbox,
  StyledFilterArea,
  StyledFilterContainer,
  StyledFilterItems,
  StyledFilterItemsContainer,
  StyledFilterSpan,
  StyledFilterText,
  StyledFilterTitle,
  StyledSearchInput,
};

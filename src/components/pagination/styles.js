import styled from "@emotion/styled";

const PaginationArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  @media (max-width: 628px) {
    margin-bottom: 20px;
    padding: 8px;
  }
`;

const PaginationContainer = styled(PaginationArea)`
  flex-direction: row;
  justify-content: space-between;
  width: 535px;
  @media (max-width: 628px) {
    width: 100%;
  }
`;

const PaginationPageNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const PaginationPrevButtonContainer = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin-right: 57px;
  @media (max-width: 628px) {
    margin-right: 27px;
  }
  @media (max-width: 512px) {
    margin-right: 8px;
  }
`;

const PaginationNextButtonContainer = styled(PaginationPrevButtonContainer)`
  margin-left: 57px;
  @media (max-width: 628px) {
    margin-left: 27px;
  }
  @media (max-width: 424px) {
    margin-left: 8px;
  }
`;

const PaginationPrevIcon = styled.i`
  font-size: 16px;
  color: ${(p) => p.color};
`;

const PaginationPrevText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(p) => p.color};
  margin-left: 7px;
`;

const PaginationPageNumber = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  padding: 12px;
  cursor: pointer;
  border: none;
  background-color: ${(p) => p.bgColor};
  color: ${(p) => p.color};
  @media (max-width: 424px) {
    padding: 8px;
  }
`;

const PaginationContinue = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const PaginationNextIcon = styled(PaginationPrevIcon)`
  color: ${(p) => p.color};
`;

const PaginationNextText = styled(PaginationPrevText)`
  color: ${(p) => p.color};
  margin-left: 0;
  margin-right: 7px;
`;

export {
  PaginationArea,
  PaginationContainer,
  PaginationContinue,
  PaginationNextButtonContainer,
  PaginationNextIcon,
  PaginationNextText,
  PaginationPageNumber,
  PaginationPageNumberContainer,
  PaginationPrevButtonContainer,
  PaginationPrevIcon,
  PaginationPrevText,
};

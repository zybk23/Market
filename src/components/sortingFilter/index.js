import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBySorting } from "../../store/actions";
import {
  StyledFilterArea,
  StyledFilterContainer,
  StyledFilterItemsContainer,
  StyledFilterText,
  StyledFilterTitle,
  StyledRadioButton,
} from "./styles";

const SortingFilter = ({ height, title, isSearch }) => {
  const dispatch = useDispatch();
  const sortingType = useSelector((state) => state.reducer.sortingType);
  const onChangeValue = (e) => {
    dispatch(filterBySorting(e.target.value));
  };
  return (
    <StyledFilterContainer height={height}>
      <StyledFilterTitle>Sorting</StyledFilterTitle>
      <StyledFilterArea value={"lowToHigh"} onChange={onChangeValue}>
        <StyledFilterItemsContainer>
          <StyledRadioButton
            type="radio"
            value="lowToHigh"
            checked={sortingType === "lowToHigh"}
            onChange={() => {}}
            name="radioFilter"
          />
          <StyledFilterText>Price low to high</StyledFilterText>
        </StyledFilterItemsContainer>
        <StyledFilterItemsContainer>
          <StyledRadioButton
            type="radio"
            value="highToLow"
            name="radioFilter"
          />
          <StyledFilterText>Price high to low</StyledFilterText>
        </StyledFilterItemsContainer>
        <StyledFilterItemsContainer>
          <StyledRadioButton type="radio" value="newToOld" name="radioFilter" />
          <StyledFilterText>New to old</StyledFilterText>
        </StyledFilterItemsContainer>
        <StyledFilterItemsContainer>
          <StyledRadioButton type="radio" value="oldToNew" name="radioFilter" />
          <StyledFilterText>Old to new</StyledFilterText>
        </StyledFilterItemsContainer>
      </StyledFilterArea>
    </StyledFilterContainer>
  );
};

export default memo(SortingFilter);

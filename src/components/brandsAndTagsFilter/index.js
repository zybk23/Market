import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";
import {
  StyledCheckbox,
  StyledFilterArea,
  StyledFilterContainer,
  StyledFilterItems,
  StyledFilterItemsContainer,
  StyledFilterSpan,
  StyledFilterText,
  StyledFilterTitle,
  StyledSearchInput,
} from "./styles";

const BrandsAndTagsFilter = ({
  height,
  inputValue,
  onChange,
  title,
  data,
  onChangeCheckbox,
  dataIds,
  placeholderText,
  mediaWidth,
  mediaMarginLeft,
}) => {
  const isTagsLoading = useSelector((state) => state.reducer.isTagsLoading);
  return (
    <StyledFilterContainer
      mediaWidth={mediaWidth}
      mediaMarginLeft={mediaMarginLeft}
      height={height}
    >
      <StyledFilterTitle>{title}</StyledFilterTitle>
      <StyledFilterArea>
        <StyledSearchInput
          value={inputValue}
          onChange={onChange}
          type="text"
          placeholder={placeholderText}
        />
        {isTagsLoading ? (
          <Circles
            type="Oval"
            color="#00BFFF"
            height={30}
            width={30}
            timeout={3000} //3 secs
          />
        ) : (
          <StyledFilterItemsContainer>
            {data.map((item) => (
              <StyledFilterItems key={item.id}>
                <StyledCheckbox
                  checked={dataIds.includes(item.id)}
                  onChange={(e) => onChangeCheckbox(e, item)}
                  type="checkbox"
                />
                <StyledFilterText>
                  {item.name
                    .slice(0, 26)
                    .replace("-", " ")
                    .replace("-", " ")
                    .replace("-", " ")}
                </StyledFilterText>
                <StyledFilterSpan>{"(" + item.count + ")"}</StyledFilterSpan>{" "}
              </StyledFilterItems>
            ))}
          </StyledFilterItemsContainer>
        )}
      </StyledFilterArea>
    </StyledFilterContainer>
  );
};

export default memo(BrandsAndTagsFilter);

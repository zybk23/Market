import React, { useState } from "react";
import {
  PaginationArea,
  PaginationContainer,
  PaginationContinue,
  PaginationNextButtonContainer,
  PaginationNextIcon,
  PaginationNextText,
  PaginationPageNumber,
  PaginationPrevButtonContainer,
  PaginationPrevIcon,
  PaginationPrevText,
} from "./styles";

const Pagination = ({ currentPage, setCurrentPage, pages }) => {
  let pageNumberLimit = 5;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(pageNumberLimit);
  const [minPageNumberLimit, setMinpageNumberLimit] = useState(0);

  const handleClickPrevButton = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
    if (currentPage - 1 === minPageNumberLimit) {
      if (minPageNumberLimit < pageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit - minPageNumberLimit);
        setMinpageNumberLimit(0);
      } else {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinpageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  };

  const handleClickNextButton = () => {
    if (currentPage === pages.length) {
      return;
    }
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 === maxPageNumberLimit) {
      if (pages.length - maxPageNumberLimit < pageNumberLimit) {
        setMaxPageNumberLimit(
          maxPageNumberLimit + (pages.length - maxPageNumberLimit)
        );
        setMinpageNumberLimit(
          minPageNumberLimit + (pages.length - maxPageNumberLimit)
        );
      } else {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinpageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  };

  const handleClickPageNumber = (selectedId) => {
    setCurrentPage(selectedId);
    if (pages.length - selectedId < pageNumberLimit) {
      setMaxPageNumberLimit(pages.length);
      setMinpageNumberLimit(pages.length - pageNumberLimit);
    } else if (selectedId < pageNumberLimit) {
      setMaxPageNumberLimit(pageNumberLimit);
      setMinpageNumberLimit(0);
    } else {
      setMaxPageNumberLimit(selectedId + 3);
      setMinpageNumberLimit(selectedId - 2);
    }
  };

  return (
    <PaginationArea>
      <PaginationContainer>
        <PaginationPrevButtonContainer
          disabled={currentPage === 1}
          onClick={handleClickPrevButton}
        >
          <PaginationPrevIcon
            color={currentPage === 1 ? "#697488" : " #1ea4ce"}
            className="fas fa-arrow-left"
          />
          <PaginationPrevText
            color={currentPage === 1 ? "#697488" : " #1ea4ce"}
          >
            Prev
          </PaginationPrevText>
        </PaginationPrevButtonContainer>
        <PaginationPageNumber
          color={currentPage === 1 ? "#ffffff" : "#697488"}
          bgColor={currentPage === 1 ? "#1EA4CE" : "transparent"}
          onClick={() => handleClickPageNumber(1)}
        >
          1
        </PaginationPageNumber>
        {minPageNumberLimit > 2 ? (
          <PaginationContinue>{"..."}</PaginationContinue>
        ) : null}

        {pages.map((item, index) => (
          <React.Fragment key={index}>
            {item > 1 &&
              item <= maxPageNumberLimit &&
              item >= minPageNumberLimit &&
              item < pages.length && (
                <PaginationPageNumber
                  id={item}
                  color={currentPage === item ? "#ffffff" : "#697488"}
                  bgColor={currentPage === item ? "#1EA4CE" : "transparent"}
                  onClick={() => handleClickPageNumber(item)}
                >
                  {item}
                </PaginationPageNumber>
              )}
          </React.Fragment>
        ))}

        {pages.length > 5 && (
          <>
            {maxPageNumberLimit !== pages.length ? (
              <PaginationContinue>{"..."}</PaginationContinue>
            ) : null}
            <PaginationPageNumber
              color={currentPage === pages.length ? "#ffffff" : "#697488"}
              bgColor={currentPage === pages.length ? "#1EA4CE" : "transparent"}
              onClick={() => handleClickPageNumber(pages.length)}
            >
              {pages.length}
            </PaginationPageNumber>
          </>
        )}

        <PaginationNextButtonContainer onClick={handleClickNextButton}>
          <PaginationNextText
            color={currentPage === pages.length ? "#697488" : " #1ea4ce"}
          >
            Next
          </PaginationNextText>
          <PaginationNextIcon
            color={currentPage === pages.length ? "#697488" : " #1ea4ce"}
            className="fas fa-arrow-right"
          />
        </PaginationNextButtonContainer>
      </PaginationContainer>
    </PaginationArea>
  );
};

export default Pagination;

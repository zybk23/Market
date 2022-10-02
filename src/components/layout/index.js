import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BasketProductCard,
  SortingFilter,
  BrandsAndTagsFilter,
  LayoutProductsContainer,
} from "../";
import {
  getAllProducts,
  filterBySelectedTags,
  filterBySelectedComponies,
  getCompanies,
  selectAllTags,
  selectAllCompanies,
} from "../../store/actions";
import {
  LayoutBasketCardContainer,
  LayoutContainer,
  LayoutFilterContainer,
  BasketTotalPriceArea,
  BasketTotalPriceContainer,
  BasketTotalPriceText,
  BasketWarningIcon,
  BasketWarningMessage,
  BasketWarningText,
} from "./styles";

const Layout = () => {
  const dispatch = useDispatch();

  const {
    tags,
    companies,
    selectedTags,
    selectedCompanies,
    basketTotalPrice,
    basketProducts,
    isShowBasket,
  } = useSelector((state) => state.reducer);

  const [tagsField, setTagsField] = useState("");
  const [tagIds, setTagIds] = useState([]);

  const [companiesField, setCompaniesField] = useState("");
  const [companyIds, setCompanyIds] = useState([]);

  const handleChangeTagsField = (e) => {
    setTagsField(e.target.value);
  };
  const handleChangeCompaniesField = (e) => {
    setCompaniesField(e.target.value);
  };

  const handleCheckTag = (e, selectedTag) => {
    dispatch(filterBySelectedTags(selectedTag));
  };
  const handleCheckCompany = (e, selectedCompany) => {
    dispatch(filterBySelectedComponies(selectedCompany));
  };

  const filteredTags = tags.filter((item) => {
    return item.name.toLowerCase().indexOf(tagsField.toLowerCase()) !== -1;
  });

  const filteredCompanies = companies.filter((item) => {
    return item.name.toLowerCase().indexOf(companiesField.toLowerCase()) !== -1;
  });

  useEffect(() => {
    const ids = [];
    selectedTags.map((item) => {
      ids.push(item.id);
    });
    setTagIds(ids);
    if (selectedTags.length === 0) {
      dispatch(selectAllTags());
    }
  }, [selectedTags, dispatch]);

  useEffect(() => {
    const ids = [];
    selectedCompanies.map((item) => {
      ids.push(item.id);
    });
    setCompanyIds(ids);
    if (selectedCompanies.length === 0) {
      dispatch(selectAllCompanies());
    }
  }, [selectedCompanies, dispatch]);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getCompanies());
  }, []);

  return (
    <LayoutContainer>
      <LayoutFilterContainer>
        <SortingFilter />
        <BrandsAndTagsFilter
          data={filteredCompanies}
          title={"Brands"}
          value={companiesField}
          onChange={handleChangeCompaniesField}
          dataIds={companyIds}
          onChangeCheckbox={handleCheckCompany}
          placeholderText={"Search brand"}
          mediaWidth={"48%"}
          mediaMarginLeft={"2%"}
        />
        <BrandsAndTagsFilter
          value={tagsField}
          onChange={handleChangeTagsField}
          data={filteredTags}
          title={"Tags"}
          dataIds={tagIds}
          onChangeCheckbox={handleCheckTag}
          placeholderText={"Search tag"}
          mediaWidth={"50%"}
          mediaMarginLeft={"0%"}
        />
      </LayoutFilterContainer>
      <LayoutProductsContainer />
      <LayoutBasketCardContainer
        padding={basketProducts.length > 0 ? "16px" : "8px"}
        display={isShowBasket ? "flex" : "none"}
      >
        {basketProducts.length > 0 ? (
          <>
            <BasketProductCard />
            <BasketTotalPriceArea>
              <BasketTotalPriceContainer>
                <BasketTotalPriceText>
                  ₺ {basketTotalPrice.toFixed(2)}
                </BasketTotalPriceText>
              </BasketTotalPriceContainer>
            </BasketTotalPriceArea>
          </>
        ) : (
          <BasketWarningMessage className="products_warning_message">
            <BasketWarningIcon className="fas fa-exclamation-circle" />
            <BasketWarningText>
              Sepetinizde ürün bulunmamaktadır{" "}
            </BasketWarningText>
          </BasketWarningMessage>
        )}
      </LayoutBasketCardContainer>
    </LayoutContainer>
  );
};

export default Layout;

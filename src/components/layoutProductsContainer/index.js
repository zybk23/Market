import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard, Pagination } from "../";
import { Circles } from "react-loader-spinner";
import {
  ProductTitle,
  ProductsContainer,
  ProductsTabContainer,
  ProductsTabItem,
  LayoutProductsContainer,
} from "./styles";

const LayoutProducts = () => {
  const [tabValue, setTabValue] = useState("mug");
  const products = useSelector((state) => state.reducer.products);
  const selectedTags = useSelector((state) => state.reducer.selectedTags);
  const selectedCompanies = useSelector(
    (state) => state.reducer.selectedCompanies
  );
  const sortingType = useSelector((state) => state.reducer.sortingType);
  const isProductLoading = useSelector(
    (state) => state.reducer.isProductLoading
  );

  const [currentPage, setCurrentPage] = useState(1);

  let itemsPerPage = 16;
  const pages = [];

  const tagsAllExist = selectedTags.find((item) => item.id === 0);
  const companiesAllExist = selectedCompanies.find((item) => item.id === 0);

  const tagNames = selectedTags.map((x) => {
    return x.name;
  });

  let filteredProducts = [...products];

  filteredProducts = filteredProducts.filter((x) => x.itemType == tabValue);

  if (sortingType === "lowToHigh") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortingType === "highToLow") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortingType === "newToOld") {
    filteredProducts = filteredProducts.sort((a, b) => a.added - b.added);
  }
  if (sortingType === "oldToNew") {
    filteredProducts = filteredProducts.sort((a, b) => b.added - a.added);
  }

  if (!tagsAllExist) {
    filteredProducts = filteredProducts.filter((x) => {
      return x.tags.some((a) => {
        return tagNames.includes(a);
      });
    });
  }
  if (!companiesAllExist) {
    filteredProducts = filteredProducts.filter((el) => {
      return selectedCompanies.find((element) => {
        return element.name == el.manufacturer;
      });
    });
  }

  for (let i = 1; i <= Math.ceil(filteredProducts.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentData = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleSelectMugTab = () => {
    setTabValue("mug");
  };

  const handleSelectShirtTab = () => {
    setTabValue("shirt");
  };

  return (
    <LayoutProductsContainer>
      <ProductTitle>Products</ProductTitle>
      <ProductsTabContainer>
        <ProductsTabItem
          onClick={handleSelectMugTab}
          bgcolor={tabValue === "mug" ? "#1ea4ce" : " #f2f0fd"}
          color={tabValue === "mug" ? "#f2f0fd" : "  #1ea4ce "}
        >
          mug
        </ProductsTabItem>
        <ProductsTabItem
          onClick={handleSelectShirtTab}
          bgcolor={tabValue === "shirt" ? "#1ea4ce" : " #f2f0fd"}
          color={tabValue === "shirt" ? "#f2f0fd" : "  #1ea4ce "}
        >
          shirt
        </ProductsTabItem>
      </ProductsTabContainer>
      <ProductsContainer>
        {isProductLoading ? (
          <Circles
            type="Oval"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        ) : (
          <ProductCard products={currentData} />
        )}
      </ProductsContainer>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </LayoutProductsContainer>
  );
};

export default LayoutProducts;

import { useEffect, useState, useMemo, useRef } from "react";
import ProductSteps from "./ProductSteps";
import { getLocally } from "../../helpers/helpers";
import { products } from "../../helpers/products2";

const ProductsPageWrapper = ({ selectedItem }) => {
  const [selectedItemInfo, setSelectedItemInfo] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (selectedItem) {
        setSelectedItemInfo(getLocally("selectedItem"));
        setStep(getLocally("step"));
      }
    }
  }, [selectedItem]);

  const getNestedProducts = (categoryId, productsArr, productSteps) => {
    const p = products.products.filter(
      (product, id) => product.categoryId == categoryId
    );
    return p;
  };

  const getPrevStep = () => {};
  // store an array of steps taken so you can simply do array-1 for stepName
  // update stepNoValue in the selectedItem path
  // build URL for next step after productsPage - always check if there's no next step before building
  // else redirect to cart

  return (
    <div>
      {selectedItem && step && (
        <ProductSteps
          stepName={step?.currStep}
          productType={selectedItem.category.title}
          stepNo={step?.stepNo}
          nestedProducts={getNestedProducts(selectedItem.category.id)}
          currStep={step?.currStep}
        />
      )}
    </div>
  );
};

export default ProductsPageWrapper;

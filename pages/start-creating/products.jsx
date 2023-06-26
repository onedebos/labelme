import ProductsPageWrapper from "../../components/steps-template/ProductsPageWrapper";
import { useState, useEffect } from "react";
import { getLocally, increaseStep, storeLocally } from "../../helpers/helpers";

const Products = () => {
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setSelectedItem(getLocally("selectedItem"));
      increaseStep("products");
    }

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen">
      <ProductsPageWrapper selectedItem={selectedItem} />
    </div>
  );
};

export default Products;

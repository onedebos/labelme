import StepsTemplate from "../../../../components/steps-template/StepsTemplate";
import { useState, useEffect } from "react";
import { getLocally } from "../../../../helpers/helpers";

const Flavor = () => {
  const [productsObject, setProductsObject] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setProductsObject(getLocally("products"));
      setSelectedItem(getLocally("selectedItem"));
    }

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen">
      <StepsTemplate
        productsObject={productsObject}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default Flavor;

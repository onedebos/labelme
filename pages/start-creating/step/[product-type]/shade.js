import StepsTemplate from "../../../../components/steps-template/StepsTemplate";
import { useState, useEffect } from "react";
import { getLocally } from "../../../../helpers/helpers";

const Shade = () => {
  const [productsObject, setProductsObject] = useState("");

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setProductsObject(getLocally("products"));
    }

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen">
      <StepsTemplate productsObject={productsObject} />
    </div>
  );
};

export default Shade;

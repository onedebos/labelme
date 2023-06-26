// import StepsTemplate from "../../../../components/steps-template/StepsTemplate";
// import { useState, useEffect } from "react";
// import { getLocally } from "../../../../helpers/helpers";

// const Products = () => {
//   const [productsObject, setProductsObject] = useState("");
//   const [selectedItem, setSelectedItem] = useState("");

//   useEffect(() => {
//     let mounted = true;
//     if (mounted) {
//       setProductsObject(getLocally("products"));
//       setSelectedItem(getLocally("selectedItem"));
//     }

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return (
//     <div className="min-h-screen">
//       <StepsTemplate
//         productsObject={productsObject}
//         selectedItem={selectedItem}
//       />
//       <pre>{JSON.stringify(selectedItem, undefined, 2)}</pre>
//     </div>
//   );
// };

// export default Products;

import ProductsPageWrapper from "../../../../components/steps-template/ProductsPageWrapper";
import { useState, useEffect } from "react";
import {
  getLocally,
  increaseStep,
  storeLocally,
} from "../../../../helpers/helpers";

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

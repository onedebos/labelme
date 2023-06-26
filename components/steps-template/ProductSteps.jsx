import { capitalize, newID, getLocally } from "../../helpers/helpers";
import NestedProduct from "./NestedProduct";
import { useRouter } from "next/router";
import { products } from "../../helpers/products2";

const ProductSteps = ({ nestedProducts, stepNo, stepName, productType }) => {
  const router = useRouter();

  const goBackUrl = () => {
    return router.back();
  };

  const getNextStep = (productId, currStep) => {
    // get the next step for a product
    const result = products.productSteps.filter(
      (productStep) => productStep.productId === productId
    );

    return result[0]?.steps[0];
  };

  const getAllProductSteps = (productId, currStep) => {
    // get the next step for a product
    const result = products.productSteps.filter(
      (productStep) => productStep.productId === productId
    );

    return result[0]?.steps;
  };

  return (
    <div className="pb-10">
      <p className="ml-5 md:mx-10 mt-10 text-md">Step {stepNo}</p>
      <p className="ml-5 md:mx-10 text-labelme-wine text-xl">
        Select Your {""}
        <span className="font-semibold">{capitalize(stepName)}</span>
      </p>

      <p className="ml-5 md:mx-10 mt-2">
        To continue building your{" "}
        <span className="font-semibold text-labelme-pink">{productType}</span>{" "}
        line.{" "}
        <button className="font-semibold text-labelme-pink" onClick={goBackUrl}>
          Go back
        </button>
      </p>

      {nestedProducts && (
        <div className="ml-5 md:mx-10 flex flex-col md:grid md:grid-cols-4 space-y-10 md:space-y-0 mt-10">
          {nestedProducts.map((nestedProduct) => (
            <NestedProduct
              imgUrl={nestedProduct.imgURL}
              description={nestedProduct.description}
              title={nestedProduct.title}
              imgAlt={nestedProduct.imgAlt}
              productType={productType}
              nextStep={getNextStep(nestedProduct.id, stepName)}
              // currStep={currStep}
              totalSteps={getAllProductSteps(nestedProduct.id)}
              id={nestedProduct.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSteps;

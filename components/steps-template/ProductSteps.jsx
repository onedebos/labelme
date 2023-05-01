import Link from "next/link";
import { capitalize } from "../../helpers/helpers";
import NestedProduct from "./NestedProduct";

const ProductSteps = ({
  nestedProducts,
  stepNo,
  stepName,
  nextStep,
  productType,
  prevStep,
  currStep,
  totalSteps,
}) => {
  return (
    <div className="pb-10">
      <p className="ml-5 md:mx-10 mt-10 text-md">Step {stepNo}</p>
      <p className="ml-5 md:mx-10  text-labelme-wine text-xl">
        Select Your {""}
        <span className="font-semibold">{capitalize(stepName)}</span>
      </p>

      <p className="ml-5 md:mx-10 mt-2">
        To continue building your{" "}
        <span className="font-semibold text-labelme-pink">
          {capitalize(productType)}
        </span>{" "}
        line.{" "}
        <Link
          href={
            prevStep == "/"
              ? "/"
              : `/start-creating/step/${productType}/${prevStep}`
          }
          className="text-labelme-pink md:ml-3 block md:inline-block"
        >
          Go back
        </Link>
      </p>

      {nestedProducts && (
        <div className="ml-5 md:mx-10 flex flex-col md:grid md:grid-cols-4 space-y-10 md:space-y-0 md:space-x-5 mt-10 grid-flow-col-dense">
          {nestedProducts.stepOptions.map((nestedProduct) => (
            <NestedProduct
              imgUrl={nestedProduct.imgURL}
              description={nestedProduct.description}
              title={nestedProduct.title}
              imgAlt={nestedProduct.imgAlt}
              nextStep={nextStep}
              productType={productType}
              currStep={currStep}
              totalSteps={totalSteps}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSteps;

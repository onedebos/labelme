import Link from "next/link";
import { capitalize, formatTitle, newID } from "../../helpers/helpers";
import NestedProduct from "./NestedProduct";
import { useRouter } from "next/router";

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
  const { prevStepNo, prevSteps } = prevStep;
  const router = useRouter();

  const goBackUrl = () => {
    return router.back();
  };

  // console.log({ prevStep, nextStep, stepNo, stepName, currStep, totalSteps });
  return (
    <div className="pb-10">
      <p className="ml-5 md:mx-10 mt-10 text-md">Step {stepNo}</p>
      <p className="ml-5 md:mx-10  text-labelme-wine text-xl">
        Select Your {""}
        <span className="font-semibold">{capitalize(stepName)}</span>
      </p>

      <p className="ml-5 md:mx-10 mt-2">
        To continue building your{" "}
        <span className="font-semibold text-labelme-pink">{productType}</span>{" "}
        line.{" "}
        {/* <Link
          href={
            prevSteps == "/"
              ? "/"
              : `/start-creating/${prevStepNo}/${formatTitle(
                  productType
                )}/${prevSteps}`
          }
          className="text-labelme-pink md:ml-3 block md:inline-block"
        >
          Go back
        </Link> */}
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
              nextStep={nextStep}
              currStep={currStep}
              totalSteps={totalSteps}
              id={newID}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSteps;

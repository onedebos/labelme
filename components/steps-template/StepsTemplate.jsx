import { useRouter } from "next/router";
import { useEffect, useState, useMemo, useRef } from "react";
import ProductSteps from "./ProductSteps";
import { capitalize } from "../../helpers/helpers";

const StepsTemplate = ({ productsObject }) => {
  const [stepContent, setStepContent] = useState("");
  const [stepNoc, setStepNoc] = useState("");
  const ref = useRef(0);
  const stepNoRef = useRef(0);
  const nextStepRef = useRef(null);
  const prevStepRef = useRef(null);
  const totalStepsRef = useRef(null);

  const router = useRouter();
  let stepName = router.asPath.split("/");
  let productType = stepName[stepName.length - 2];
  stepName = stepName[stepName.length - 1];

  const getNextStep = (steps) => {
    const totalSteps = steps?.length;
    totalStepsRef.current = totalSteps;
    const currStep = steps?.indexOf(stepName) + 1;
    let nextStep = "cart";

    if (currStep < totalSteps) {
      nextStep = steps[currStep];
    }

    nextStepRef.current = nextStep;
    return;
  };

  const getPrevStep = (steps) => {
    const currStep = steps?.indexOf(stepName) + 1;
    const stepBack = steps?.indexOf(stepName) - 1;
    let prevStep = "/";

    if (currStep - 1 == 0) {
      prevStep = "/";
    } else {
      prevStep = steps[stepBack];
    }

    prevStepRef.current = prevStep;
    return;
  };

  const getStepNo = () => {
    let stepNo;
    let stepContentObj;

    productsObject.map((product) => {
      if (product.title == capitalize(productType)) {
        getNextStep(product.steps);
        getPrevStep(product.steps);
        stepNo = product.steps.indexOf(stepName);
        stepNoRef.current = stepNo;
        setStepNoc(stepNoRef.current + 1);

        stepContentObj = product.stepContent[stepNo];
        ref.current = stepContentObj;
        setStepContent(ref.current);
      }
    });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (productsObject) {
        getStepNo();
      }
    }
  }, [productsObject, getStepNo]);

  return (
    <div>
      {productsObject && (
        <ProductSteps
          stepName={stepName}
          productType={productType}
          stepNo={stepNoc && stepNoc}
          nestedProducts={stepContent && stepContent}
          nextStep={nextStepRef.current && nextStepRef.current}
          prevStep={prevStepRef.current && prevStepRef.current}
          currStep={stepName}
          totalSteps={totalStepsRef.current && totalStepsRef.current}
        />
      )}
    </div>
  );
};

export default StepsTemplate;

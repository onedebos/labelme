import { useRouter } from "next/router";
import { useEffect, useState, useMemo, useRef } from "react";
import ProductSteps from "./ProductSteps";

const StepsTemplate = ({ productsObject, selectedItem }) => {
  const [selectedItemInfo, setSelectedItemInfo] = useState("");
  const totalStepsRef = useRef(null);

  const router = useRouter();
  let stepNoFromRouter = router.asPath.split("/");
  stepNoFromRouter = stepNoFromRouter[2];

  const getNextStep = () => {
    let nextStepNo = 0;
    let nextSteps = "";

    if (productsObject) {
      productsObject.find((product, index) => {
        if (product.title == selectedItemInfo.category) {
          const currStepNo = product.steps.indexOf(selectedItemInfo.stepName);
          nextStepNo = currStepNo + 2;

          if (nextStepNo > product.steps.length) {
            nextSteps == "cart";

            return;
          } else {
            nextSteps = product.steps[currStepNo + 1];
            return;
          }
        }
      });

      return { nextStepNo, nextSteps };
    }
  };

  const getPrevStep = () => {
    let prevStepNo = 0;
    let prevSteps = "";
    let pStep = 0;

    if (productsObject) {
      productsObject.find((product, index) => {
        if (product.title == selectedItemInfo.category) {
          const currStepNo =
            product.steps.indexOf(selectedItemInfo.stepName) + 1;

          prevStepNo = currStepNo - 1;

          if (prevStepNo == 0) {
            prevSteps == "/";
            return;
          } else if (currStepNo > 0) {
            prevSteps = product.steps[prevStepNo - 1];
            pStep = prevStepNo - 1;
            return;
          }
        }
      });

      return { prevStepNo, prevSteps };
    }
  };

  const getSelectedItemInfo = () => {
    const item = selectedItem["step" + stepNoFromRouter + "Content"];
    setSelectedItemInfo(item);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (selectedItem) {
        getSelectedItemInfo();
      }
    }
  }, [selectedItem]);

  console.log({ selectedItemInfo, productsObject, selectedItem });

  return (
    <div>
      {selectedItem && (
        <ProductSteps
          stepName={selectedItemInfo.stepName ? selectedItemInfo.stepName : ""}
          productType={selectedItemInfo.category && selectedItemInfo.category}
          stepNo={selectedItemInfo.stepNo}
          nestedProducts={selectedItemInfo.stepOptions}
          nextStep={getNextStep()}
          prevStep={getPrevStep()}
          currStep={selectedItemInfo.stepName}
          totalSteps={totalStepsRef.current && totalStepsRef.current}
        />
      )}
    </div>
  );
};

export default StepsTemplate;

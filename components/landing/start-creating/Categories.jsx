import CategoryItems from "./CategoryItems";
import { increaseStep, newID, storeLocally } from "../../../helpers/helpers";
import { products } from "../../../helpers/products2";
import { useEffect } from "react";

const StartCreatingProducts = () => {
  useEffect(() => {
    storeLocally("products", products);
    increaseStep("category");
  }, [products]);

  return (
    <div id="start-creating" className="py-10 mx-10 md:mx-20">
      <h1 className="text-labelme-wine text-2xl md:text-3xl font-semibold">
        Start Creating.
      </h1>
      <p className="mt-1 md:mt-3">Select a Product to get started.</p>

      <div className="flex flex-col md:grid md:grid-cols-4 space-y-10 md:space-y-0 md:space-x-5 mt-10 grid-flow-col-dense">
        {products?.categories.map((category, id) =>
          products.categorySteps.map((categoryStep, id) => {
            if (category.id == categoryStep.categoryId) {
              return (
                <div key={newID()}>
                  <CategoryItems
                    title={category.title}
                    description={category.description}
                    imgAlt={category.title}
                    imgUrl={category.imgUrl}
                    nextStep={categoryStep.steps[0]}
                    id={category.id}
                  />
                </div>
              );
            }
          })
        )}
      </div>
    </div>
  );
};

export default StartCreatingProducts;

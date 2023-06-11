// LABEL ME WEBSITE

// Front page

// BODY CARE
// Body scrub➡️ Choose your jar, pick your scrub, label type,submit your logo and design.
// Body butter
// Body oil
// Hand cream

// HAIR CARE
// Hair oil➡️ Choose your bottle, pick your oil, label type,submit your logo and design
// Hair conditioner
// Hair shampoo
// Beard oil
// Beard butter

// HOME CARE
// scented candles➡️ Choose your Jar, pick your candle, Submit your logo and design.
// Reed diffusers
// Room spray
// Liquid wash
// Hand wash
// Toilet cleaner

import SCItems from "./SCItems";
import { newID, storeLocally } from "../../../helpers/helpers";
import { products } from "../../../helpers/products";
import { useEffect } from "react";

const StartCreatingProducts = () => {
  useEffect(() => {
    storeLocally("products", products);
  }, [products]);

  return (
    <div id="start-creating" className="py-10 mx-10 md:mx-20">
      <h1 className="text-labelme-wine text-2xl md:text-3xl font-semibold">
        Start Creating.
      </h1>
      <p className="mt-1 md:mt-3">Select a Product to get started.</p>

      <div className="flex flex-col md:grid md:grid-cols-4 space-y-10 md:space-y-0 md:space-x-5 mt-10 grid-flow-col-dense">
        {products.map((product, key) => (
          <div key={key}>
            <SCItems
              title={product.title}
              description={product.description}
              imgAlt={product.alt}
              imgUrl={product.imgUrl}
              // buyLink={product.buyLink}
              nextStep={product.steps[0]}
              stepContent={product.stepContent}
              stepNo={1}
              step1Content={product.stepContent[0] && product.stepContent[0]}
              step2Content={product.stepContent[1] && product.stepContent[1]}
              step3Content={product.stepContent[2] && product.stepContent[2]}
              step4Content={product.stepContent[3] && product.stepContent[3]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartCreatingProducts;

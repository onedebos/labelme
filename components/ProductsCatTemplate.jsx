import StepsTemplate from "./steps-template/StepsTemplate";
import { useState, useEffect } from "react";
import { getLocally } from "../helpers/helpers";
import { products } from "../helpers/products2";
import { useRouter } from "next/router";

const Jar = () => {
  const [productsObject, setProductsObject] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  // get page we're on using router
  const router = useRouter();
  let path = router.asPath.split("/");
  path = path[path.length - 1];

  // load content for the current page

  // use the page we're on and compare to totalSteps to
  // route user to next page
  const getNextStep = () => {
    const currPgIndex = selectedItem.product.totalSteps.indexOf(path);

    if (currPgIndex <= selectedItem.product.totalSteps.length - 1) {
      return selectedItem.product.totalSteps[currPgIndex + 1];
    } else return "cart";
  };

  // save selectedItem before routing user to nextPage
  const addToCartItemAndSelectedItem = () => {};

  // if we're at the end, redirect to cart

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
      {console.log({ selectedItem })}
      {/* <StepsTemplate
        productsObject={productsObject}
        selectedItem={selectedItem}
      /> */}
    </div>
  );
};

export default Jar;

import { useState, useEffect } from "react";
import { CldUploadButton } from "next-cloudinary";
import { useStore } from "../helpers/store";
import AddToCart from "../components/cart/AddToCart";
import { useForm } from "react-hook-form";
import { AiFillPlusCircle } from "react-icons/ai";
import { getLocally, storeLocally } from "../helpers/helpers";
import { newID } from "../helpers/helpers";

const cart = ({ signedIn }) => {
  const { cartItem, addToCart } = useStore();
  const { register, handleSubmit } = useForm();
  const [logoUploadSuccess, setLogoUploadSuccess] = useState(false);
  const [addtoCartSuccess, setAddtoCartSuccess] = useState(false);

  const handleAddItemToCart = (data) => {
    const itemForCart = {
      product: cartItem.productType,
      packagingTitle: cartItem.packagingTitle,
      packagingImgUrl: cartItem.packagingImgUrl,
      shadeTitle: cartItem.shadeTitle,
      shadeImgUrl: cartItem.shadeImgUrl,
      flavorTitle: cartItem.flavorTitle,
      flavorImgUrl: cartItem.flavorImgUrl,
      logoURL: logoUploadSuccess.logoURL,
      id: newID(),
      // designURL: ,
      orderQty: data.orderQty,
    };
    console.log({ data });

    // if user is not signedIn, save to cart then save cart to Local
    if (!signedIn) {
      let currentCartArr = getLocally("cart") ? getLocally("cart") : [];

      currentCartArr.push(itemForCart);
      storeLocally("cart", currentCartArr);
      addToCart(currentCartArr);
      setAddtoCartSuccess(true);
    }

    // if logged in, save to firebase
  };

  const getLogoURL = (result, widget) => {
    if (result.info.url)
      setLogoUploadSuccess({ sucess: true, logoURL: result.info.url });
    return result.info.url;
  };

  return (
    <div className="min-h-screen">
      {cartItem?.productType && (
        <AddToCart
          stepNo={cartItem.totalSteps + 1}
          productType={cartItem.productType}
          shadeImgUrl={cartItem.shadeImgUrl}
          packagingImgUrl={cartItem.packagingImgUrl}
          flavorImgUrl={cartItem.flavorImgUrl}
          packagingTitle={cartItem.packagingTitle}
          shadeTitle={cartItem.shadeTitle}
          flavorTitle={cartItem.shadeTitle}
          register={register}
          handleSubmit={handleSubmit(handleAddItemToCart)}
          logoUploadSuccess={logoUploadSuccess.sucess}
          addtoCartSuccess={addtoCartSuccess}
        >
          <CldUploadButton
            className="bg-labelme-pink text-white px-10 py-4 flex rounded-md mt-3 w-full mx-auto md:max-w-full items-center justify-center"
            onUpload={getLogoURL}
            uploadPreset="labelme"
          >
            Upload Your Logo
            <AiFillPlusCircle color="text-labelme-wine" className="ml-2 mt-1" />
          </CldUploadButton>
        </AddToCart>
      )}

      {/* <pre>{JSON.stringify(cartItem, null, 2)}</pre> */}
    </div>
  );
};

export default cart;

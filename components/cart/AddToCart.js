import { capitalize } from "../../helpers/helpers";
import Image from "next/image";
import Button from "../assets/Button";
import Link from "next/link";

const AddToCart = ({
  cartItem,
  stepNo,
  productType,
  packagingImgUrl,
  packagingTitle,
  shadeImgUrl,
  shadeTitle,
  flavorImgUrl,
  register,
  handleSubmit,
  logoUploadSuccess,
  children,
  addtoCartSuccess,
}) => {
  return (
    <div className="pb-10 mx-6 md:ml-10 md:mx-10">
      <p className="mt-10 text-md">Step {stepNo}</p>
      <p className="text-labelme-wine text-xl">Select Qty and Add to Cart</p>

      <p className="mt-2">
        To continue building your{" "}
        <span className="font-semibold text-labelme-pink">
          {capitalize(productType)}
        </span>{" "}
        line.{" "}
      </p>

      <div className="flex flex-col md:flex-row mt-3">
        <div className="flex space-x-3">
          {packagingImgUrl && (
            <div>
              <Image
                src={packagingImgUrl}
                width={300}
                height={300}
                className="rounded-md"
                priority={true}
              />
              <p className="max-w-xs">
                <span className="font-bold">
                  {packagingTitle}
                  {""}
                </span>{" "}
              </p>
            </div>
          )}

          {shadeImgUrl && (
            <div>
              <Image
                src={shadeImgUrl}
                width={300}
                height={300}
                className="rounded-md"
                priority={true}
              />
              <p className="max-w-xs">
                <span className="font-bold">
                  {shadeTitle}
                  {""}
                </span>{" "}
              </p>
            </div>
          )}
          <div></div>
        </div>
        <div className="md:mx-4 md:px-4 md:py-4 max-w-xs md:max-w-full">
          <p className="text-xl font-bold mt-4 md:mt-0"></p>

          <div className="flex flex-col">
            <p className="font-medium mt-2 ">Enter Qty. (No of pieces)</p>
            <input
              type="number"
              placeholder={"0"}
              {...register("orderQty")}
              name="orderQty"
              id="orderQty"
              required
              defaultValue={1}
              className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-labelme-wine"
            />
          </div>

          <div className="mt-10">
            {children}

            <small>{logoUploadSuccess && "Upload Successful"}</small>
          </div>
          <Button
            onClick={handleSubmit}
            otherStyles={"bg-black text-white w-full text-white mt-2 py-2"}
          >
            Add to Cart
          </Button>

          <p className="text-green-800">
            {addtoCartSuccess && "Added to Cart!"}
          </p>

          <div className="mt-4">
            <Link className="text-labelme-pink" href={"/checkout"}>
              Continue to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;

import Image from "next/image";
import Link from "next/link";
import { capitalize } from "../../helpers/helpers";
import { BsDot } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
import { newID } from "../../helpers/helpers";

const Checkout = ({ cart, handleRemoveFromCartAtCheckout }) => {
  return (
    <div className="pb-10 mx-6 md:ml-10 md:mx-10">
      <p className="mt-10 text-md">Checkout </p>
      <p className="text-labelme-wine text-xl">See What's in your Cart</p>
      <div className="">
        <Link className="text-labelme-pink" href="/">
          Continue Shopping
        </Link>
      </div>

      {console.log(cart)}

      <div className="mt-5 rounded-lg">
        {cart.length < 1 && (
          <div>
            {" "}
            <p className="font-bold text-lg">No items in Bag.</p>
            {/* <div className="mt-3">
              <Link className="text-labelme-pink" href="/">
                Click here to Start Shopping
              </Link>
            </div> */}
          </div>
        )}

        {/* If there are items in the cart */}
        {cart.length > 0 && (
          <div className="md:max-w-full md:w-full md:grid grid-cols-2 gap-6">
            {cart.map((c) => (
              <div
                key={newID()}
                className="flex space-x-3 md:grid md:grid-cols-3 mt-3 md:items-center border py-2 px-2 rounded-md"
              >
                <div className="col-span-1">
                  <Image
                    alt={c.packagingTitle}
                    src={c.packagingImgUrl}
                    width={200}
                    height={100}
                    className="rounded-md mr-4"
                    priority={true}
                  />
                </div>
                <div className="col-span-2 mt-1">
                  <p className="text-lg md:text-2xl font-bold">
                    {capitalize(c.product)}
                  </p>

                  <p className="text-gray-600 md:inline-block block">
                    <span>
                      <span className="font-bold">Qty:</span> {c.orderQty}{" "}
                      Piece(s)
                    </span>

                    {c.packagingTitle && (
                      <span className="md:inline-block block md:mx-2">
                        <BsDot className="hidden md:inline-block" />
                        <span className="font-bold">Packaging:</span>{" "}
                        {c.packagingTitle}
                      </span>
                    )}

                    {c.shadeTitle && (
                      <span className="md:inline-block block md:mx-2">
                        <BsDot className="hidden md:inline-block" />
                        <span className="font-bold">Shade:</span> {c.shadeTitle}
                      </span>
                    )}

                    {c.flavorTitle && (
                      <span className="md:inline-block block md:mx-2">
                        <BsDot className="hidden md:inline-block" />

                        <span>
                          <span className="font-bold">Flavor:</span>{" "}
                          {c.flavorTitle}
                        </span>
                      </span>
                    )}

                    {c.labelTitle && (
                      <span className="md:inline-block block md:mx-2">
                        <BsDot className="hidden md:inline-block" />
                        <span className="font-bold">Label:</span> {c.labelTitle}
                      </span>
                    )}
                  </p>
                  <button
                    onClick={() => handleRemoveFromCartAtCheckout(c.id)}
                    className="mt-3 text-red-700 block text-sm md:text-base"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="flex flex-col md:flex-row gap-3 mt-5 md:mt-10 ">
            <button className="bg-labelme-wine text-white px-10 md:py-2 rounded-md flex justify-center items-center gap-2 text-center py-3">
              Confirm and Pay
              <span>
                <AiFillCaretRight className="text-labelme-pink-lighter" />
              </span>
            </button>

            <Link
              href="/"
              className="bg-labelme-wine text-white text-center px-10 md:py-2 rounded-md flex justify-center items-center gap-2 py-3"
            >
              Continue Shopping
              <span>
                <AiFillCaretRight className="text-labelme-pink-lighter" />
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;

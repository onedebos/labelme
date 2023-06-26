import { TbMathGreater } from "react-icons/tb";
import Image from "next/image";
import {
  capitalize,
  formatTitle,
  getLocally,
  storeLocally,
} from "../../helpers/helpers";
import { useRouter } from "next/router";
import Button from "../assets/Button";
import { useStore } from "../../helpers/store";
import Link from "next/link";

const NestedProduct = ({
  title,
  imgUrl,
  imgAlt,
  description,
  nextStep,
  totalSteps,
  id,
}) => {
  const router = useRouter();
  const { cart, addToCart, cartItem, addCartItem } = useStore();

  const buildCartItem = (object) => {
    addCartItem(object);
    const { category } = getLocally("selectedItem");

    const product = { object, totalSteps };

    storeLocally("selectedItem", { category, product: product });
  };

  return (
    <div key={id}>
      {!imgUrl ? (
        <div className="h-40 w-40 bg-gray-600 text-center"></div>
      ) : (
        <div>
          <Image
            className="rounded-md"
            priority={true}
            src={imgUrl}
            alt={imgAlt}
            width={300}
            height={300}
            layout=""
          />{" "}
        </div>
      )}
      <p className="mt-4 font-medium text-xl">{capitalize(title)}</p>
      <p className="mt-4 max-w-xs md:mr-16 text-clip">{description}</p>
      <div className="mt-4 md:mb-10 md:max-w-xs">
        <Link
          onClick={() =>
            buildCartItem({
              stepName: "product",
              id,
              title,
              imgUrl,
              description,
            })
          }
          href={`/start-creating/1/1/${nextStep}`}
          // href={"#"}
        >
          Continue with {capitalize(title)}{" "}
        </Link>
        {/* <Button
          // onClick={() => goToNextStep(productType, nextStep, stepNo)}
          onClick={() => goToNextStep()}
          otherStyles={`bg-labelme-wine hover:bg-labelme-pink transition ease-in-out text-white rounded-lg justify-center md:justify-start md:py-2 md:pl-6 flex items-center max-w-xs md:w-full md:mr-14 `}
        >
          Continue with {capitalize(title)}{" "}
        
        </Button> 
        */}
      </div>
    </div>
  );
};

export default NestedProduct;

import { TbMathGreater } from "react-icons/tb";
import Image from "next/image";
import { capitalize, formatTitle } from "../../helpers/helpers";
import { useRouter } from "next/router";
import Button from "../assets/Button";
import { useStore } from "../../helpers/store";

const NestedProduct = ({
  title,
  imgUrl,
  imgAlt,
  description,
  currStep,
  nextStep,
  productType,
  totalSteps,
  id,
}) => {
  const router = useRouter();
  const { cart, addToCart, cartItem, addCartItem } = useStore();

  const addOrUpdateCartItem = () => {
    let packagingTitle;
    let packagingDescription;
    let shadeTitle;
    let shadeDescription;
    let labelTitle;
    let labelDescription;
    let flavorTitle;
    let flavorDescription;

    let oldObj = { ...cartItem };

    if (oldObj.productType !== productType) {
      oldObj = {};
    }

    switch (currStep) {
      case "packaging":
        packagingTitle = title;
        packagingDescription = description;
        addCartItem({
          ...oldObj,
          packagingTitle,
          packagingDescription,
          productType,
          totalSteps,
          packagingImgUrl: imgUrl,
          packagingImgAlt: imgAlt,
        });
        break;
      case "label":
        labelTitle = title;
        labelDescription = description;
        addCartItem({
          ...oldObj,
          labelTitle,
          labelDescription,
          productType,
          totalSteps,
          labelImgUrl: imgUrl,
          labelImgAlt: imgAlt,
        });
        break;

      case "shade":
        shadeTitle = title;
        shadeDescription = description;
        addCartItem({
          ...oldObj,
          shadeTitle,
          shadeDescription,
          productType,
          totalSteps,
          shadeImgUrl: imgUrl,
          shadeImgAlt: imgAlt,
        });
        break;
      case "flavor":
        flavorTitle = title;
        flavorDescription = description;
        addCartItem({
          ...oldObj,
          flavorTitle,
          flavorDescription,
          productType,
          totalSteps,
          flavorImgUrl: imgUrl,
          flavorImgAlt: imgAlt,
        });
        break;

      default:
        break;
    }

    console.log({ cartItem });
  };

  const goToNextStep = () => {
    const { nextStepNo, nextSteps } = nextStep;

    console.log({ nextStepNo, nextSteps, productType });

    if (nextSteps != "") {
      router.push(
        `/start-creating/${nextStepNo}/${formatTitle(productType)}/${nextSteps}`
      );
    } else {
      router.push("/cart");
    }

    addOrUpdateCartItem();
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
        <Button
          // onClick={() => goToNextStep(productType, nextStep, stepNo)}
          onClick={() => goToNextStep()}
          otherStyles={`bg-labelme-wine hover:bg-labelme-pink transition ease-in-out text-white rounded-lg justify-center md:justify-start md:py-2 md:pl-6 flex items-center max-w-xs md:w-full md:mr-14 `}
        >
          Continue with {capitalize(title)}{" "}
          {/* <TbMathGreater size={"1em"} className="ml-2" /> */}
        </Button>
      </div>
    </div>
  );
};

export default NestedProduct;

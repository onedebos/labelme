import LinkButton from "../../assets/LinkButton";
import { TbMathGreater } from "react-icons/tb";
import Image from "next/image";

const SCItems = ({
  title,
  imgUrl,
  imgAlt,
  description,
  buyLink,
  nextStep,
  stepContent,
}) => {
  const formatTitle = (str) => {
    return str.split(" ").join("-").toLowerCase();
  };
  return (
    <div>
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
            height={10}
            layout=""
          />{" "}
        </div>
      )}
      <p className="mt-4 font-medium text-xl">{title}</p>
      <p className="mt-4 max-w-xs md:mr-16">{description}</p>
      <div className="mt-4 md:max-w-xs">
        <LinkButton
          href={{
            pathname: `/start-creating/step/${formatTitle(title)}/${nextStep}`,
          }}
          classnames={`bg-labelme-wine hover:bg-labelme-pink transition ease-in-out text-white rounded-lg py-5 justify-center md:justify-start md:py-2 md:pl-6 flex items-center max-w-xs md:mr-14`}
        >
          Start a {title} Line
        </LinkButton>
      </div>
    </div>
  );
};

export default SCItems;

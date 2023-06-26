import { storeLocally, newID } from "../../../helpers/helpers";
import LinkButton from "../../assets/LinkButton";
import Image from "next/image";

const SCItems = ({ title, description, imgUrl, imgAlt, nextStep, id }) => {
  const formatTitle = (str) => {
    return str.split(" ").join("-").toLowerCase();
  };

  const saveSelectedItem = () => {
    storeLocally("selectedItem", {
      category: { id, title, description, imgUrl },
    });
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
            alt={imgAlt && imgAlt}
            width={300}
            height={10}
            layout=""
          />{" "}
        </div>
      )}
      <div className="md:h-40">
        <p className="mt-4 font-medium text-xl">{title}</p>
        <p className="mt-4 max-w-xs md:mr-16">{description}</p>
      </div>
      <div className="mt-4 md:max-w-xs">
        <LinkButton
          href={{
            pathname: `/start-creating/${nextStep}`,
          }}
          classnames={`bg-labelme-wine hover:bg-labelme-pink transition ease-in-out text-white rounded-lg justify-center md:justify-start md:py-2 md:pl-6 flex items-center max-w-xs md:mr-14`}
          onClick={saveSelectedItem}
        >
          {/* Start a  */}
          {title} Line
        </LinkButton>
      </div>
    </div>
  );
};

export default SCItems;

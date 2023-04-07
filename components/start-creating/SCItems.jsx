import Link from "next/link";
import { TbMathGreater } from "react-icons/tb";
import Image from "next/image";
import LipglossImg from "../../public/home/lipgloss.png";

const SCItems = ({ title, imgUrl, imgAlt, description, buyLink }) => {
  return (
    <div>
      {!imgUrl ? (
        <div className="h-40 w-40 bg-gray-600 text-center"></div>
      ) : (
        <div>
          <Image
            className="rounded-md"
            priority={true}
            src={LipglossImg}
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
        <Link
          href={buyLink}
          className={`bg-labelme-wine hover:bg-labelme-pink transition ease-in-out text-white rounded-lg py-3 justify-center md:justify-start md:py-2 md:pl-6 flex items-center max-w-xs md:mr-14`}
        >
          Start a {title} Line <TbMathGreater size={"1em"} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default SCItems;

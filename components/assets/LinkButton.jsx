import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";

const LinkButton = ({ classnames, href, children }) => {
  return (
    <Link
      href={href}
      className={`bg-labelme-wine text-white px-10 md:py-2 rounded-md flex items-center gap-2 text-center ${classnames} py-3 justify-center`}
    >
      {children}
      <span>
        <AiFillCaretRight className="text-labelme-pink-lighter" />
      </span>
    </Link>
  );
};

export default LinkButton;

import { AiFillCaretRight } from "react-icons/ai";

const Button = ({ children, otherStyles, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white px-10 md:py-2 rounded-md flex items-center justify-center gap-2 text-center bg-labelme-wine ${otherStyles} py-3 `}
    >
      {children}
      <span>
        <AiFillCaretRight className="text-labelme-pink-lighter" />
      </span>
    </button>
  );
};

export default Button;

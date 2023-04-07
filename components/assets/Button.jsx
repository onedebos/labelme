const Button = ({ text, otherStyles, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg py-2 px-2 ${otherStyles}`}
    >
      {text}
    </button>
  );
};

export default Button;

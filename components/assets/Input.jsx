const Input = ({ placeholder, classes, id, type }) => {
  return (
    <div>
      <input
        id={id}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${classes}`}
        type={type}
      />
    </div>
  );
};

export default Input;

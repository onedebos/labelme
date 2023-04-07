const Dropdown = ({
  labelFor,
  selected,
  option1,
  option1Val,
  option2,
  option2Val,
  option3,
  option3Val,
  option4,
  option4Val,
  option5,
  option5Val,
}) => {
  return (
    <div>
      <select
        id={labelFor}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-labelme-wine focus:border-labelme-wine block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-labelme-wine dark:focus:border-labelme-wine"
        defaultValue={selected}
      >
        {/* <option selected>{selected}</option> */}
        {option1Val && <option value={option1Val}>{option1}</option>}
        {option2Val && <option value={option2Val}>{option2}</option>}
        {option3Val && (
          <option value={option3Val && option3Val}>{option3 && option3}</option>
        )}
        {option4Val && (
          <option value={option4Val && option4Val}>{option4 && option4}</option>
        )}
        {option5Val && (
          <option value={option5Val && option5Val}>{option5 && option5}</option>
        )}
      </select>
    </div>
  );
};

export default Dropdown;

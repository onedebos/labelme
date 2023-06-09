import Button from "../../assets/Button";
import Dropdown from "../../assets/Dropdown";

const FormBackgroundImage = () => {
  const onClickFn = () => {
    console.log("Start selling");
  };
  return (
    <div className="relative w-full bg-labelme-wine md:bg-white">
      {/* Full-width background image */}
      <div className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-img" />

      {/* Form container */}
      <div className="z-10 flex flex-col justify-center md:px-8 md:py-6 mx-auto lg:px-8 lg:py-8 pb-14 md:pb-0">
        <div>
          <div className="md:max-w-sm bg-labelme-wine text-white md:text-black md:bg-white opacity-95 md:p-4 rounded-lg md:ml-10 mt-[10%] md:py-10 md:px-6 px-5">
            <p className="text-white md:text-labelme-wine font-bold md:mt-3 text-3xl md:text-xl">
              Start your Beauty Business from anywhere.{" "}
            </p>

            <p className="font-md mt-5">Select a Product</p>
            <Dropdown
              selected={"Beauty"}
              option1={"Lip-gloss"}
              option1Val={"beauty"}
              option2={"Body"}
              option2Val={"body"}
              option3={"Hair Care"}
              option3Val={"haircare"}
              option4={"Home care"}
              option4Val={"homecare"}
            />
            <p className="font-md mt-5">When do you want to launch?</p>
            <Dropdown
              selected={"Within 3 Days"}
              option1={"Within 7 Days"}
              option1Val={"Within 7 Days"}
            />
            <button
              className={`text-white px-10 md:py-2 rounded-md flex items-center justify-center gap-2 text-center mt-5 w-full  text-bold bg-labelme-pink md:bg-labelme-wine py-3 `}
              type={"submit"}
              onClick={onClickFn}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBackgroundImage;

import Image from "next/image";
import Dropdown from "../assets/Dropdown";
import Button from "../assets/Button";

const Home = () => {
  return (
    <div className="bg-img">
      <div>
        <div className="max-w-sm bg-white p-4 rounded-lg ml-10 mt-[10%] py-10 px-6">
          <p className="text-labelme-wine font-bold mt-3 text-xl">
            Start your Beauty Brand from anywhere.{" "}
          </p>

          <p className="font-md mt-5">Select your Product</p>
          <Dropdown
            selected={"Lipgloss"}
            option1={"Lip-gloss"}
            option1Val={"Lip-gloss"}
          />
          <p className="font-md mt-5">When do you want to launch?</p>
          <Dropdown
            selected={"Within 3 Days"}
            option1={"Within 7 Days"}
            option1Val={"Within 7 Days"}
          />
          <Button otherStyles={"mt-5 text-center"} text="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Home;

import Image from "next/image";
import Woman from "../../public/home/woman.png";

const HowItWorks = () => {
  return (
    <div className="flex flex-col justify-between md:space-x-32 md:flex-row mt-24 mx-auto">
      <div className="mt-14 hidden md:block md:mt-0">
        <Image className="rounded-md" height={610} src={Woman} />
      </div>
      <div className="md:ml-30 mx-10 md:mx-0">
        <p className="text-labelme-wine text-4xl md:text-4xl space-y-10 font-semibold">
          How it Works
          <span className="block text-labelme-pink max-w-sm text-lg md:text-xl font-medium">
            3 simple steps to Launch your{" "}
            <span className="block md:inline-block">own line.</span>
          </span>{" "}
        </p>

        <div className="border-labelme-pink border rounded-md py-2 px-3 mt-5">
          <p className="text-2xl">Choose Your Product</p>
          <p className="text-gray-600">E.g Lipgloss or Lip Balms</p>
        </div>

        <div className="bg-labelme-pink-lighter rounded-md py-2 px-3 mt-5">
          <p className="text-2xl text-labelme-wine">Select Your Shade</p>
          <p className="text-gray-600">Choose from over 40 different shades</p>
        </div>

        <div className="border-labelme-pink border rounded-md py-2 px-3 mt-5">
          <p className="text-2xl">Submit your Logo</p>
          <p className="text-gray-600">
            Send us your logo or we design one for you
          </p>
        </div>

        <div className="bg-labelme-pink-lighter rounded-md py-2 px-3 mt-5">
          <p className="text-2xl text-labelme-wine">Confirm and Pay</p>
          <p className="text-gray-600">Make your payment Securely</p>
        </div>

        <div className="border-labelme-pink border rounded-md py-2 px-3 mt-5">
          <p className="text-2xl">Track Your Order</p>
          <p className="text-gray-600">Watch as we process your order.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

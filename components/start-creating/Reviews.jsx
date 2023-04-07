import Image from "next/image";
import Review from "../../public/home/review1.png";

const Reviews = () => {
  return (
    <div className="w-full mt-10 py-20 flex bg-labelme-pink-lighter items-center flex-col">
      <h2 className="text-labelme-wine text-3xl ml-10 md:ml-0 md:text-4xl font-bold">
        Over 100 Customers served{" "}
        <span className="md:italic">across 40+ countries. </span>
      </h2>
      <p className="text-2xl md:text-3xl mt-5">Here’s why they trust us</p>

      <div className="flex flex-col md:flex-row mt-5 md:space-x-3 mx-10 md:mx-0">
        <Image src={Review} />
        <Image src={Review} />
        <Image src={Review} />
      </div>
    </div>
  );
};

export default Reviews;

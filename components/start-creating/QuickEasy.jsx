import Image from "next/image";
import Woman from "../../public/home/woman.png";

const QuickEasy = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row mt-24 mx-5 md:mx-auto">
      <div>
        <p className="text-labelme-pink text-6xl md:text-8xl space-y-10 ml-10 md:ml-20">
          Quick.{" "}
          <span className="text-gray-800 block md:inline-block mt-10">
            Easy.
          </span>
          <span className="block text-labelme-wine">Reliable.</span>{" "}
        </p>

        <p className="md:ml-20 ml-5 mt-10 text-2xl md:max-w-sm">
          <span className="text-labelme-pink font-medium">Launch</span> your
          brand without Shipping from China.
        </p>
        <p className="md:ml-20 mt-10 text-xl md:max-w-sm ml-5">
          Get all the support you need to launch your own private labelling
          brand, from production, to packaging so you can live your dreams.
        </p>
      </div>

      <div className="md:mx-20 mt-14 md:mt-0">
        <Image className="rounded-md" height={610} src={Woman} />
      </div>
    </div>
  );
};

export default QuickEasy;

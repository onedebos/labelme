import Button from "../../assets/Button";

const StartBusiness = () => {
  return (
    <div className="w-full start-business mt-10 py-20 md:py-0 md:pb-20">
      <div className="flex flex-col justify-center items-center text-center md:px-8 md:py-6 md:mx-auto lg:px-8 lg:py-8 pb-14 md:pb-0">
        <h1 className="text-3xl md:text-5xl font-bold pt-20 text-labelme-wine">
          Start a Beauty Business{" "}
          <span className="block mt-3 md:mt-8"> from anywhere.</span>
        </h1>
        <p className="mt-10 text-xl md:text-2xl">
          With well-tested, quality and vegan products
        </p>
        <Button
          otherStyles={
            "bg-labelme-wine text-center text-white w-full max-w-xs hover:bg-labelme-pink transition ease-in-out mt-10"
          }
        >
          Launch Your Line
        </Button>
      </div>
    </div>
  );
};

export default StartBusiness;

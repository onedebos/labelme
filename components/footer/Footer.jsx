const Footer = () => {
  return (
    <footer className="flex flex-col-reverse md:flex-row md:h-24 w-full md:justify-between md:items-center bg-labelme-pink-lighter text-labelme-wine font-medium md:px-40 py-10 md:py-0 px-5 space-y-3">
      <div className="mt-5 md:mt-0">
        <p>(c) 2022, LabelMe Africa</p>
        <p className="md:hidden">Soluyi, Gbagada, Lagos</p>
      </div>

      <div className="hidden md:block">
        <p>Soluyi, Gbagada, Lagos</p>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-5">
        <div>Terms</div>
        <div>Privacy</div>
        <div>Contact</div>
      </div>
    </footer>
  );
};

export default Footer;

import SCItems from "./SCItems";

const StartCreating = () => {
  const items = [
    {
      title: "Lip-gloss",
      description:
        "Choose from over 40 lipgloss shades and flavors to create a unique expeirence or your customers.",
      imgUrl: "../../public/home/lipgloss.png",
      buyLink: "",
    },

    {
      title: "Lip-scrub",
      description:
        "Choose from over 40 lipgloss shades and flavors to create a unique expeirence or your customers.",
      imgUrl: "../../public/home/lipgloss.png",
      buyLink: "",
    },

    {
      title: "Lip-balm",
      description:
        "Choose from over 40 lipgloss shades and flavors to create a unique expeirence or your customers.",
      imgUrl: "../../public/home/lipgloss.png",
      buyLink: "",
    },

    {
      title: "Eyeliner",
      description:
        "Choose from over 40 lipgloss shades and flavors to create a unique expeirence or your customers.",
      imgUrl: "../../public/home/lipgloss.png",
      buyLink: "",
    },
  ];

  return (
    <div id="start-creating" className="py-10 mx-10 md:mx-20">
      <h1 className="text-labelme-wine text-2xl md:text-3xl font-semibold">
        Start Creating.
      </h1>
      <p className="mt-1 md:mt-3">Select a Product to get started.</p>

      <div className="flex flex-col md:grid grid-cols-4 space-y-10 md:space-y-0 md:space-x-10 mt-10">
        {items.map((item) => (
          <SCItems
            title={item.title}
            description={item.description}
            imgAlt={item.alt}
            imgUrl={item.imgUrl}
            buyLink={item.buyLink}
          />
        ))}
      </div>
    </div>
  );
};

export default StartCreating;

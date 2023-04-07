import Head from "next/head";
// import Image from "next/image";
// import Menu3 from "../components/menu/Menu3";
// import HomePage from "../components/home/Home3";
// import StartCreating from "../components/start-creating/StartCreating";
// import StartBusiness from "../components/start-creating/StartBusiness";
// import QuickEasy from "../components/start-creating/QuickEasy";
// import Reviews from "../components/start-creating/Reviews";
// import HowItWorks from "../components/start-creating/HowItWorks";
// import Footer from "../components/footer/Footer";
// import FAQs from "../components/footer/FAQs";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>LabelMe - Build a Beauty Brand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu3 />

      <main className="flex w-full flex-col border-t md:border-0">
        {/* <HomePage />
        <StartCreating />
        <StartBusiness />
        <QuickEasy />
        <Reviews />
        <HowItWorks />
        <FAQs /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;

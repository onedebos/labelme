import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/landing/home/Home3";
import StartCreating from "../components/landing/start-creating/StartCreating";
import StartBusiness from "../components/landing/start-creating/StartBusiness";
import QuickEasy from "../components/landing/start-creating/QuickEasy";
import Reviews from "../components/landing/start-creating/Reviews";
import HowItWorks from "../components/landing/start-creating/HowItWorks";
import FAQs from "../components/footer/FAQs";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>LabelMe - Build a Beauty Brand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-col border-t md:border-0">
        <HomePage />
        <StartCreating />
        <StartBusiness />
        <QuickEasy />
        <Reviews />
        <HowItWorks />
        <FAQs />
      </main>
    </div>
  );
};

export default Home;

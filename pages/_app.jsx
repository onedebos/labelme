import "../styles/globals.css";
import { DM_Sans } from "next/font/google";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu3";

import { useStore } from "../helpers/store";

const dmSans = DM_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

// when user logs in, check if there's a cart in Local and push to Firebase

function MyApp({ Component, pageProps }) {
  const { cart } = useStore();

  return (
    <main className={dmSans.className}>
      <Menu signedIn={false} cart={cart} />
      <Component signedIn={false} {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;

import "../styles/globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={dmSans.className}>
      {" "}
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

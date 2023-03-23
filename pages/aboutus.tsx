import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/utilities.css";
import "../styles/homepage.css";
import Navbar from "../components/organis/Navbar";
import MainBanner from "../components/organis/MainBanner";
import Transaksi from "../components/organis/Transaksi";
import FeaturedGame from "../components/organis/FeaturedGame";
import Reached from "../components/organis/Reached";
import Footer from "../components/organis/Footer";
import Story from "../components/organis/Story";
export default function AboutUs() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <Transaksi />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}

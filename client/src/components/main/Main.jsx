import Sprite from "../sprite/Sprite";
import Header from "../header/Header";
import Intro from "../intro/Intro";
import Features from "../features/Features";
import Pets from "../pets/Pets";
import Team from "../team/Team";
import Testimonials from "../testimonials/Testimonials";
import Download from "../download/Download";
import Footer from "../footer/Footer";

const Main = () => {
  return (
    <>
      <Sprite />
      <Header />
      <Intro />
      <Features />
      <Pets />
      <Team />
      <Testimonials />
      <Download />
      <Footer />
    </>
  );
};

export default Main;

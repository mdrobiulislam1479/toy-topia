import ToySlider from "../Components/HomeComponent/ToySlider";
import PopularToys from "../Components/HomeComponent/PopularToys";
import RetailPartners from "../Components/HomeComponent/RetailPartners";
import ContactSection from "../Components/HomeComponent/ContactSection";

const Home = () => {
  return (
    <div>
      <title>ToyTopia | Home</title>
      <ToySlider />
      <PopularToys />
      <RetailPartners />
      <ContactSection/>
    </div>
  );
};

export default Home;

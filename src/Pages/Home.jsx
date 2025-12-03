import ToySlider from "../Components/HomeComponent/ToySlider";
import PopularToys from "../Components/HomeComponent/PopularToys";
import RetailPartners from "../Components/HomeComponent/RetailPartners";
import FAQ from "../Components/HomeComponent/FAQ";

const Home = () => {
  return (
    <div>
      <title>ToyTopia | Home</title>
      <ToySlider />
      <PopularToys />
      <RetailPartners />
      <FAQ/>
    </div>
  );
};

export default Home;

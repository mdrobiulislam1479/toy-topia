import ToySlider from "../Components/HomeComponent/ToySlider";
import PopularToys from "../Components/HomeComponent/PopularToys";
import RetailPartners from "../Components/HomeComponent/RetailPartners";
import FAQ from "../Components/HomeComponent/FAQ";
import CustomerSay from "../Components/HomeComponent/CustomerSay";

const Home = () => {
  return (
    <div>
      <title>ToyTopia | Home</title>
      <ToySlider />
      <PopularToys />
      <RetailPartners />
      <CustomerSay />
      <FAQ/>
    </div>
  );
};

export default Home;

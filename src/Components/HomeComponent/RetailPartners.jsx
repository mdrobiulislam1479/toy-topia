import Marquee from "react-fast-marquee";

const partners = [
  {
    name: "Toys R Us",
    logo: "https://i.ibb.co.com/q3K8pFT7/TRU-RGB.jpg",
  },
  {
    name: "Walmart",
    logo: "https://i.ibb.co.com/FbrXwqQK/Walmart-Logo.png",
  },
  {
    name: "Target",
    logo: "https://i.ibb.co.com/0jg1vRbD/Target-Logo-1974.png",
  },
  {
    name: "Amazon",
    logo: "https://i.ibb.co.com/SXLrr7bZ/Amazon-Logo-2000.png",
  },
  {
    name: "Best Buy",
    logo: "https://i.ibb.co.com/VYdTgMVw/Best-Buy-logo-2.png",
  },
  {
    name: "Hamleys",
    logo: "https://i.ibb.co.com/XfrwJcJ3/Hamleys-logo.png",
  },
];

const RetailPartners = () => {
  return (
    <section className="py-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8" data-aos="zoom-in">
        Retail Partners
      </h2>
      <Marquee gradient={true} speed={50} pauseOnHover={true}>
        {partners.map((partner, index) => (
          <div
            key={index}
            className="mx-6 flex items-center justify-center rounded-[100px] p-4 w-40 h-24"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-16 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default RetailPartners;

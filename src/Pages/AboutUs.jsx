const AboutUs = () => {
  return (
    <div className="py-26 px-6">
      <title>ToyTopia | About Us</title>
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6  text-base-300">
          About <span className="text-secondary">ToyTopia</span>
        </h1>
        <p className="text-lg text-center text-base-200 mb-10">
          At ToyTopia, we believe in the power of play. Our mission is to create
          a joyful world where children can explore, learn, and grow through
          high-quality toys designed to inspire imagination.
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">
              Our Story
            </h2>
            <p className="text-base-200">
              Founded by parents and educators, ToyTopia was born out of a
              desire to provide toys that are not only fun, but also meaningful.
              From humble beginnings in a small home studio to a growing online
              store, our journey has been fueled by love and creativity.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-base-200">
              <li>
                <strong>Imagination:</strong> Encouraging creativity in every
                child.
              </li>
              <li>
                <strong>Quality:</strong> Safe and durable toys you can trust.
              </li>
              <li>
                <strong>Joy:</strong> Bringing smiles to little faces.
              </li>
              <li>
                <strong>Sustainability:</strong> Eco-friendly choices for a
                better future.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">
              Our Team
            </h2>
            <p className="text-base-200">
              We’re a team of designers, teachers, and parents working together
              to create a magical toy experience. Every toy is crafted with care
              and tested by real kids — and approved with giggles!
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">
              Our Promise
            </h2>
            <p className="text-base-200">
              We promise to put kids first in everything we do — from product
              design to customer service. If you ever have a question or
              concern, our team is here to help you with a smile.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-base-300 mb-4">
            Thank you for being part of the ToyTopia family!
          </h3>
          <p className="text-base-200">
            Let’s build a world of imagination — one toy at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="relative bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/5WqKXVj0/Benefits-of-outdoor-play-for-children.webp')",
        }}
      ></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-gray-300">
            Have a question or want to get in touch? Fill out the form below and
            we’ll get back to you soon.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white text-black rounded-full p-2">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-300">
                  180/2 Unnamed Road, Khulna, 9100
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white text-black rounded-full p-2">
                <FaPhoneAlt className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-300">+880 1444-444444</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white text-black rounded-full p-2">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-300">example@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-lg p-8 text-gray-800">
          <h3 className="text-xl font-bold mb-6">Send Message</h3>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border-b border-gray-300 focus:outline-none py-2"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-300 focus:outline-none py-2"
              />
            </div>
            <div>
              <textarea
                placeholder="Type your Message..."
                className="w-full border-b border-gray-300 focus:outline-none py-2 resize-none"
                rows="4"
              />
            </div>
            <div>
              <button
                type="button"
                className="w-full bg-primary/90 text-white py-2 font-semibold rounded hover:bg-primary transition disabled:opacity-60"
                disabled
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

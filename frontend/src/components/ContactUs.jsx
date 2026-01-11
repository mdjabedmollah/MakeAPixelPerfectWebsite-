const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <p className="text-center text-gray-500 mt-2">
          Feel free to reach out to us anytime
        </p>

        <div className="mt-12 bg-white p-8 rounded-2xl shadow">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Info */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Get in touch</h3>
              <p className="text-gray-500">📍 Dhaka, Bangladesh</p>
              <p className="text-gray-500 mt-2">📞 +880 1234 567 890</p>
              <p className="text-gray-500 mt-2">✉️ support@phudu.com</p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded-lg"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border p-3 rounded-lg"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

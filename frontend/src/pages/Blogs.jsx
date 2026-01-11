const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Choose the Right Doctor",
      desc: "Tips for selecting the best doctor for your health needs.",
      image: "/doctor.jpg",
    },
    {
      id: 2,
      title: "Why Regular Checkups Matter",
      desc: "Early detection can save lives. Learn why checkups are important.",
      image: "/doctor.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Blogs</h2>
        <p className="text-center text-gray-500 mt-2">
          Health tips & medical articles
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white p-5 rounded-xl shadow">
              <img
                src={blog.image}
                className="rounded-lg h-48 w-full object-cover"
              />
              <h3 className="mt-4 font-semibold text-lg">{blog.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{blog.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

const AboutHome = () => {
  const highlights = [
    { icon: "🏠", title: "Dedicated workspace", desc: "A private room equipped with WiFi" },
    { icon: "🔑", title: "Self check-in", desc: "Check in with your phone" },
    { icon: "❌", title: "Free cancellation", desc: "Cancel anytime" },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">About this home</h2>
      <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
        Welcome to Brightwoods Cabin, your rustic retreat nestled in the heart of Bridlepath, Ontario.
        Our cozy cabin, surrounded by the tranquility of nature&apos;s embrace, is designed to provide
        the ultimate relaxing getaway.
      </p>
      <button className="mt-2 text-sm text-teal-500 font-semibold">Show more</button>

     
      <div className="flex gap-6 mt-6">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs text-neutral-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutHome;
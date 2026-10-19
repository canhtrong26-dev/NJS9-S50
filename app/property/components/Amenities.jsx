const Amenities = () => {
  const amenities = [
    "Lakeside", "Kitchen", "Security cameras on property",
    "Wifi", "Free parking", "Outdoor shower",
    "Hot water", "Fire Extinguisher", "Freezer",
    "Coffee Maker", "Microwave", "Beach access",
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Amenities</h2>
      <div className="grid grid-cols-3 gap-3 mt-4">
        {amenities.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-neutral-700">
            <span>✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <button className="mt-4 px-6 py-2 border border-black rounded-lg text-sm font-semibold">
        Show all amenities
      </button>
    </section>
  );
};

export default Amenities;
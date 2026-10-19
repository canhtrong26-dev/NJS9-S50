import Image from "next/image";

const Reviews = () => {
  const reviews = [
    {
      name: "Johnny Cash",
      date: "June 2023",
      rating: 4.9,
      avatar: "/images/a.jpg",
      text: "Michelle's place was so great and definitely the perfect place for our long weekend. The lake is amazing!",
    },
    {
      name: "Yuta Watanabe",
      date: "May 2023",
      rating: 4.9,
      avatar: "/images/b.jpg",
      text: "The location is perfect. I love the lake so much! This is one of the best stays we had for a while. Definitely recommended.",
    },
    {
      name: "Shane Willis",
      date: "December 2022",
      rating: 4.8,
      avatar: "/images/c.jpg",
      text: "A great place overall. One of the nicest places in town for sure. I will come back in the next few months with my family.",
    },
  ];

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Reviews</h2>
        <a href="#" className="text-sm text-teal-500 font-semibold">View all</a>
      </div>
      <div className="flex gap-6 mt-4">
        {reviews.map((review, index) => (
          <div key={index} className="flex-1 bg-white p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <Image
                src={review.avatar}
                alt={`${review.name} avatar`}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">{review.name}</p>
                <p className="text-xs text-neutral-500">{review.date}</p>
              </div>
              <span className="ml-auto text-sm font-semibold">{review.rating} ★</span>
            </div>
            <p className="mt-3 text-sm text-neutral-600">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
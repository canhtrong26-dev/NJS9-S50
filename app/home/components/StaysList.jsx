import StayCard from "./StayCard";

const StaysList = () => {
  const stays = [
    {
      id: 1,
      name: "Brightwoods Cabin",
      location: "Bridlepath, Ontario, Canada",
      rating: 4.9,
      price: 658,
      image: "/images/1.jpg",
      
    },
    {
      id: 2,
      name: "Urban Loft",
      location: "Georgina Bay, Ontario, Canada",
      rating: 4.5,
      price: 410,
      image: "/images/2.jpg",
 
    },
    {
      id: 3,
      name: "Forestville Cottages",
      location: "Simcoe, Ontario Canada",
      rating: 5.0,
      price: 325,
      image: "/images/3.jpg",
    },
    {
      id: 4,
      name: "Unionville Lodge",
      location: "Markham, Ontario Canada",
      rating: 4.6,
      price: 485,
      image: "/images/4.jpg",
    },
    {
      id: 5,
      name: "Missisuaga Aistream",
      location: "Missisauga, Ontario, Canada",
      rating: 4.8,
      price: 502,
      image: "/images/5.jpg",
    },
    {
      id: 6,
      name: "Niagara Homes",
      location: "Niagara, Ontario, Canada",
      rating: 4.9,
      price: 655,
      image: "/images/6.jpg",
    },
    {
      id: 7,
      name: "Sunny Estate",
      location: "Barcort, Ontario Canada",
      rating: 5.0,
      price: 320,
      image: "/images/7.jpg",
    },
    {
      id: 8,
      name: "Lawrence Hills",
      location: "Lawrence, Ontario Canada",
      rating: 5.0,
      price: 350,
      image: "/images/8.jpg",
    },
  ];

  return (
    <div className="flex flex-wrap gap-5 justify-center items-start">
      {stays.map((stay) => (
        <StayCard key={stay.id} {...stay} />
      ))}
    </div>
  );
};

export default StaysList;
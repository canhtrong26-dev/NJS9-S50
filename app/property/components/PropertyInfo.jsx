import Image from "next/image";

const PropertyInfo = () => {
  return (
    <div className="flex justify-between items-start mt-6">
     
      <div>
        <h1 className="text-2xl font-bold">Brightwoods Cabin</h1>
        <p className="text-sm text-neutral-500 mt-1">Bridlepath, Ontario, Canada</p>
        <div className="flex items-center gap-1 mt-2">
          <span className="text-sm font-semibold">4.9</span>
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-sm text-neutral-500">(200 reviews)</span>
        </div>
      </div>

    
      <div className="text-right">
        <p className="text-2xl font-bold">
          $658 <span className="text-sm font-normal text-neutral-500">/night</span>
        </p>
        <button className="mt-3 px-8 py-3 bg-teal-500 text-white rounded-lg font-semibold">
          Book this home
        </button>
      
        <div className="flex items-center gap-2 mt-4 justify-end">
          <Image
            src="/Frame 52.png"
            alt="Host avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-left">
            <p className="text-sm font-semibold">Michelle Ward</p>
            <p className="text-xs text-neutral-500">Joined in May 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
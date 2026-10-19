import Image from "next/image";

const PropertyGallery = () => {
  return (
    <div className="flex gap-6 w-full">
      {/* Bên trái: Ảnh lớn + ảnh nhỏ phía dưới */}
      <div className="w-1/2">
        <div className="relative w-full min-h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/Frame 52.png"
            alt="Main property image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Bên phải: Card thông tin */}
      <div className="w-1/2 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">Brightwoods Cabin</h1>
            <p className="text-sm text-neutral-500 mt-1">Bridlepath, Ontario, Canada</p>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-sm font-semibold">5.0</span>
              <span className="text-yellow-500">★</span>
              <a href="#" className="text-sm text-teal-500 ml-1">200 Reviews</a>
            </div>
          </div>
          <button aria-label="Save to wishlist" className="text-2xl">♡</button>
        </div>

        <p className="text-sm text-neutral-600 leading-relaxed mt-2">
          Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario.
          Surrounded by lush landscapes and tranquil trails, this charming getaway offers
          the perfect blend of rustic elegance and modern comfort.
        </p>

        <div className="flex items-center gap-3 mt-3">
          <p className="text-2xl font-bold">
            $658 <span className="text-sm font-normal text-neutral-500">/night</span>
          </p>
          <span className="text-sm text-teal-500">📅 Best time to Book</span>
        </div>

        <button className="w-full py-3 bg-teal-500 text-white rounded-lg font-semibold mt-2">
          Book this home
        </button>

        {/* Host info */}
        <div className="flex items-center gap-3 mt-3 pt-3 border-t">
          <p className="text-sm text-neutral-500">Hosted by:</p>
          <Image
            src="/images/cd94a5fab701b56f2f84d9b50b671c3fcaf03983.jpg"
            alt="Host avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">Michelle Ward</p>
            <p className="text-xs text-neutral-500">Joined in May 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;
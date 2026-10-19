import Image from "next/image";

const StayCard = ({ name, location, rating, price, image }) => {
  return (
    <article className="flex overflow-hidden relative flex-col flex-1 shrink bg-white rounded-xl basis-0 min-w-[280px]">
      <Image
        src={image}
        alt={`${name} property`}
        width={400}
        height={300}
        className="object-cover z-0 w-full aspect-[1.02] min-h-[300px]"
      />
      <div className="flex z-0 flex-col p-4 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col flex-1 shrink self-stretch my-auto leading-none basis-0">
            <h2 className="text-base font-semibold tracking-wide text-zinc-900">
              {name}
            </h2>
            <p className="mt-1 text-sm tracking-wide text-neutral-500">
              {location}
            </p>
          </div>
          <div className="flex gap-1.5 items-center self-stretch my-auto text-sm font-semibold tracking-wide leading-none whitespace-nowrap text-zinc-900 w-[42px]">
            <span className="self-stretch my-auto w-[23px]">{rating}</span>
          </div>
        </div>
        <div className="flex gap-5 items-center mt-3.5 w-full min-h-[28px]">
          <div className="flex flex-1 shrink gap-0.5 items-center self-stretch my-auto whitespace-nowrap basis-0">
            <span className="self-stretch my-auto text-xl font-semibold tracking-wide leading-none text-zinc-900">
              ${price}
            </span>
            <span className="self-stretch my-auto text-sm tracking-wide leading-none text-neutral-500">
              /night
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default StayCard;
import StaysList from "./StaysList";

const StaysSection = () => {
  return (
    <section className="flex flex-col items-center px-5 py-6 w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center pt-3.5 w-full max-w-screen-xl">
        <h2 className="flex gap-1 items-center self-stretch my-auto text-xl tracking-wide leading-tight text-black min-w-[240px]">
          Stays nearby: <span className="font-semibold">Toronto Ontario</span>
        </h2>
      </div>
      <StaysList />
      <button className="overflow-hidden px-8 py-3 mt-6 text-base font-semibold tracking-wide leading-loose text-center text-teal-500 rounded-md border border-teal-500 border-solid shadow-sm max-md:px-5">
        Show more
      </button>
    </section>
  );
};

export default StaysSection;
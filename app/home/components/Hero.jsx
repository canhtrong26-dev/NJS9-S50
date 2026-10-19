import Image from "next/image";
import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <section className="flex relative flex-col items-center px-8 pt-12 pb-8 w-full min-h-[264px]">
      <Image
        src="/images/a899c041cddaac5cde140d8bfee785b0dc68a02b.png"
        alt="Background image of a cozy living room"
        fill
        className="object-cover absolute inset-0"
        
      
      />
      <div className="flex relative flex-col w-full max-w-screen-xl">
        <div className="flex flex-col self-start text-black">
          <h1 className="text-4xl font-bold leading-none">
            Find a <span className="text-teal-500">host</span> for every journey
          </h1>
          <p className="mt-2 text-xl font-light leading-tight">
            Discover the best local rental properties that fits your every travel needs
          </p>
        </div>
        <SearchForm />
      </div>
    </section>
  );
};

export default Hero;
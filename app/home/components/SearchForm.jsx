const SearchForm = () => {
  return (
    <form aria-label="Search properties" className="flex flex-wrap gap-3.5 items-center px-3 py-2.5 mt-6 w-full bg-white rounded-xl border border-solid border-slate-200 shadow max-md:max-w-full">

     
      <div className="flex flex-wrap flex-1 shrink gap-2.5 items-center self-stretch px-3 py-4 my-auto text-sm leading-loose text-black whitespace-nowrap bg-white rounded border border-solid border-zinc-300 min-w-[240px]">
        <label htmlFor="accommodation" className="sr-only">Accommodation</label>
        <select id="accommodation" aria-label="Select accommodation type" className="flex-1 shrink self-stretch my-auto bg-blend-normal basis-0">
          <option>Accommodation</option>
        </select>
      </div>

     
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch px-3 py-4 my-auto bg-white rounded border border-solid border-zinc-300 basis-[60px] min-w-[240px]">
        <div className="flex flex-1 shrink gap-10 justify-between items-center self-stretch px-3 py-4 my-auto bg-white rounded border border-solid border-zinc-300">
          <label htmlFor="check-in" className="self-stretch my-auto text-sm leading-loose text-black text-opacity-80">
            Check-in
          </label>
          <input type="date" id="check-in" aria-label="Check-in date" className="flex items-start self-stretch my-auto w-[30px]" />
        </div>

        <div className="flex flex-1 shrink gap-10 justify-between items-center self-stretch px-3 py-4 my-auto bg-white rounded border border-solid border-zinc-300">
          <label htmlFor="check-out" className="self-stretch my-auto text-sm leading-loose text-black text-opacity-80">
            Check-out
          </label>
          <input type="date" id="check-out" aria-label="Check-out date" className="flex items-start self-stretch my-auto w-[30px]" />
        </div>
      </div>

      
      <div className="flex flex-wrap flex-1 shrink gap-3.5 items-center self-stretch my-auto text-sm leading-loose whitespace-nowrap basis-[60px] min-w-[240px]">
        <label htmlFor="guests" className="self-stretch my-auto bg-blend-normal">Guest</label>
        <select id="guests" aria-label="Number of guests" className="flex items-start self-stretch my-auto w-[25px]">
          <option>1</option>
          <option>2</option>
          <option>3+</option>
        </select>
      </div>

    
      <button type="submit" className="overflow-hidden gap-2.5 justify-center items-center self-stretch px-8 py-4 my-auto text-base font-medium tracking-wide leading-loose text-center text-white whitespace-nowrap bg-teal-500 rounded shadow-sm max-md:px-5">
        Search
      </button>

    </form>
  );
};

export default SearchForm;
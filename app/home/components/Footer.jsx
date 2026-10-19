const Footer = () => {
  const footerSections = [
    {
      title: "Support",
      links: ["Help Centre", "AirCover", "Combating discrimination", "Supporting people with disabilities", "Cancellation options", "Report neighbourhood concern"],
    },
    {
      title: "Hosting",
      links: ["Local home", "Cover for hosts", "Hosting resources", "Community forum", "Hosting responsibly"],
    },
    {
      title: "Localhost",
      links: ["Newsroom", "New Features", "Careers", "Investors", "Gift cards"],
    },
  ];

  return (
    <footer className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-2.5 justify-center items-start px-8 py-10 w-full text-base leading-none bg-zinc-100 border-t border-slate-200 text-zinc-900">
        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <h3 className="text-xl font-semibold leading-none">{section.title}</h3>
            {section.links.map((link, linkIndex) => (
              <a key={linkIndex} href="#" className="mt-3.5 hover:underline">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center px-8 py-3 w-full text-sm font-light leading-tight text-black border-t border-slate-200">
        <div className="flex justify-between items-start w-full max-w-screen-xl min-h-[17px]">
          <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-start w-full basis-0 min-w-[240px]">
            <p>© 2023 Localhost, Inc. All Rights Reserved</p>
            <div className="flex gap-5 items-start min-w-[240px]">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms & Conditions</a>
              <a href="#" className="hover:underline">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
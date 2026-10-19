const Navigation = () => {
  const navItems = ["Home", "Stays", "Become a host"];

  return (
    <nav className="flex gap-8 items-start self-stretch my-auto text-sm text-black">
      {navItems.map((item, index) => (
        <a href="#" key={index} className="hover:underline">
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
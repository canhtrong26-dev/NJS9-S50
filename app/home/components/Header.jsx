import Logo from "./Logo";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center px-5 py-3.5 w-full bg-white border-b border-slate-200">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-screen-xl">
        <Logo />
        <Navigation />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
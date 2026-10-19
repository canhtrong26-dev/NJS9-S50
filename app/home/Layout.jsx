import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex overflow-hidden flex-col bg-neutral-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
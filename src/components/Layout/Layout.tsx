import { Footer, Header } from "../index";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

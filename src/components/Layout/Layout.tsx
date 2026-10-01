import { Footer, Header } from "../index";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Header title="Meu aplicativo de typescript" />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

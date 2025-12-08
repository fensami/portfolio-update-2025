import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="pb-11">
        <Nav />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;

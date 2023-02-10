import { Outlet} from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Container = () => {
  return (
    <>
      <div className="container-page container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Container;

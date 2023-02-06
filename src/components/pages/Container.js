import { Outlet} from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Container = () => {
  return (
    <>
      <div className="container-page container">
        <Header />
        {/* Insertar cada pagina dependiendo de la navegacion  body etx*/}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Container;

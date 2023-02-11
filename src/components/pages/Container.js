import { useState } from 'react';
import { Outlet} from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

function Container() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  return (
    <>
      <div className="container-page container">
        <Header   //ESTO PASAR DONDE VAMOS A PONER CARRITO 16:10
        allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}/>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Container;

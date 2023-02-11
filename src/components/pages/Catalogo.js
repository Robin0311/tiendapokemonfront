import { CarrProductCard } from "../shared/CarrProductCard";
import CarrProductFunko from "../shared/CarrProductFunko";
import CarrProductGame from "../shared/CarrProductGame";
import { Carrito } from "../shared/P4pcarrito";
import { useState } from "react";

function Catalogo() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <>
      <Carrito
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      ></Carrito>
      <CarrProductCard
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <CarrProductFunko />
      <CarrProductGame />
    </>
  );
}

export default Catalogo;

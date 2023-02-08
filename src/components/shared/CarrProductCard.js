import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import axios from "axios"
import React, {useState, useEffect} from 'react'

export default function CarrProductCard() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [valores, setValores] = useState([])
  useEffect(() => {
    axios.get("https://tiendapokemon2back.onrender.com/productsg")
      .then(res => {
        const data = res.data
        setValores(data.data)
      })
  }, [])

  const product = valores.map((item) => (
    <div>
    <Product
      name={item.name}
      type={item.type}
      price={item.price}
      description={item.description}
      image={item.image}
      
    />
    </div>
  ));

  return (
    <div className="App">
      <h1>Carrusel Card</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}

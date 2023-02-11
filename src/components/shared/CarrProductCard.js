import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios"
import React, {useState, useEffect} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CarrProductCard = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
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

    const onAddProduct = product => {
      if (allProducts.find(item => item.name === product.name)) {
        const products = allProducts.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        return setAllProducts([...products]);
      }
  
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      setAllProducts([...allProducts, product]);
    };

  return (

    <>

    <div>
    <Carousel showDots={true} responsive={responsive}>
    {valores.map((product) => (
    
    <Card className="p-10" style={{ width: "20rem" }} key={product._id}>
      <Card.Img
        className="product--image"
        src={product.photoimage}
        alt="product photoimage"
      />
      <Card.Body style={{ height: "10rem" }}>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          ${product.price}
        </Card.Subtitle>
        <Button variant="primary" onClick={() => onAddProduct(product)}>Add to Cart</Button>
      </Card.Body>
    </Card>
    
    ))}
    </Carousel>
    </div>
    </>
    
  );
}

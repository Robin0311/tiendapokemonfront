

import Carousel from "react-bootstrap/Carousel";


const Carrusel = () => {

  return(
    
    <Carousel className="carousel-page">
      <Carousel.Item>
        <img
          className="mx-auto d-block"
          style={{ height: 400}}
          src="https://i.pinimg.com/564x/e1/8f/48/e18f4891fa70181ac19da9219f674489.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Charizard</h3>
          <p>Pokemon de fuego</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="mx-auto d-block"
          style={{ height: 400}}
          src="https://i.pinimg.com/564x/65/b1/b8/65b1b8b7a9c55d018eb94f81f5bb22cf.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="mx-auto d-block"
          style={{ height: 400}}
          src="https://i.pinimg.com/564x/fc/29/30/fc2930793fdf82dbf60d8863ec7b4712.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;

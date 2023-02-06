import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Nav} from  'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

export default function Carruselv2() {
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

  return (
    <div className="App text-center">
      <Carousel responsive={responsive}>

        <div className="card ">
          <img
          className="product--image "
          src="https://static.cardmarket.com/img/8f47563dad88c70584cef6e325f9d562/items/52/683006.jpg"
          alt=""
          />
          <h4 >Cartas Pokemon</h4>
        </div>

        <div className="card">
          <img
          className="product--image"
          src="https://media.game.es/COVERV2/3D_L/208/208556.png"
          alt=""
          />
          <h4>Consolas Nintendo</h4>
        </div>

        <div className="card">
          <img
          className="product--image"
          src="https://m.media-amazon.com/images/I/31uDkWb90HL._SL500_._SS300_.jpg"
          alt=""
          />
          <h4>Funko Pop!</h4>
        </div>

      </Carousel>

          <div>

            <button className="buypoke "><LinkContainer to="/catalogoproductos">
              <Nav.Link>Ver y Comprar</Nav.Link>
            </LinkContainer></button>

          </div>

    </div>
  );
}



//  {/* <button className="buypoke text-white">Ver y Comprar</button> */}

//             {/* <LinkContainer to="/catalogoproductos">
//               <Nav.Link>Ver y Comprar</Nav.Link>
//             </LinkContainer> */}
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    <div className="Carruselv2" >
      <Carousel responsive={responsive}>
        <div className="card" style={{ height: 298, width: 300}}  >
          <img 
          className="product--image"
          src="https://i.pinimg.com/564x/9b/1c/57/9b1c5716f5c211ae7cb8e0ab3ca01afb.jpg" 
          alt="product img"/>
          
        </div>
        
        <div className="card" style={{ height: 298, width: 300}}>
          <img 
          className="product--image"
          src="https://i.pinimg.com/564x/bb/0e/d7/bb0ed76c2599d9770e417d3be3349775.jpg" 
          alt="product img"/>
        </div>

        <div className="card" style={{ height: 298, width: 300}}>
          <img 
          className="product--image"
          src="https://i.pinimg.com/564x/6f/59/7a/6f597ac59b5129ee44f9031590ef2429.jpg" 
          alt="product img"/>
        </div>

        <div className="card" style={{ height: 298, width: 300}}>
          <img 
          className="product--image"
          src="https://i.pinimg.com/564x/6e/8f/6c/6e8f6c2de06f2053add1cbf9756994f7.jpg" 
          alt="product img"/>
        </div>

        <div className="card">
          <img 
          className="product--image"
          src="https://i.pinimg.com/564x/54/b4/36/54b436f441907c7c3558980af53ca7fe.jpg" 
          alt="product img"/>
        </div>

        <div className="card">
          <img 
          className="product--image"
          src="https://i.pinimg.com/564x/3d/bf/40/3dbf40256f42a3546fb86b7a9a3417bd.jpg" 
          alt="product img"/>
        </div>
        
        <div className="card">
          <img 
          className="product--image"
          src="https://i.pinimg.com/564x/06/74/c8/0674c885e6ca355d53ca61d93afcccb5.jpg" 
          alt="product img"/>
        </div>

        <div className="card">
          <img 
          className="product--image"
          src="https://i.pinimg.com/564x/88/c7/80/88c7809347bf305a199d9882c9b7d672.jpg" 
          alt="product img"/>
        </div>

        <div className="card">
          <img 
          className="product--image"
          src="https://i.pinimg.com/564x/62/2d/11/622d119853bb2c9feab4e02f50f2298a.jpg" 
          alt="product img"/>
        </div>

        <div className="card">
          <img 
          className="product--image"
          src="https://i.pinimg.com/736x/c5/b8/54/c5b854280a9a900a4952810c8156497e.jpg" 
          alt="product img"/>
        </div>
      </Carousel>
    </div>
  );
}



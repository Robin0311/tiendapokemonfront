import Carruselv4body from "../shared/Carruselv4body";

import { Container, Row, Col, Image, Card} from 'react-bootstrap'
const Body = () => {
    return (
        <>
        <Container>

        <Card className="text-center bg-secondary text-white my-5 py-4">
          <Card.Body>
            <h2>
            Noticias Pokemon
            </h2>
            </Card.Body>
        </Card>

      <Row className="px-4 my-5">
       
        <Col sm={7}>

          <article>
          <h5>Despues de 25 años el Mostasa lo consiguio!</h5>
          <Image src="https://e.rpp-noticias.io/normal/2022/11/11/510351_1343101.jpg" fluid rounded/>
          <p>El día de hoy, Ash Ketchum ha alcanzado la gloria pero, sobre todo, ha cumplido su meta de ser el mejor entrenador de Pokémon del mundo. En medio de todo el revuelo social que vivimos, la victoria de un personaje que ha perseguido su sueño por más de 20 años nos recuerda que hay esperanzas.</p>
          </article>

        </Col>

        <Col sm={5}>
          
          <article>
          <h5>Nuevo evento de Pokemon Go!</h5>
            <Image src="https://www.pokemon.com/static-assets/content-assets/cms2-es-es/img/video-games/_tiles/pokemon-go/2023/02012023/02/pokemon-go-169.jpg" fluid rounded/>
            <p>No te sorprendas si escuchas un batir de alas mientras exploras Pokémon GO. Lo más seguro es que te hayas adentrado en el Día de la Comunidad de febrero, en el que Noibat aparecerá con más frecuencia en estado salvaje.</p>
            </article></Col>
      </Row>
      
      <Row className="px-4 my-5 text-center ">
        <h4>Otras noticias</h4>
        <Col sm>
          <Image src="https://phantom-elmundo.unidadeditorial.es/d7f62821e245c03cd570c485e32668f1/f/webp/assets/multimedia/imagenes/2019/06/05/15597346366675.jpg" fluid roundedCircle />Nuevo Juego</Col>
        <Col sm><Image src="http://media.vandal.net/i/600x400/30290/pokemon-rumble-world-eshop-20154373422_1.jpg" fluid roundedCircle/>Temporada de batallas</Col>
        <Col sm><Image src="https://static.emol.cl/emol50/Fotos/2016/07/21/file_20160721080324.jpg" fluid roundedCircle />Peliculas</Col>
        <Col sm><Image src="https://static.posters.cz/image/750/posters/pokemon-mega-i26499.jpg" fluid roundedCircle/>Mega-Evoluciones</Col>
      </Row>

      <Row>
        <Card className="text-center bg-secondary text-white my-5 py-4">
          <Card.Body>
            <h2>
            Todo lo que necesitas en nuestra tienda
            </h2>
            </Card.Body>
        </Card>
      </Row>
      
    </Container>

    <Carruselv4body />
  
    </>
    )
}

export default Body

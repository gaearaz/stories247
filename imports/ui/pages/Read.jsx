import React from 'react';
import '../css/read.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Star from './Star2';
import Form from 'react-bootstrap/Form';


export default class Read extends React.Component {

    constructor() {
        super();

    }

    componentWillMount(){
        document.body.style.background= "white";
    }
    
    componentWillUnmount(){
        document.body.style.background = null;
    }
    

    render() {
        return (
            <div>
                <div className="read-header">
                    <Container>
                        <Row>
                            <Col>
                                <Image className="read-author-image" src="/author.jpg" />
                                
                            </Col>
                            <Col  xs={5}>
                                <h2>Edgar Allan Poe</h2>
                            </Col>
                            <Col>
                                <Row>
                                    <Star className="read-star"></Star>
                                </Row>
                                <Row>
                                    
                                </Row>
                            </Col>
                            <Col>
                                <Image src="/report.png"></Image>
                            </Col>
                        </Row>
                    </Container>

                </div>
                <div className="read-text">
                    <Form.Control
                    className="read-form-text" 
                    as="textarea" 
                    rows="4" 
                    value="La desdicha es diversa. La desgracia cunde multiforme sobre la tierra. Desplegada sobre el ancho horizonte como el arco iris, sus colores son tan variados como los de éste y también tan distintos y tan íntimamente unidos. ¡Desplegada sobre el ancho horizonte como el arco iris! ¿Cómo es que de la belleza he derivado un tipo de fealdad; de la alianza y la paz, un símil del dolor? Pero así como en la ética el mal es una consecuencia del bien, así, en realidad, de la alegría nace la pena. O la memoria de la pasada beatitud es la angustia de hoy, o las agonías que son se originan en los éxtasis que pudieron haber sido.
                    

                    Mi nombre de pila es Egaeus; no mencionaré mi apellido. Sin embargo, no hay en mi país torres más venerables que mi melancólica y gris heredad. Nuestro linaje ha sido llamado raza de visionarios, y en muchos detalles sorprendentes, en el carácter de la mansión familiar en los frescos del salón principal, en las colgaduras de los dormitorios, en los relieves de algunos pilares de la sala de armas, pero especialmente en la galería de cuadros antiguos, en el estilo de la biblioteca y, por último, en la peculiarísima naturaleza de sus libros, hay elementos más que suficientes para justificar esta creencia.
                    
                    Los recuerdos de mis primeros años se relacionan con este aposento y con sus volúmenes, de los cuales no volveré a hablar. Allí murió mi madre. Allí nací yo. Pero es simplemente ocioso decir que no había vivido antes, que el alma no tiene una existencia previa. ¿Lo negáis? No discutiremos el punto. Yo estoy convencido, pero no trato de convencer. Hay, sin embargo, un recuerdo de formas aéreas, de ojos espirituales y expresivos, de sonidos musicales, aunque tristes, un recuerdo que no será excluido, una memoria como una sombra, vaga, variable, indefinida, insegura, y como una sombra también en la imposibilidad de librarme de ella mientras brille el sol de mi razón. 
                    
                    En ese aposento nací. Al despertar de improviso de la larga noche de eso que parecía, sin serlo, la no-existencia, a regiones de hadas, a un palacio de imaginación, a los extraños dominios del pensamiento y la erudición monásticos, no es raro que mirara a mi alrededor con ojos asombrados y ardientes, que malgastara mi infancia entre libros y disipara mi juventud en ensoñaciones; pero sí es raro que transcurrieran los años y el cenit de la virilidad me encontrara aún en la mansión de mis padres; sí, es asombrosa la paralización que subyugó las fuentes de mi vida, asombrosa la inversión total que se produjo en el carácter de mis pensamientos más comunes. Las realidades terrenales me afectaban como visiones, y sólo como visiones, mientras las extrañas ideas del mundo de los sueños se tornaron, en cambio, no en pasto de mi existencia cotidiana, sino realmente en mi sola y entera existencia.

                    Berenice y yo éramos primos y crecimos juntos en la heredad paterna. Pero crecimos de distinta manera: yo, enfermizo, envuelto en melancolía; ella, ágil, graciosa, desbordante de fuerzas; suyos eran los paseos por la colina; míos, los estudios del claustro; yo, viviendo encerrado en mí mismo y entregado en cuerpo y alma a la intensa y penosa meditación; ella, vagando despreocupadamente por la vida, sin pensar en las sombras del camino o en la huida silenciosa de las horas de alas negras. ¡Berenice! Invoco su nombre... ¡Berenice! Y de las grises ruinas de la memoria mil tumultuosos recuerdos se conmueven a este sonido. ¡Ah, vívida acude ahora su imagen ante mí, como en los primeros días de su alegría y de su dicha! ¡Ah, espléndida y, sin embargo, fantástica belleza! ¡Oh sílfide entre los arbustos de Arnheim! ¡Oh náyade entre sus fuentes! Y entonces, entonces todo es misterio y terror, y una historia que no debe ser relatada. 

                    La enfermedad -una enfermedad fatal- cayó sobre ella como el simún, y mientras yo la observaba, el espíritu de la transformación la arrasó, penetrando en su mente, en sus hábitos y en su carácter, y de la manera más sutil y terrible llegó a perturbar su identidad. ¡Ay! El destructor iba y venía, y la víctima, ¿dónde estaba? Yo no la conocía o, por lo menos, ya no la reconocía como Berenice
                    "

                    disabled 
                    />
                </div>
            </div>
        );
    }
}
import React from 'react';
import {Container, Row, Col } from 'reactstrap';

function Sobre(){
    return(
        <div>
            <Container>
            <Row>
                <Col
                className="display-5  text-center mt-2 mb-3"
                md={{
                    offset: 0,
                    size: 12
                }}
                sm="12"
                >
                Sobre
                </Col>
            </Row>
            <Row>
                <Col
                className="text-center mt-2 mb-3"
                md={{
                    offset: 0,
                    size: 12
                }}
                sm="12"
                >
                <p > Plataforma desenvolvida para avaliação técnica utilizando React com bootstrap no seu Front-end e Node.js no seu Back-end. O sistema em sua tela inicial apresenta uma listagem de 5 usuários de forma ordenada que foram obtidos através do consumo da api.</p>
                <footer class="blockquote-footer">Desenvolvida por Eduardo Duarte de Sant'Anna.</footer>
                </Col>
            </Row>
            </Container>
            
        </div>
    );
};

export default Sobre;
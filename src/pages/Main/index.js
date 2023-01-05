import React from 'react';
import TableUser from '../../component/TableUser';

import {Container, Row, Col } from 'reactstrap';

function Main(){
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
                Tabela de Usuários
                </Col>
            </Row>
            </Container>
            
            <TableUser />
        </div>
    );
};

export default Main;
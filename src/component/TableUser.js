import React, {Component} from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
import api from '../config/api';

class TableUser extends Component{

    constructor(props){
        super(props);
        this.state = {
            users : []
        }
    }

    async componentDidMount(){
        const response = await api.get('');
        
        this.setState({users : response.data})
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <Container>
                    <Row>
                        <Col
                        className="bg-light border"

                        md={{
                            offset: 1,
                            size: 10
                        }}
                        sm="12"
                        >
                            <Table hover >
                            <thead>
                                <tr>
                                    <th>
                                        Id
                                    </th>
                                    <th>
                                        Nome
                                    </th>
                                    <th>
                                        UserName
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map((user) => 
                                        <tr>
                                            <th scope="row">
                                                {user.id}
                                            </th>
                                            <td>
                                                {user.name}
                                            </td>
                                            <td>
                                                {user.username}
                                            </td>
                                            <td>
                                                {user.email}
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            </Table>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default TableUser;
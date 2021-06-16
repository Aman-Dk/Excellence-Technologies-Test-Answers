import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap'


class Home extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '400px', margin: '30px auto', padding: '20px' }}>
                    <Card.Img variant="top" src={this.props.avatar} />
                    <Card.Body>
                        <Card.Title as="h3">
                            <p>
                                {this.props.id}.
                                &nbsp;
                                {this.props.firstName}
                                &nbsp;
                                {this.props.lastName}
                            </p>
                        </Card.Title>
                    </Card.Body>
                    <ListGroup variant="flush" style={{ fontSize: '20px' }}>
                        <ListGroup.Item><b>Email:</b> {this.props.email}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        )
    }
}


export default Home
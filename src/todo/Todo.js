import React, { Component } from 'react'
import { Card,ListGroup } from 'react-bootstrap'
import { v4 as uuid } from 'uuid';
import Add from './Add'


class Todo extends Component {

    constructor(){
        super()
        this.state={
            lists:[

                {
                    work:'buy groceries',
                },
                {
                    work:'go for walk',
                },
                {
                    work:'go for a ride',
                }

            ]
        }
    }

    //add received new item from 'Add' to the todo lists
    addItemHandler = (newItem) =>{
        const newList = [
            ...this.state.lists,
            newItem
        ]

        this.setState({lists: newList})

    }

    render() {

        let todoList = this.state.lists.map((list) =>{
            //loop over the lists of todo list
            return(<ListGroup.Item key={uuid()}>{list.work}</ListGroup.Item>)
        })
        
        return (
            <div>
                <div>
                <Card style={{ width: '400px', margin: '30px auto', padding: '20px' }}>
                    <Card.Title className="mb-3" as="h1">Todo List</Card.Title>
                    <Add addItem={this.addItemHandler}/>
                    <div>
                        <ListGroup variant="flush">
                            {todoList}
                        </ListGroup>
                    </div>
                </Card>
                </div>
            </div>
        )
    }
}


export default Todo
import React, { Component } from 'react'
import axios from 'axios'
import Home from './Home'


class Display extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userBook: [],
            page: ''

        }
    }

    async componentDidMount() {
        await axios.get(`https://reqres.in/api/users?page=${this.props.page}`)
            .then(res => {
                this.setState({ userBook: res.data.data })
            })

        console.log(this.state)
    }

    render() {

        const users = this.state.userBook.map((user) => {
            return (<Home
                id={user.id}
                email={user.email}
                firstName={user.first_name}
                lastName={user.last_name}
                avatar={user.avatar}
            />)
        })

        return (
            <div>
                {/* display page number */}
                <h3
                    style={{marginTop:'10px',marginLeft:'45%'}}>
                    Page {this.props.page}
                </h3>
               
                {/* display users here */}
                {users}
            </div>
        )
    }
}


export default Display
import React, { Component } from 'react';
import Home from './Home';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pending: '',
            approved: '',
            out: ''
        }
    }

    componentDidMount() {
        const login = JSON.parse(localStorage.getItem("userInfo") || "[]");
        console.log('login', login)
        const users = JSON.parse(localStorage.getItem("totalLeaves") || "[]");
        console.log('totalleaves:::::', users.length);
        this.setState({
            pending: users.length
        })



        const ap = JSON.parse(localStorage.getItem("approvedInformation") || "[]");
        console.log('user:::::', ap.length);

        this.setState({
            approved: ap.length,
        })


        const logout = JSON.parse(localStorage.getItem('lastlogin') || "[]");
        console.log('user:::::', logout);
        this.setState({
            out: logout
        })



    }



    render() {
        const users = JSON.parse(localStorage.getItem("totalLeaves") || "[]");
        console.log('totalleaves:::::', users.length);
        return (
            <div>
                <Home />
                <body>
                    <div className="container">
                        <div className="jumbotron" style={{ marginTop: '50px' }}>
                            <h3>Number of pending leaves:{users.length}</h3>
                            <h3>Leaves approved:{this.state.approved}</h3>
                            <h3>Last Login: {this.state.out}</h3>
                        </div>
                    </div>
                </body>
            </div>
        );
    }
}

export default Dashboard;

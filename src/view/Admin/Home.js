import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Home extends Component {
   
    componentDidMount() {
        const users = JSON.parse(localStorage.getItem("userInfo") || "[]");
        console.log('user', users)
    }

     logout=()=>{
       
        let dateOfLogin = Date()
        console.log(dateOfLogin)
        localStorage.setItem('lastlogin', JSON.stringify(dateOfLogin))
        window.location.href = '/login';
        

     }

    render() {
        return (
            <body>
                <ul>
                    <li><a href="/Admin/Dashboard">Dashboard</a></li>
                    <li><a href="/Admin/Approved_Leaves">Approved Leaves</a></li>
                    <li><a href="/Admin/Pending_Leaves">Pending Leaves</a></li>
                    {/* <li id='logout'><a href="/login">Logout</a></li> */}
                    <Button  onClick={() => {
                        this.logout();
                    }}>Logout</Button>
                </ul>
            </body>
        );
    }
}

export default Home;

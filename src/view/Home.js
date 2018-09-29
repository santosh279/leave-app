import React, { Component } from 'react';
import './Home.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Profile from './users/Profile';
import MyLeaves from './users/my_leaves';
import Newleaves from './users/new_leaves';


class Home extends Component {
   
    componentDidMount() {
        const users = JSON.parse(localStorage.getItem("userInfo") || "[]");
        console.log('user', users)
    }


    render() {
        return (
            <body>
                <ul>
                    <li><a href="/user/profile">profile</a></li>
                    <li><a href="/user/my_leaves">my_leaves</a></li>
                    <li><a href="/user/New_leaves">New_leaves</a></li>
                    <li><a href="/login">Logout</a></li>
                </ul>
            </body>
        );
    }
}

export default Home;

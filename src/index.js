import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import 'tachyons';


import './index.css';
import App from '../src/containers/App';
import Login from '../src/view/Auth/Login'

import registerServiceWorker from './registerServiceWorker';
import Home from './view/Home';
import Profile from './view/users/Profile';
import MyLeaves from './view/users/my_leaves';
import Newleaves from './view/users/new_leaves';
import Dashboard from './view/Admin/Dashboard';
import ApprovedLeave from './view/Admin/Approvedleaves';
import PendingLeaves from './view/Admin/Pendingleaves';
import { newLeave, requestLeaves, leaveUpdate, leavesData, leavesGiven } from '../src/view/users/reducers'

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'


const logger = createLogger();

const rootReducer = combineReducers({ newLeave, requestLeaves, leaveUpdate, leavesData, leavesGiven });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))





ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                {/* <Route path="/" component={App} /> */}
                <Route path="/login" component={Login} />
                <Route path="/user/Home" component={Home} />
                <Route path="/user/profile" component={Profile} />
                <Route path="/user/my_leaves" component={MyLeaves} />
                <Route path="/user/new_leaves" component={Newleaves} />
                <Route path="/Admin/Dashboard" component={Dashboard} />
                <Route path="/Admin/Approved_Leaves" component={ApprovedLeave} />
                <Route path="/Admin/Pending_Leaves" component={PendingLeaves} />
            </div>
        </Router>
    </Provider>
    ,
    document.getElementById('root'));

registerServiceWorker();

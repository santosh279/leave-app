import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import { getLeaveInfo } from '../users/actions';

import { connect } from 'react-redux'
import compose from 'recompose/compose'


import Home from './Home';


const styles = theme => ({
    card: {
        minWidth: 200,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


class PendingLeaves extends Component {
    constructor(props) {
        super(props)
        this.state = {
            approvedInfo: false
        }
    }

    componentDidMount() {
        this.props.getLeave();
    }


    incrementValue(values, i) {
        console.log("value data::", values)

        let applyleavedata = localStorage.getItem("approvedInformation") ?
            localStorage.getItem("approvedInformation") : '[]'

        // let appliedLeaves = localStorage.getItem('applyleaves')? localStorage.getItem('applyleaves'): '[]'

        // appliedLeaves = JSON.parse(appliedLeaves)
        
        let totalLeaves = JSON.parse(localStorage.getItem("applyleave") || "[]");
        let info = totalLeaves.findIndex(e => e.ID === values.ID)
        totalLeaves[info].isApproved = true
        console.log(totalLeaves[info])
        localStorage.setItem('applyleave', JSON.stringify(totalLeaves))
        applyleavedata = JSON.parse(applyleavedata)
        applyleavedata.push(values)
        localStorage.setItem("approvedInformation", JSON.stringify(applyleavedata))

        console.log('totalLeaves infromati', i)
              
        const users = JSON.parse(localStorage.getItem("totalLeaves") || "[]");
        console.log('users data before splice', users, users.length)
    

        users.splice(i, 1)
        console.log('users data after splice', users.length)

        localStorage.setItem("totalLeaves", JSON.stringify(users))


    }

    leaveInfo = () => {
        const { classes } = this.props;
        let users = JSON.parse(localStorage.getItem("applyleave") || "[]");
        const it = users.map((info, i) => {
            return (
                <Card id="card">
                    <CardContent>
                        <Typography color="textSecondary">
                            {info.email}
                        </Typography>
                        <Typography color="textSecondary">
                            {info.text}
                        </Typography>
                        <Button size="medium"
                            value="Increment Value" id="number" value="0"
                            onClick={() => {
                                this.incrementValue(info, i)
                            }}
                        >Approve Leave</Button>
                        <Button size="medium" id="card"
                            onClick={() => { this.deleteCard() }}>
                            Delete the card
                        </Button>
                    </CardContent>
                </Card>
            )
        })
        return it
    }

    deleteCard(k, index) {


        const users = JSON.parse(localStorage.getItem("applyleave") || "[]");

        let a = users.splice(index, 1)

        console.log("a delted", a)

        localStorage.setItem('info', JSON.stringify(a))
        document.getElementById("card").remove();

    }

    render() {
        let vm = this;
        const { classes } = this.props;
        const { leave } = this.props;

        console.log("data  rom the actios state::", this.props.data)


        return (
            <div className='App'>
                <MuiThemeProvider>
                    <Home />
                    <body>
                        <div className="container">
                            <div className="jumbotron" style={{ marginTop: '50px' }}>
                                <div className={classes.root}>
                                    {this.leaveInfo()}
                                </div>
                            </div>
                        </div>
                    </body>
                </MuiThemeProvider>
            </div>
        );
    }
}

PendingLeaves.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        leave: state.leave
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getLeave: () => dispatch(getLeaveInfo())
    }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(PendingLeaves);

// export default withStyles(styles)(PendingLeaves);

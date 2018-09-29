import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import compose from 'recompose/compose';
import { connect } from 'react-redux'

import { getApprovedInfo } from '../users/actions'

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
const mapStateToProps = (state) => {
    return {
        leaves: state.leavesData.leaves
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getLeaveData: () => dispatch(getApprovedInfo())
    }
}


class ApprovedLeave extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardData: ''
        }
    }
    componentDidMount() {
        // this.approvedInfo();
        this.props.getLeaveData()
    }

    deleteCard() {

    }

    approvedInfo = () => {
        const { classes } = this.props;
        const { leaves } = this.props;
        const it = leaves.map((value, i) => {
            return (
                <Card className={classes.card} id="card">
                    <CardContent>
                        <Typography className={classes.title}
                            color="textSecondary">
                            {value.text}
                        </Typography>
                        <Button size="medium" id="card"
                            onClick={() => { this.deleteCard() }}>
                            Delete the card
                        </Button>
                    </CardContent>
                </Card>
            )
        })
        return it;
    }



    render() {
        const { classes } = this.props;
        return (
            <div className="App">
                <Home />
                <div className='App'>
                    <MuiThemeProvider>
                        <Home />
                        <body>
                            <div className="container">
                                <div className="jumbotron"
                                    style={{ marginTop: '50px' }}>
                                    <div className={classes.root}>
                                        {this.approvedInfo()}
                                    </div>
                                </div>
                            </div>
                        </body>
                    </MuiThemeProvider>
                </div>

            </div>
        );
    }
}

ApprovedLeave.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose( withStyles(styles), 
                        connect(mapStateToProps, mapDispatchToProps))
                        (ApprovedLeave);

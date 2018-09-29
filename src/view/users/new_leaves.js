import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import compose from 'recompose/compose';
import { connect } from 'react-redux'
import { setLeaveInfo,setNewLeaves } from './actions'

// const uuidv1 = require('uuid/v1');

import uuidv1 from 'uuid'

import Home from '../Home';
import { stat } from 'fs';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    }
});


class Newleaves extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            text: '',
            data: []
        }
    }
    updateEmail(event) {   //update the email
        let email = event.target.value;
        this.setState({
            email: email,
        });
    }
    updateText(event) {   //update the text
        let text = event.target.value;
        this.setState({
            text: text,
        });
    }

    updateApplication() {
        setLeaveInfo({
            "email":this.state.email,
            "text":this.state.text,
            "ID": uuidv1(),
            "isApproved": false
        }, function(res){
            console.log('response from actions',res)
            if(res.payload){
                console.log("updated information")
            } else {
                console.log("err")
            }
        })
    }

    // componentDidMount(){
    //   console.log (this.props.leavesGiven, "infromation from reducers")
    // }



    render() {
        const { classes, newLeave } = this.props;
        return (
            <div className="App">
                <MuiThemeProvider>
                    <Home />
                    <body>
                        <div className="container">
                            <div className="jumbotron" style={{ marginTop: '50px' }}>
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    className={classes.textField}
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(event) => this.updateEmail(event)}
                                />
                                <TextField
                                    id="outlined-full-width"
                                    label="Label"
                                    style={{ margin: 8 }}
                                    placeholder="Enter the text"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event) => this.updateText(event)}
                                />
                                <Button variant="contained" color="default" className={classes.button}
                                    onClick={this.updateApplication.bind(this)}>
                                    Upload
                                    <CloudUploadIcon className={classes.rightIcon} />

                                </Button>
                            </div>
                        </div>
                    </body>
                </MuiThemeProvider>
            </div>

        );
    }
}

Newleaves.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        leavesGiven: state.leavesGiven.information
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Newleaves);

import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import PropTypes, { func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { requestLeaveInfo } from './actions'
import lodash from 'lodash'



import Home from '../Home';


const styles = {
  card: {
    minWidth: 275,
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
};

const mapStateToProps = (state) => {
  return {
    info: state.requestLeaves.info
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onRequestLeave: () => dispatch(requestLeaveInfo())
  }
}

class MyLeaves extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      approved: false,
      information: []
    }
  }

  componentDidMount() {
    this.props.onRequestLeave();
    this.app();
  }


  app() {

    // let
    let ap = JSON.parse(localStorage.getItem("approvedInformation") || "[]");
    console.log("infromation inside the my_leaves",ap)
    
    let users = JSON.parse(localStorage.getItem("applyleave") || "[]");

    console.log("users applied data::",users)

    
    let it = []
    ap.map((item)=>{
      it.push(item.ID)
    })

    console.log("ID::::",it)


    // let it = ap.find( function(e){
    //   console.log("so====<<==::", e.ID )
    //   return e.ID
    // })
    
    let yes=[]
    let into = users.map(items => {
      yes.push(items.ID)
    })
    console.log(yes)

 

  }

  deleteCard(k, index) {
    // localStorage.removeItem("App")

    let cardInfo = this.props.info

    cardInfo.splice(index, 1)

    localStorage.setItem("applyleave", JSON.stringify(cardInfo))

    const users = JSON.parse(localStorage.getItem("applyleave") || "[]");


    document.getElementById("card").remove();




  }

  getInfo = () => {

    console.log(!this.app(),"approved infromation inside the getInfo")
    const { info } = this.props;


    const it = info.map((info, i) => {
      return (
        <Card id="card">
          <CardContent>
            {/* <h6> email </h6> */}
            <Typography color="textSecondary">
              {info.email}
            </Typography>
            <Typography color="textSecondary">
              {info.text}
            </Typography>
            <Button
              disabled={ !info.isApproved }
            >
              Approved
                    </Button>
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
  render() {
    const { classes, info } = this.props;
    console.log('infooooo==>>', info)

    { this.app }
    // console.log(this.state.information,"infromation")

    return (
      <div className="App">
        <MuiThemeProvider>
          <Home />
          <body>
            <div className="container">
              <div className="jumbotron" style={{ marginTop: '50px' }}>
                {this.getInfo()}
              </div>
            </div>
          </body>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(MyLeaves);

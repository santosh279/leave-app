import React from 'react';
import { Redirect } from 'react-router-dom'
import { userInfo } from '../../userInfo'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            dashboard: false,
            Admin: false
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        let vm = this;
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        const users = JSON.parse(localStorage.getItem("userInfo") || "[]");
        console.log('user', users)
        var found = users.find(function (element) {
            return element.email === vm.state.signInEmail;
        });
        console.log(found.role)
        if (found.role === 'user') {
            localStorage.setItem('loggedIn', JSON.stringify(found))
            this.setState({
                dashboard: true
            })
        } else {
           this.setState({
               Admin : true
           })
        }
    }

    render() {
        // const { onRouteChange } = this.props;
        if(this.state.dashboard){
           return <Redirect to='/user/my_leaves' />
        } 
        if(this.state.Admin){
            return <Redirect to='/Admin/Dashboard' />
        } 
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Sign in"
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Login;
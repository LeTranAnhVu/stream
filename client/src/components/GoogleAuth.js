import React from "react";
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";

class GoogleAuth extends React.Component {
    state = {isSignedIn: null};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '790628221733-nlen5mgrn57s3rmj02dvqn0s61h07rvt.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.updateStateSignIn();
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    updateStateSignIn = () => {
        const authState = this.auth.isSignedIn.get();
        console.log('ahihi');
        if(authState){
            this.props.signIn();
        }else {
            this.props.signOut();
        }
    };

    onAuthChange = () => {
        this.updateStateSignIn();
    };

    onSignInClick = () => {
        this.auth.signIn();
    };
    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton = () => {
        if (this.props.authState.isSignedIn === true) {
            return <button className="ui red google button" onClick={this.onSignOutClick}><i className="google icon"/> Sign
                Out</button>
        } else if (this.props.authState.isSignedIn === false) {
            return <button className="ui red google button" onClick={this.onSignInClick}><i className="google icon"/> Sign
                In with Google</button>
        } else {
            return <div className="ui active inline tiny loader"></div>
        }
    };

    render() {
        console.log('porps', this.props);
        return this.renderAuthButton()
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {authState: state.authState};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);

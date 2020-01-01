import React from "react";
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '790628221733-nlen5mgrn57s3rmj02dvqn0s61h07rvt.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = () => {
        const authState = this.auth.isSignedIn.get();
        if(authState){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };
    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton = () => {
        if (this.props.isSignedIn === true) {
            return <button className="ui red google button" onClick={this.onSignOutClick}><i className="google icon"/> Sign
                Out</button>
        } else if (this.props.isSignedIn === false) {
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
    return {isSignedIn: state.authState.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);

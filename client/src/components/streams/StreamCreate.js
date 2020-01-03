import React from 'react';
import {connect} from "react-redux";
import {createStream} from "../../actions";
import {Link} from "react-router-dom";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };

    render() {
        return (
            <div className="stream-wrapper">
                <div className="stream-header">
                    <h3>Stream Create</h3>
                    <Link to="/" className="ui button primary">
                        List </Link>
                </div>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.authState
    }
};
export default connect(mapStateToProps, {createStream})(StreamCreate);

import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from "../../actions";
import {Link} from "react-router-dom";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchStream(id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.stream.id, formValues);
    };

    render() {
        const {stream} = this.props;
        if (stream) {
            return (
                <div className="stream-wrapper">
                    <div className="stream-header">
                        <h3>Stream Edit</h3>
                        <Link to="/" className="ui button primary">
                            List </Link>
                    </div>
                    <StreamForm initialValues={{title: stream.title, description: stream.description}}
                                onSubmit={this.onSubmit}/>
                </div>
            )
        }
        return null;
    }
}

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps.match.params;
    return {
        auth: state.authState,
        stream: state.streams[id]
    }
};


export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);

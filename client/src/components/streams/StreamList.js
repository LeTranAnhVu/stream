import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from "../../actions";
import "./StreamList.scss";
import {Link} from "react-router-dom";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    isCurrentUser = (stream) => {
        const {userId} = this.props.auth;
        return (userId && userId === stream.userId);
    };

    renderEditAndDelete = (stream) => {
        if (this.isCurrentUser(stream)) {
            return (
                <div className="ui right floated content">
                    <Link to={`/streams/${stream.id}/edit`} className="ui button icon primary">
                        <i className="icon cog"></i>
                    </Link>
                    <Link to={`/streams/${stream.id}/delete`} className="ui button icon negative">
                        <i className="icon trash"></i>
                    </Link>
                </div>
            )
        }
    };

    renderCreateButton = () => {
        if(this.props.auth.isSignedIn) {
            return  <Link to="/streams/new" className="button ui primary right">Create New</Link>
        }
    };

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <div className="item stream-item" key={stream.id}>
                    {this.renderEditAndDelete(stream)}
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                        <div className="description">
                            <p>
                                {stream.description}
                            </p>
                        </div>
                    </div>
                </div>
            )
        });
    };

    render() {
        return (
            <div className="stream-wrapper">
                <div className="stream-header">
                    <h3>Streams</h3>
                    {this.renderCreateButton()}
                </div>

                <div className="ui celled list stream-list">
                    {this.renderList()}
                </div>
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.authState,
        streams: Object.values(state.streams)
    }
};
export default connect(mapStateToProps, {
    fetchStreams
})(StreamList);

import React from 'react';
import Modal from '../Modal';
import history from "../../history";
import {connect} from 'react-redux';
import {fetchStream, deleteStream} from "../../actions";

class StreamDelete extends React.Component {
    onDelete = () => {
        const {id} = this.props.match.params;
        this.props.deleteStream(id);
    };
    onCancel = () => {
        history.push('/');
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchStream(id);
    }

    render() {
        const {stream} = this.props;
        return stream ?
            (
                <div>
                    <Modal
                        title={stream.title || 'This stream'}
                        content="Do want to delete it?"
                        textApproveBtn="Delete"
                        textCancelBtn="Cancel"
                        onApprove={this.onDelete}
                        onCancel={this.onCancel}
                        onOutClick={this.onCancel}
                    />
                </div>
            ) : null
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);

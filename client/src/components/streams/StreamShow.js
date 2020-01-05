import React from 'react';
import {fetchStream} from "../../actions";
import flvjs from "flv.js";
import {connect} from "react-redux";

class StreamShow extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
        this.flvPlayer = null;
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchStream(id);
        this.buildVideo(id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {id} = this.props.match.params;
        this.buildVideo(id);
    }

    componentWillUnmount() {
        if (this.flvPlayer) this.flvPlayer.destroy();
    }

    buildVideo(id) {
        if (this.flvPlayer || !this.props.stream) return null;

            const videoElement = this.videoRef.current;
            this.flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: `http://localhost:8000/live/${id}.flv`
            });
            this.flvPlayer.attachMediaElement(videoElement);
            this.flvPlayer.load();
            // this.flvPlayer.play();
    }

    render() {
        if (!this.props.stream) {
            return null;
        }
        const {stream} = this.props;
        return (
            <div>
                <video ref={this.videoRef} controls style={{width: "100%", height: "auto"}}></video>
                <h3>{stream.title}</h3>
                <p>{stream.description}</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};
export default connect(mapStateToProps, {fetchStream})(StreamShow);

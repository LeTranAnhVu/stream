import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from "../../actions";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStream();
    }

    render() {
      console.log('render streamList');
      return (
            <div>StreamList</div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log('log', state);
    return {
        streams: state.streams
    }
};
export default connect(mapStateToProps, {
    fetchStream
})(StreamList);

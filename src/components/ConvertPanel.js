import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as actions from '../actions';

class ConvertPanel extends Component {

  onCancelPressed = () => {
    this.props.removeAllVideos();
    this.props.history.push('/')
  }

  render() {
    const { videos } = this.props;
    return (
      <div className="convert-panel">
        <button className="btn red" onClick={this.onCancelPressed}>
          Cancel
        </button>
        <button className="btn" onClick={() => this.props.convertVideos(videos)}>
          Convert!
        </button>
      </div>
    );
  };
}

const mapStateForProps = (state) => {
  return { videos: _.map(state.videos) };
}

export default withRouter(
  connect(mapStateForProps, actions)(ConvertPanel)
);

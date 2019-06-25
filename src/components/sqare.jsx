import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickSquare } from '../actions/squares';

class Square extends Component {
  render() {
    return (
      <div
        style={{
          width: '28px',
          height: '28px',
          backgroundColor: this.props.isClicked ? '#000' : '#fff',
          cursor: 'pointer',
          border: '1px solid #000'
        }}
        onClick={() => {
          this.props.dispatch(clickSquare(this.props.index));
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isClicked: state[ownProps.index]
  };
};

export default connect(mapStateToProps)(Square);

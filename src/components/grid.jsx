import React, { Component } from 'react';
import Square from './sqare';
import { connect } from 'react-redux';
import { resetGrid } from '../actions/squares';

class Grid extends Component {
  render() {
    return (
      <div className="App">
        {this.props.grid.map((_, index) => (
          <Square key={index} index={index} />
        ))}
        <button
          onClick={() => {
            this.props.dispatch(resetGrid());
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    grid: state
  };
};
export default connect(mapStateToProps)(Grid);

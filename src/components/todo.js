import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {

    return (
      <li onClick={this.props.onClick} >
        {this.props.text}
      </li>
    );
  }

}

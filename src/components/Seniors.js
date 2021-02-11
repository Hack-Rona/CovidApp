import React, { Component } from "react";

export default class Helps extends Component {
  render() {
    return (
      <tr key={this.props.index}>
        <td>{this.props.help.name}</td>
        <td>{this / props.help.city}</td>\<td></td>
      </tr>
    );
  }
}

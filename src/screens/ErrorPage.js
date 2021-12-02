import React from "react";

export default class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  render() {
    return (
      <div className="main-backgroundgrey">
        <div className="main-backgroundblue">TU FAIS QUOI NARVALO</div>
      </div>
    );
  }
}

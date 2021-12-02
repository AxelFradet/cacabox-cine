import React from "react";
import minia from "../assets/minia.png";
import CreatePeople from "../components/CreatePeople";
import FullPeople from "../components/FullPeople";

export default class RankPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      point: [],
    };
    this.addPeople = this.addPeople.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.minPoint = this.minPoint.bind(this);
  }

  addPeople(newUser) {
    this.setState({
      user: [...this.state.user, newUser],
      point: [...this.state.point, 0],
    });
  }

  addPoint(id) {
    let { point } = this.state;
    point[id]++;
    this.setState({ point: point });
  }

  minPoint(id) {
    let { point } = this.state;
    point[id] > 0 ? point[id]-- : 0;
    this.setState({ point: point });
  }

  render() {
    const { user, point } = this.state;
    console.log(user, point);

    const listPeople = user.map((el, id) => (
      <FullPeople
        id={id}
        key={id}
        pseudo={el}
        point={point[id]}
        minPoint={this.minPoint}
        addPoint={this.addPoint}
      />
    ));

    return (
      <div className="rank-backgroundgrey">
        <div className="rank-backgroundblue">
          <div className="main-logo-container">
            <img className="main-logo-style" src={minia} />
          </div>
          <div className="rank-top-container">
            <CreatePeople addPeople={this.addPeople} />
          </div>
          <hr className="rank-limit" />
          <div className="rank-bot-container">{listPeople}</div>
        </div>
      </div>
    );
  }
}

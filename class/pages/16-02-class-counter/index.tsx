import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCountUp = () => {
    this.setState({ count: 1 });
    // console.log(this.state.count);
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운터 올리기</button>
      </>
    );
  }
}

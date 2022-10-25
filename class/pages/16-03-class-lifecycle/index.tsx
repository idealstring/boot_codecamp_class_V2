import { Component } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("그려지고 나서 실행");
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행");
  }

  componentWillUnmount() {
    console.log("사라질 때 실행");
    // 채팅방 나가기 API 등
  }

  onClickCountUp = () => {
    this.setState((prev: { count: number }) => ({ count: prev.count + 1 }));
    // console.log(this.state.count);
  };

  onClickMove() {
    void Router.push("/");
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운터 올리기</button>
        <button onClick={this.onClickMove}>나가기</button>
      </>
    );
  }
}

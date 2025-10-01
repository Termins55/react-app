import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // початковий стан
    this.state = {
      count: 0,
    };
  }

  increment = (e) => {
    // setState(зміни стану) => перерендинг сторінки
    this.setState({ count: this.state.count + 1 });
  };

  decrement = (e) => {
    this.setState({ count: this.state.count - 1 });
  };
  // додати кнопку - і прописати обробник decrement
  render() {
    return (
      <>
        <Count count={this.state.count} />
        <div>{this.state.count}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;

function Count({ count }) {
  return <div>Props: {count}</div>;
}

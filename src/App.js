// import "./App.css";
// import Counter from "./components/Counter";
// import Header from "./components/Header";
import { Component } from "react";
import StopWatch from "./components/StopWatch";
import { isVisible } from "@testing-library/user-event/dist/utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }
  handleClick = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <>
        <button onClick={this.handleClick}>
          {isVisible ? "Unmount" : "Mount"}
        </button>
        {isVisible && <StopWatch />}
      </>
    );
  }
}

export default App;

// new Counter().render()

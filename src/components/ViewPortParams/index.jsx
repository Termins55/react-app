import { Component } from "react";

class ViewPortParams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
  }

  resizaHandler = () => {
    this.setState({ x: window.innerWidth, y: window.innerHeight });
  };

  componentDidMount() {
    window.addEventListener("resize", this.resizaHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizaHandler);
  }

  render() {
    const { x, y } = this.state;
    return (
      <div>
        Width: {x}, Height: {y}
      </div>
    );
  }
}
export default ViewPortParams;
// import "./App.css";
// import Counter from "./components/Counter";
// import Header from "./components/Header";
import { Component } from "react";
// import StopWatch from "./components/StopWatch";
// import AnimalSlider from "./components/AnimalSlider";
import UsersList from "./components/UsersList";
import ThemeButton from "./components/ThemeButton";
// import ViewPortParams from "./components/ViewPortParams";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLight: true,
    };
  }
  setTheme = () => {
    const { isLight } = this.state;
    this.setState({ isLight: !isLight });
  };
  render() {
    const { isLight } = this.state;
    return (
      <>
        <ThemeButton isLight={isLight} changeTheme={this.setTheme} />
        <UsersList isLight={isLight} />
      </>
    );
  }
}

// App;
//   ThemeButton; напис
//   UsersList;
//     UsersListItem; підсвітка

export default App;

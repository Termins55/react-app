import React from "react";
import { ThemeContext } from "../../contexts";

function UserPage() {
  return (
    <div>
      <Header />
      <main>Main content</main>
      <Footer />
    </div>
  );
}
export default UserPage;

//TODO Move to components

function Header() {
  return (
    <header>
      <span>Header</span> <ThemeSwitcher />
    </header>
  );
}

function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
      {(theme) => <div>{theme}</div>}
    </ThemeContext.Consumer>
  );
}

function Footer() {
  return <footer>Footer</footer>;
}

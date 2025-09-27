import userItem from "./user-icon.jpg";
import logo from "./logo.jpg";

function Header(props) {
  const { isLogin } = props;

  // <img src={userItem} alt="" />;
  // <button>Login</button>

  //   if (isLogin) {
  //     return <img src={userItem} alt="" />;
  //   }
  //   return <button>Login</button>;

  //   return (
  //     <header>
  //       {isLogin ? <img src={userItem} alt="" /> : <button>Login</button>}
  //     </header>
  //   );

  //   return <header>{isLogin && <img src={userItem} alt="" />}</header>;

  return (
    <header>
      <img src={logo} alt="logo" />
      {isLogin ? (
        <img src={userItem} alt="user" />
      ) : (
        <div>
          <button>Login</button>
          <button>Registration</button>
        </div>
      )}
    </header>
  );
}

export default Header;

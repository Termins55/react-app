import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";

// Реалізувати компонент header, який містить логотип і
// або фото користувача, якщо він залогінився
// або кнопку login/registration
function App() {
  const isLogin = true;
  return (
    <>
      {/* <Header isLogin={isLogin} />; */}
      <Counter/>
    </>
  );
}

export default App;

// new Counter().render()
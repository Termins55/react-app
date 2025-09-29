import "./App.css";
import Header from "./components/Header";


// Реалізувати компонент header, який містить логотип і
// або фото користувача, якщо він залогінився
// або кнопку login/registration
function App() {
  const isLogin = true;
  return <Header isLogin={isLogin}/>;
}

export default App;


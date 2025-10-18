const NamedList = ({name, children}) => {
  return (
    <>
      <h3>{name}</h3>
      <ul>{children}</ul>
    </>
  );
};

// реалізувати NamedList: іменований список із заголовком з name
// та вмістом списку з контенту NamedList
// Odd numbers: - name
// 1            - контент
// 3            - контент
// 5            - контент

function App() {
  return (
    <NamedList name="Odd number">
      <ul>
        <li>1</li>
        <li>3</li>
        <li>5</li>
      </ul>
    </NamedList>
  );
}

export default App;

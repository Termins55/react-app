import { Component } from "react";

// Списки і ключі
// 1 Реакт вміє рендерити масиви
// 2 Кожен елемент, що повторюється, повинен мати проп key
class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { id: 1, firstName: "Test", lastName: "Testovich" },
        { id: 2, firstName: "John", lastName: "Dou" },
        { id: 3, firstName: "Jane", lastName: "Dou" },
      ],
    };
  }

  mapUser = (u, i) => (
    <li key={u.id}>
      {u.firstName} {u.lastName}
    </li>
  );

  render() {
    // const userElenents = this.state.users.map((u, i) => <li key={i}>{u}</li>);
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}
export default UsersList;

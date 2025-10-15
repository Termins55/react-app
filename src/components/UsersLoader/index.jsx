import { Component } from "react";

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      error: null,
      currentPage: 1,
    };
  }

  componentDidMount() {
    const { currentPage } = this.state;

    this.setState({ isFetching: true });
    fetch(`https://randomuser.me/api?results=5&seed=pe2022&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.results }))
      .catch((e) => this.setState({ error: e }))
      .finally(() => this.setState({ isFetching: false }));
  }

  render() {
    const { users, isFetching, error } = this.state;
    return (
      <>
        {error && <div>!!!ERROR!!!{JSON.stringify(error)}</div>}
        {isFetching && <div>Loading. Please waite...</div>}
        {!error && !isFetching && (
          <ul>
            {users.map((u) => (
              <li key={u.id}>{JSON.stringify(u)}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
export default UsersLoader;

import React, { useEffect, useState } from 'react';
import getUsers from '../components/api';

function UsersLoaderH () {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const loadUsers = () => {
    setIsFetching(true);
    getUsers({
      page: currentPage,
      results: 5,
    })
      .then(data => setUsers(data.results))
      .catch(e => setError(e))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    loadUsers();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage => currentPage - 1);
    }
  };

  return (
    <>
      {error && <div>!!!ERROR!!!{JSON.stringify(error)}</div>}
      {isFetching && <div>Loading. Please waite...</div>}
      {!error && !isFetching && (
        <>
          <button onClick={prevPage}>{'<'}</button>
          <button onClick={nextPage}>{'>'}</button>
          <ul>
            {users.map(u => (
              <li key={u.id}>{JSON.stringify(u)}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default UsersLoaderH;

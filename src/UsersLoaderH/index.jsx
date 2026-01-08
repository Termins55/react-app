import React, { useEffect, useState } from 'react';
import getUsers from '../components/api';
import { useData } from '../hooks';

function UsersLoaderH () {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: users, isFetching, error } = useData(getUsers, currentPage);

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

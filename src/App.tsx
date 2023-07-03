import React, { useEffect, useState } from 'react';
import User from './types';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://gorest.co.in/public/v2/users')
      .then(response => response.json())
      .then(data => {
        if (data.data) {
          const fetchedUsers: User[] = data.data;
          setUsers(fetchedUsers);
        }
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Users:</h1>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default App;

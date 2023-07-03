import React, { useEffect, useState } from 'react';
import { User } from './types';
import UserTable from './UserTable';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBarComponent from './AppBar';
import LoadingSpinner from './LoadingSpinner';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch('https://gorest.co.in/public/v2/users')
      .then(response => response.json())
      .then(data => {
        if (data) {
          const fetchedUsers: User[] = data.filter(
            (user: User) => user.status === 'active'
          );
          setUsers(fetchedUsers);
        }
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBarComponent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <UserTable  darkMode={darkMode} users={users} />
    </ThemeProvider>
  );
};

export default App;


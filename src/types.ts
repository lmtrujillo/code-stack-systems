export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface AppBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export interface UserTableProps {
  users: User[];
  darkMode: boolean;
}

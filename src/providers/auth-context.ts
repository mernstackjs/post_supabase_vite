import { createContext, useContext } from "react";

type UsersProps = {
  id: number;
  full_name: string;
  password: string;
  email: string;
};

type CurrentUser = {
  id: number;
  email: string;
  full_name: string;
  isAuthenticated: boolean;
};

type AuthContextT = {
  users: UsersProps[];
  getUsers: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<boolean>;
  logOut: () => void;
  currentUser: CurrentUser | null;
  isLoading: boolean;
  error: string | null;
};

export const AuthContext = createContext<AuthContextT>({
  users: [],
  isLoading: true,
  error: "",
  getUsers: async () => {},
  signIn: async () => false,
  logOut: () => {},
  currentUser: null,
});

export const useAuth = () => useContext(AuthContext);

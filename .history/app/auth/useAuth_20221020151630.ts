import { useContext } from "react"
import AuthContext from "./context";
import authStorage from "./storage";


export default function useAuth() {
  const {user, setUser} = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  }

  return {user, setUser};
}
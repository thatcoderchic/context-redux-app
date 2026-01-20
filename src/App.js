import "./App.css";
import Login from "./components/Login";
import Products from "./components/Products";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isLoggedIn, userName, logout } = useAuth();

  return (
    <div className="container">
      {!isLoggedIn ? (
        <Login />
      ) : (
        <>
          <h3>Hello, {userName} 👋</h3>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
          <Products />
        </>
      )}
    </div>
  );
}

export default App;

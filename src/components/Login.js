import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");

  return (
    <div className="login-card">
      <h2>Welcome Back 👋</h2>
      <p style={{ textAlign: "center" }}>
        Login to manage products
      </p>

      <input
        type="text"
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="user">Normal User</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={() => login(name, role)}>
        Enter Dashboard →
      </button>
    </div>
  );
}

export default Login;

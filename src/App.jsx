import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const login = (role) => {
    if (username.trim()) {
      setUser({
        username: username.trim(),
        role: role
      });
    }
  };

  const logout = () => {
    setUser(null);
    setUsername("");
  };

  if (user) {
    return (
      <div className="page">
        <div className="background-circle circle-one"></div>
        <div className="background-circle circle-two"></div>

        <div className="dashboard">
          <div className="top">
            <div className="logo">RB</div>
            <span className="status">● Logged In</span>
          </div>

          <div className="welcome">
            <p className="small-title">DASHBOARD</p>
            <h1>
              Welcome, <span>{user.username}</span>
            </h1>
            <p className="role">
              You are logged in as{" "}
              <strong>{user.role}</strong>
            </p>
          </div>

          <div className="access-card">
            {user.role === "Admin" ? (
              <>
                <div className="icon admin-icon">A</div>
                <div>
                  <h2>Admin Access</h2>
                  <p>You have permission to manage posts.</p>
                </div>
                <button className="delete-btn">
                  Delete Post
                </button>
              </>
            ) : (
              <>
                <div className="icon viewer-icon">V</div>
                <div>
                  <h2>Viewer Access</h2>
                  <p>You can view posts but cannot modify them.</p>
                </div>
                <div className="readonly">READ ONLY</div>
              </>
            )}
          </div>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>

      <div className="login-card">
        <div className="logo large-logo">RB</div>

        <p className="small-title">ROLE BASED SYSTEM</p>
        <h1>Welcome Back</h1>
        <p className="subtitle">
          Enter your username and choose your access role.
        </p>

        <div className="input-box">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="login-buttons">
          <button
            className="admin-btn"
            onClick={() => login("Admin")}
          >
            Login as Admin
          </button>

          <button
            className="viewer-btn"
            onClick={() => login("Viewer")}
          >
            Login as Viewer
          </button>
        </div>

        <p className="footer-text">
          Secure Role-Based Login
        </p>
      </div>
    </div>
  );
}

export default App;
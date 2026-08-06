function Login() {
  return (
    <div className="container">
      <div className="card">
        <h2>Healthcare Management System</h2>

        <input
          type="text"
          placeholder="Username"
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
        />

        <br /><br />

        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;

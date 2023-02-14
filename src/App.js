import React, { useState } from "react";
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);

  };

  const navRegPage = () => {
    console.log("register")
  }

  //sdfsdf

  return (
    <form  className="formClass">
      <h5 className="smallMargin">Login</h5>
      <div className="form-group">
        {/* <label htmlFor="username">Username:</label> */}
        <input
          placeholder="username"
          type="text"
          id="username"
          value={username}
          className="form-control smallMargin"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        {/* <label htmlFor="password">Password:</label> */}
        <input
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          className="form-control smallMargin"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} type="submit" className="btn btn-success smallMargin appButtonPurple">Login</button>
      <div className="smallMargin">
        <p>New user?  <button className="transparentBtn" onClick={navRegPage}>Register</button></p>
        
      </div>
    </form>
  );
};

export default LoginPage;
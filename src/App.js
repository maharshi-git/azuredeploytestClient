import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username} Password: ${password}`); 

    // const authenticate = (username, password) => {
    //   const user = users.find(
    //     (user) => user.username === username && user.password === password
    //   );
    //   if (!user) {
    //     return false;
    //   }
    //   return true;
    // };
    
    // const result = authenticate("user1", "pass1");
    // console.log(result); // true
    
    // const result2 = authenticate("user3", "pass3");
    // console.log(result2); // false

  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginPage;
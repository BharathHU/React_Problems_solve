import React, { useState } from "react";

function Password() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwords, setPasswords] = useState([]);

  const showPass = () => {
    setShowPassword(!showPassword);
  };

  const addPassword = () => {
    if (password.trim() !== "") {
      setPasswords([...passwords, password]);
      setPassword("");
    }
  };

  return (
    <div>
      <label>Enter your password</label>
      <br />

      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={showPass}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>

      <button onClick={addPassword}>Add</button>

      <ul>
        {passwords.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Password;
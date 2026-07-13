import React, { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confmpass, setConfpass] = useState("");

  const [msg, setMsg] = useState("");
  const [succmsg, setSuccMsg] = useState("");

  const [data, setData] = useState({});

  const handelClick = (e) => {
    e.preventDefault();

    setMsg("");
    setSuccMsg("");

    if (name.trim() === "") {
      setMsg("Please Enter Name");
    } else if (!email.includes("@")) {
      setMsg("Enter Valid Email");
    } else if (password.length < 6) {
      setMsg("Password must be at least 6 characters");
    } else if (confmpass !== password) {
      setMsg("Passwords do not match");
    } else {
      // Save Applicant Details
      setData({
        name,
        email,
        password,
        confmpass,
        status: "Application Under Processing",
      });

      setSuccMsg("Form Submitted Successfully ✅");

      // Clear Inputs
      setName("");
      setEmail("");
      setPassword("");
      setConfpass("");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "30px auto",
        padding: "20px",
        border: "3px solid black",
        borderRadius: "15px",
        boxShadow: "0px 0px 10px gray",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Registration Form</h2>

      <form onSubmit={handelClick}>
        <label>Enter Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />

        <br />
        <br />

        <label>Enter Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />

        <br />
        <br />

        <label>Enter Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />

        <br />
        <br />

        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          value={confmpass}
          onChange={(e) => setConfpass(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />

        <br />
        <br />
       <label>
  <input type="radio" name="gender" value="Male" />
  Male
</label>

<label>
  <input type="radio" name="gender" value="Female" />
  Female
</label>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </form>

      <h3 style={{ color: "red" }}>{msg}</h3>
      <h3 style={{ color: "green" }}>{succmsg}</h3>

      {data.name && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "2px solid gray",
            borderRadius: "10px",
          }}
        >
          <h2>Applicant Details</h2>

          <p>
            <strong>Name:</strong> {data.name}
          </p>

          <p>
            <strong>Email:</strong> {data.email}
          </p>

          <p>
            <strong>Password:</strong> {data.password}
          </p>

          <p>
            <strong>Confirm Password:</strong> {data.confmpass}
          </p>

          <p>
            <strong>Application Status:</strong>{" "}
            <span style={{ color: "green" }}>{data.status}</span>
          </p>
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "20px",
        }}
      >
        <FaInstagram
          style={{
            fontSize: "45px",
            color: "pink",
            cursor: "pointer",
          }}
        />

        <FaWhatsapp
          style={{
            fontSize: "45px",
            color: "#25D366",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}

export default Form;
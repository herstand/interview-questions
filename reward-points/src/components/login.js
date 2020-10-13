import React, { useState } from "react";
import styles from "./login.module.css";

function LoginElement({ type, label, value, setValue }) {
  return (
    <label>
      <span>{label}: </span>
      <input
        type={type}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
    </label>
  );
}

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      window.location = "/transactions";
    } else {
      alert("Hint: Try 'admin' and 'admin'");
    }
  };

  return (
    <section className={styles.login}>
      <h1>
        <img
          src="/images/logo.png"
          width="300"
          alt="Apex logo"
          title="Apex Systems Rewards"
        />
      </h1>
      <form onSubmit={login} action="/transactions" method="POST">
        <LoginElement
          type="text"
          label="Username"
          value={username}
          setValue={setUsername}
        />
        <LoginElement
          type="password"
          label="Password"
          value={password}
          setValue={setPassword}
        />
        <button>Lookup Customer Reward Points</button>
      </form>
    </section>
  );
}

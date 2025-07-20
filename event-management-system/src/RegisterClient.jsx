import { useState } from "react";
import "./Register.css";

export default function RegisterClient() 
{
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // You can send the data to your backend here
    console.log({ fullname, email, contact, password });
  }

  return (
    <section className="register-client">
      <div className="register-container">
        <h2>Register as Client</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
}

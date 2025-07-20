import { useState } from "react";
import "./Register.css";
import axios from "axios";

export default function RegisterClient() 
{
  const [fullname, setName] = useState("");
  const [clientEmail, setEmail] = useState("");
  const [clientContact, setContact] = useState("");
  const [clientPassword, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    
    const allInfo = {
      name: fullname,
      email: clientEmail,
      contact: clientContact,
      password: clientPassword,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/api/register/client",
        allInfo
      );
      console.log("Successfully registered:", response.data);
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
    }
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
            value={clientEmail}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="Contact Number"
            value={clientContact}
            onChange={(e) => setContact(e.target.value)}
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={clientPassword}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
}

import { useState } from "react";
import "./Register.css";
import axios from "axios";

export default function RegisterOrganizer() {
  const [orgName, setOrgName] = useState("");
  const [orgEmail, setEmail] = useState("");
  const [orgContact, setContact] = useState("");
  const [website, setWebsite] = useState("");
  const [orgDescription, setDescription] = useState("");
  const [orgPassword, setPassword] = useState("");

  async function handleSubmit(e) 
  {
    e.preventDefault();
    const allInfo = {
      name: orgName,
      email: orgEmail,
      contact: orgContact,
      password: orgPassword,
      socialLink: website,
      description: orgDescription,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/api/register/organizer",
        allInfo
      );
      console.log("Successfully registered:", response.data);
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
    }
    
  }

  return (
    <div className="register-org-wrapper">
      <section className="register-org">
        <h2>Register as an Organizer</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Organization Name"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={orgEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contact Number"
            value={orgContact}
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            type="text"
            placeholder="Website or Social Link"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <textarea
            placeholder="Organization Description"
            value={orgDescription}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="password"
            placeholder="Password"
            value={orgPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

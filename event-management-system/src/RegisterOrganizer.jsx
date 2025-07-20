import { useState } from "react";
import "./Register.css";

export default function RegisterOrganizer() {
  const [orgName, setOrgName] = useState('');
  const [representative, setRepresentative] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: add API logic or validation
    console.log({
      orgName,
      representative,
      email,
      contact,
      website,
      description,
      password,
    });
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={contact}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
);

}

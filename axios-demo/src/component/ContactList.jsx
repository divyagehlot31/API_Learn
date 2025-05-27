import React, { useEffect, useState } from "react";
import { getAllContacts } from "../data/contactApi";


const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAllContacts()
      .then((res) => setContacts(res.data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact List</h2>
      {contacts.map((contact) => (
        <div key={contact.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.mail}</p>
          {/* <p><strong>Number:</strong> {contact.number}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ContactList;

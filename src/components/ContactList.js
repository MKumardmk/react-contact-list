import React from "react";
import user from "../images/user.png";

const ContactList = (props) => {

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const editContact = (id) => {
    props.editContactId(id)
  }

  return (
    <div className="ui celled list">
      {
        props.contacts.map((contact) => {
          return (
            <div className="item" key={contact.id}>
              <img className="ui avatar image" src={user} alt="user" />
              <div className="content">
                <div className="header">{contact.name}</div>
                <div>{contact.phone}</div>
                <div>{contact.email}</div>
              </div>

              <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px" }}
                onClick={() => { deleteConactHandler(contact.id) }}
              ></i>
              <i
                className="edit alternate outline icon"
                style={{ color: "red", marginTop: "7px" }}
                onClick={() => { editContact(contact.id) }}
              ></i>
            </div>
          )
        })
      }
    </div>

  );
};

export default ContactList;

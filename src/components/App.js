import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextInput from "./TextInput";
import AddContact from "./AddContact";

function App() {
	const LOCAL_STORAGE_KEY = "contacts";
	const [contacts, setContacts] = useState(
		JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
	);
	const [editUser, setEditUser] = useState('')
	const [isEditUser, setIsEditUser] = useState(false)
	const [name, setName] = useState("")
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState(null)
	const [id, setId] = useState(null)
	const [profileImg, setProfileImg] = useState('')
	const [editContact, setEditContact] = useState('')



	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	useEffect(() => {
	}, [editContact])

	const removeContactHandler = (id) => {
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});
		setContacts(newContactList);
	};
	const editContactHandler = async (id) => {
		console.log(id, 'id')
		setIsEditUser(true)
		var edit = null
		contacts.filter((contact) => {
			if (contact.id === id)
				edit = contact
		});
		setEditContact(edit)

	}


	const statusFun = (type) => {
		setEmail('')
		setName('')
		setPhone('')
		toast(`Contact ${type} successfully!`, {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}


	const addContactHandler = (contact) => {
		setContacts([...contacts, { id: uuid(), ...contact }]);
	};


	return (
		<div className="ui container">
			<ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} closeOnClick theme="light" />
			<Header />
			<AddContact addUser={addContactHandler} editContact={[editContact ?? "", setContacts]} />
			<ContactList contacts={contacts} getContactId={removeContactHandler} editContactId={editContactHandler} />
		</div>
	);
}

export default App;

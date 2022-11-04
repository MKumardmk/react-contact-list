import React, { useState, useEffect } from 'react'
import TextInput from './TextInput'



const AddContact = ({ editContact, addUser = () => { }, updateUser = () => { }, }) => {

  const [editUser, setEditUser] = useState('')
  const [isEditUser, setIsEditUser] = useState(false)
  const [name, setName] = useState(editContact.name ?? "")
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState('')
  const [city, SetCity] = useState('')
  const [id, setId] = useState(null)
  const LOCAL_STORAGE = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE)) ?? []
  );



  const setData = async () => {
    await setName(editContact.name ?? "")
    await setEmail(editContact.email ?? "")
    await setPhone(editContact.phone ?? "")
    await setState(editContact.state ?? "")
    await SetCity(editContact.city ?? "")

    console.log(editContact.name)
  }
  const addNewUser = (e) => {
    e.preventDefault();
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (name === "" || email === "" || phone == null, state == '' || city == '') {
      alert("ALl the fields are mandatory!");
      return;
    } else if (regex.test(email) == false) alert("Please enter  the valid email!");
    else
      addUser({ name, email, phone, state, city })
  }
  const updateNewUser = () => {

  }
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={addUser} >
        <TextInput
          value={name}
          title='Name'
          placeholder={'Name'}
          onChangeText={(e) => setName(e.target.value)}
        />
        {/* <TextInput
          value={phone}
          title='Phone'
          type={'text'}
          placeholder={'Phone'}
          onChange={(e) => { setPhone(e.target.value); console.log(e.target.value) }}
        /> */}
        <div className="field">
          <label>Phone</label>
          <input
            type='text'
            name="name"
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)} />
        </div>
        <TextInput
          value={email}
          title='Email'
          type={'email'}
          placeholder={'email'}
          onChangeText={(e) => setEmail(e.target.value)}
        />
        <TextInput
          value={state}
          title='State'
          type={'text'}
          placeholder={'State'}
          onChangeText={(e) => setState(e.target.value)}
        />
        <TextInput
          value={city}
          title='City'
          type={'text'}
          placeholder={'City'}
          onChangeText={(e) => SetCity(e.target.value)}
        />
        <button className="ui button blue" onClick={isEditUser ? updateNewUser : addNewUser}>{isEditUser ? "Update" : "ADD"}</button>
      </form>
    </div>
  );
}

export default AddContact;
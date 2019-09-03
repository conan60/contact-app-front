import axios from 'axios';

export const asyncReadContacts = () => (dispatch) =>{
  axios.get('http://localhost:3030/contacts')
  .then(res=>dispatch(readContacts(res.data)))
  .catch(err=>console.log(err))
}


export const readContacts = (contacts) => ({
  type: 'READ_CONTACTS',
  payload : contacts
})

export const asyncAddContact = (contactToAdd) => (dispatch) =>{
  axios.post('http://localhost:3030/contact',contactToAdd)
  .then((res)=>dispatch(addContact(res.data)))
  .catch(err=>console.log(err));
}


export const addContact = contact => ({
  type: 'ADD_CONTACT',
  payload : contact
})


export const asyncUpdateContact = (contact) => (dispatch) =>{
  axios.put('http://localhost:3030/contact',contact)
  .then(res=>dispatch(updateContact(contact)))
  .catch(err=>console.log('Update Error : ',err))
}


export const updateContact = contact => ({
    type: 'UPDATE_CONTACT',
    payload : contact
})


export const asyncDeleteContact = (contactId) => (dispatch) =>{
  axios.delete(`http://localhost:3030/contact/${contactId}`)
  .then(res=>dispatch(deleteContact(contactId)))
  .catch(err=>console.log(err))
}


export const deleteContact = contactId => ({
    type: 'DELETE_CONTACT',
    payload : contactId
})

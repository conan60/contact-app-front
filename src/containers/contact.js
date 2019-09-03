import { connect } from 'react-redux';
import { addContact , updateContact , deleteContact } from '../actions/contact';
import ContactList from '../components/ContactList/ContactList';

console.log(ContactList);
// contactContainer.js
const mapStateToProps = state => ({
    state,
  });
  
  const mapDispatchToProps = ()=>({
    addContact,
    updateContact,
    deleteContact
  });
  
  const ContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactList);
  
  export default ContactContainer;
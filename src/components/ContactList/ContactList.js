import React from 'react';
import Contact from '../Contact/Contact'
import {useSelector,useDispatch} from 'react-redux';
import * as contactActions from '../../actions/contact';


function ContactList(props) {
  const state = useSelector(state=>state);
  const dispatch =useDispatch();  
  if(state.length === 0) dispatch(contactActions.asyncReadContacts());
  
  

  
    return (
      <div >
        {state.map(el=>(<Contact key={el._id} {...el} />))}   
      </div>
    );

}

export default ContactList ;

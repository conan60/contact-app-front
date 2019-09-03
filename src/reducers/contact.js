import {createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';



const contact = (state = [], action) => {
    switch (action.type) {

        case 'READ_CONTACTS':
        return [...action.payload]


        case 'ADD_CONTACT':
        let contactToAdd = action.payload;
        return [
            ...state,
            contactToAdd
        ]

        case 'UPDATE_CONTACT':
            return state.map(contact =>
                (contact._id === action.payload._id)
                ?{...action.payload}
                : contact
            )
        case 'DELETE_CONTACT':
            return state.filter(contact =>
                (contact._id !== action.payload)
            )
        default:
            return state
    }
}




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
export const store = createStore(contact,[],composeEnhancers(applyMiddleware(thunkMiddleware,)));
  
export default contact;
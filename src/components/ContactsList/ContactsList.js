import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/phone-actions';
import { getContactList } from '../../redux/phone-selectors';
import ContactItem from '../ContactItem';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(getContactList);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <ContactItem
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired,
  ),
};

export default ContactsList;

// import React, { Component } from 'react'

// export class ContactsList extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }    rce

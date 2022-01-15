import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <p className={styles.name}>{name}: </p>
      <a href={`tel:${number}`} className={styles.number}>
        {number}
      </a>
      <button className={styles.button} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;

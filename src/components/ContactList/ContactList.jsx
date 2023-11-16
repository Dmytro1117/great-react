import { FaPhone } from 'react-icons/fa';
import { CiTrash } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteContact } from '../../redux/operations';
import { getContacts, getFilter } from '../../redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    Notify.failure(`Delete complited`);
  };

  return visibleContacts.length === 0 ? (
    <p>Контактів не знайдено</p>
  ) : (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            <FaPhone className={css.icon} size={20} />
            <p>
              {name}: {phone}
            </p>
            <CiTrash
              type="button"
              className={css.iconDelete}
              size={24}
              onClick={() => handleDeleteContact(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

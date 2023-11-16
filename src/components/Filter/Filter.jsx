import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import { getFilter } from '../../redux/selectors';
import css from '../ContactForm/ContactForm.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const text = useSelector(getFilter);

  const handlerFindContact = e => {
    const normalizedValue = e.currentTarget.value.toLowerCase().trim();
    dispatch(setFilter(normalizedValue));
  };

  return (
    <label className={css.labelName}>
      Знайти по імені
      <input
        type="text"
        value={text}
        onChange={handlerFindContact}
        placeholder="Введіть ім'я"
      />
    </label>
  );
};

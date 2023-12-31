import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/Contacts/operations';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^\p{Lu}[\p{L}\s.'-]+$/u,
      "Ім'я має починатися з великої літери (без цифр)",
    )
    .max(25, 'Максимальна довжина 25 символів')
    .required("Ім'я є обов'язковим полем"),
  number: yup
    .string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Номер має бути в форматі 555-55-55')
    .required("Номер є обов'язковим полем"),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (
      contacts.some(
        num =>
          num.name.toLowerCase() === name.toLowerCase() ||
          num.number === number,
      )
    ) {
      return Notify.warning(`${name} or ${number} is already in contacts`);
    }

    dispatch(
      addContact({
        name,
        number,
      }),
    );

    Notify.success(`${name}: ${number} added successfully`);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label className={css.labelName} htmlFor="name">
          Ім'я
          <Field placeholder="Введіть ім'я" type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />
        </label>
        <label className={css.labelName} htmlFor="number">
          Номер телефону
          <Field placeholder="Введіть номер" type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="div" />
        </label>

        <button className={css.buttonAddContact} type="submit">
          Додати до записника
        </button>
      </Form>
    </Formik>
  );
};

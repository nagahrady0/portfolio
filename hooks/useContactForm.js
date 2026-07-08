import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function useContactForm({ formRef, nameRef, emailRef, messageRef, t, showAlert }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLabel = (e) => {
    if (e.target.value !== '') {
      e.target.classList.add('has-data');
    } else {
      e.target.classList.remove('has-data');
    }
  };

  const resetForm = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
    [nameRef, emailRef, messageRef].forEach(ref =>
      ref.current?.classList.remove('has-data')
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const errors = [];
    if (!nameRef.current.value)    errors.push(t('user empty'));
    if (!emailRef.current.value)   errors.push(t('email empty'));
    if (!messageRef.current.value) errors.push(t('message empty'));

    if (errors.length > 0) {
      showAlert(errors[0], false);
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formRef.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then(() => {
        resetForm();
        showAlert(t('message sent successfully'), true);
      })
      .catch((error) => {
        console.error(error);
        showAlert(t('something went wrong'), false);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return { sendEmail, handleLabel, isSubmitting };
}
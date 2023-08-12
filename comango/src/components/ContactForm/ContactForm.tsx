import React, { MutableRefObject, useRef } from 'react';

import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';
import ContactInput from './ContactInput';

const templateID = process.env.REACT_APP_TEMPLATE_ID || '';
const serviceID = process.env.REACT_APP_SERVICE_ID || '';
const publicKey = process.env.REACT_APP_PUBLIC_KEY || '';

const ContactForm = () => {
    const formRef = useRef() as MutableRefObject<HTMLFormElement>;

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs
            .sendForm(serviceID, templateID, formRef.current, publicKey)
            .then(
                (result) => {
                    alert(`Success ${result.text}`);
                },
                (error) => {
                    alert(`Fail ${error.text}`);
                }
            );
        formRef.current.reset();
    };
    return (
        <form
            onSubmit={sendEmail}
            className={styles.comtact__form}
            ref={formRef}
        >
            <ContactInput
                text="Full name"
                placeholder="Enter your name"
                type="text"
                name="fullname"
            />
            <ContactInput
                text="E-mail"
                placeholder="Enter your e-mail"
                type="email"
                name="email"
            />
            <ContactInput
                text="Phone number"
                placeholder="Enter your phone number"
                type="tel"
                name="phone"
            />
            <textarea
                rows={4}
                cols={50}
                placeholder="Type your message"
                name="message"
                style={{ resize: 'none' }}
            />

            <button className={styles.contact__btn} type="submit">
                Submit
            </button>
        </form>
    );
};
export { ContactForm };

import React, { MutableRefObject, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';
import ContactInput from './ContactInput';

const templateID: string = process.env.REACT_APP_TEMPLATE_ID;
const serviceID: string = process.env.REACT_APP_SERVICE_ID;
const publicKey: string = process.env.REACT_APP_PUBLIC_KEY;

const ContactForm = () => {
    const formRef = useRef() as MutableRefObject<HTMLFormElement>;

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleInputChange = () => {
        const formInputs = Array.from(
            formRef.current.querySelectorAll<HTMLInputElement>(
                'input[name], textarea[name]'
            )
        );
        const isAnyFieldEmpty = formInputs.some((input) => !input.value.trim());
        setIsSubmitDisabled(isAnyFieldEmpty || isFormSubmitted);
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitDisabled) return;

        emailjs
            .sendForm(serviceID, templateID, formRef.current, publicKey)
            .then(
                (result) => {
                    alert(`Success ${result.text}`);
                    setIsFormSubmitted(true);
                    setIsSubmitDisabled(true);
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
            onChange={handleInputChange}
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

            <button
                className={styles.contact__btn}
                type="submit"
                disabled={isSubmitDisabled}
            >
                Submit
            </button>
        </form>
    );
};

export { ContactForm };

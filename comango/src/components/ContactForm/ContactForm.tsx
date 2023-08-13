import React, { MutableRefObject, useRef, useState, useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
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

    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <form
            onSubmit={sendEmail}
            className={styles.comtact__form}
            ref={formRef}
            onChange={handleInputChange}
        >
            <ContactInput
                text={locales[language].contact__name}
                placeholder={locales[language].contact__pl_name}
                type="text"
                name="fullname"
            />
            <ContactInput
                text={locales[language].contact__email}
                placeholder={locales[language].contact__pl_email}
                type="email"
                name="email"
            />
            <ContactInput
                text={locales[language].contact__phone}
                placeholder={locales[language].contact__pl_phone}
                type="tel"
                name="phone"
            />
            <textarea
                rows={4}
                cols={50}
                placeholder={locales[language].contact__message}
                name="message"
                style={{ resize: 'none' }}
            />

            <button
                className={styles.contact__btn}
                type="submit"
                disabled={isSubmitDisabled}
            >
                {locales[language].contact__submit}
            </button>
        </form>
    );
};

export { ContactForm };

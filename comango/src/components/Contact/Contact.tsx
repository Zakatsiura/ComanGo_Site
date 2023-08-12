import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import styles from './Contact.module.css';
import { ContactForm } from '../ContactForm/ContactForm';

const Contact = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;
    return (
        <>
            <div id="contact" className={styles.container}>
                <div className={styles.container__bg}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>
                            {locales[language].contact__title}
                        </h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export { Contact };

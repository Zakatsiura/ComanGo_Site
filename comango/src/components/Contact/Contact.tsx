import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import styles from './Contact.module.css';

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
                        <h2 className={styles.title}>{ locales[language].contact__title}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Contact };

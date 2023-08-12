import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import styles from './Footer.module.css';
import logo from '../../assets/images/Logo.svg';

const Footer = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const menuItems =
        language === 'en'
            ? [
                  { item: 'About', link: '#about' },
                  { item: 'Stack', link: '#stack' },
                  { item: 'Portfolio', link: '#portfolio' },
                  { item: 'Contact', link: '#contact' },
              ]
            : [
                  { item: 'Про нас', link: '#about' },
                  { item: 'Стек', link: '#stack' },
                  { item: 'Портфоліо', link: '#portfolio' },
                  { item: 'Контакти', link: '#contact' },
              ];

    return (
        <>
            <div className={styles.wrapper}>
                <img className={styles.logo} src={logo} alt="logo" />
                {menuItems.map((menuItem, index) => (
                    <a
                        href={menuItem.link}
                        key={index}
                        className={styles.menuItem}
                    >
                        {menuItem.item}
                    </a>
                ))}
            </div>
        </>
    );
};

export { Footer };

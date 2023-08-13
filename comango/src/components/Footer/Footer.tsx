import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import styles from './Footer.module.css';
import logo from '../../assets/images/Logo.svg';
import { menuItemsEn, menuItemsUa } from '../../constants/menuItems';

const Footer = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const menuItems = language === 'en' ? menuItemsEn : menuItemsUa;

    return (
        <>
            <div className={styles.wrapper}>
                <a href="#main" className={styles.logo__wrapper}>
                    <img className={styles.logo} src={logo} alt="logo" />
                </a>
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

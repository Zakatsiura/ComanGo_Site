import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import styles from './Header.module.css';
import logo from '../../assets/images/Logo.svg';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { menuItemsEn, menuItemsUa } from '../../constants/menuItems';

const Header = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const menuItems = language === 'en' ? menuItemsEn : menuItemsUa;

    return (
        <>
            <div className={styles.wrapper}>
                <img className={styles.logo} src={logo} alt="Logo" />
                <div className={styles.menu}>
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
                <LanguageSwitcher />
            </div>
        </>
    );
};

export { Header };

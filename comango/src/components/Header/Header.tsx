import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { menuItemsEn, menuItemsUa } from '../../constants/menuItems';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

const Header = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const menuItems = language === 'en' ? menuItemsEn : menuItemsUa;

    return (
        <>
            <div className={styles.wrapper} id="main">
                <a href="#main">
                    <img className={styles.logo} src={logo} alt="Logo" />
                </a>
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
                <div className={styles.burger}>
                    <BurgerMenu />
                </div>
            </div>
        </>
    );
};

export { Header };

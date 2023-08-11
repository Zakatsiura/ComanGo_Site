import styles from './Header.module.css';
import logo from '../../assets/images/Logo.svg';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { menuItems } from '../Menu/MenuItems';


const Header = () => {
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

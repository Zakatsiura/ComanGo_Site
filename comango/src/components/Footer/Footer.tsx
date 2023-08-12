import styles from './Footer.module.css';
import { menuItems } from '../Menu/MenuItems';
import logo from '../../assets/images/Logo.svg';

const Footer = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <img className={styles.logo} src={logo} alt='logo' />
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

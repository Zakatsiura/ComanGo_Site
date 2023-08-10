import styles from './Header.module.css';
import logo from '../../assets/images/Logo.svg';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <img className={styles.logo} src={logo} alt="Logo" />
                <LanguageSwitcher />
            </div>
        </>
    );
};

export { Header };

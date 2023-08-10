import { Menu } from '../Menu/Menu';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Menu/>
            </div>
        </>
    );
};

export { Footer };

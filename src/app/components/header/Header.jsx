import styles from './Header.module.css';
import Image from 'next/image';


export default function Header({title, subtitle}) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image 
                    src="/image/logo.png" 
                    alt="Logo" 
                    width={230}
                    height={90} 
                />
            </div>
        </header>
    );
}
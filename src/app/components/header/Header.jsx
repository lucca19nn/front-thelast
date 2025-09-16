import styles from './Header.module.css';
import Image from 'next/image';


export default function Header({title, subtitle}) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image 
                    src="/image/logo-thelast.png" 
                    alt="Logo" 
                    width={100}
                    height={90} 
                />
            </div>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <h2 className={styles.subtitle}>{subtitle}</h2>
            </div>
        </header>
    );
}
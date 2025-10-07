import Link from 'next/link';
import Image from 'next/image';
import styles from './Home.module.css';

export default function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Conheça mais sobre: The Last of Us I e II</h1>
                <p className={styles.subtitle}>
                    "When you're lost in the darkness, look for the light."
                </p>

                <div className={styles.categoryGrid}>

                    <div className={styles.categoryCard}>
                        <Image
                            src="/image/principall.jpg"
                            alt="Personagens Principais de The Last of Us"
                            width={400} 
                            height={200} 
                            className={styles.cardImage}
                        />
                        <div className={styles.cardContent}>
                            <h3>Personagens Principais</h3>
                            <p>Conheça os protagonistas que movem a emocionante narrativa do jogo.</p>
                            <Link href="./principal" className={styles.cardButton}>
                                Explorar
                            </Link>
                        </div>
                    </div>

                    <div className={styles.categoryCard}>
                        <Image
                            src="/image/sam.jpeg"
                            alt="Personagens Secundários de The Last of Us"
                            width={400}
                            height={200}
                            className={styles.cardImage}
                        />
                        <div className={styles.cardContent}>
                            <h3>Personagens Secundários</h3>
                            <p>Descubra os aliados e inimigos que moldam o mundo e a jornada dos heróis.</p>
                            <Link href="./secundario" className={styles.cardButton}>
                                Explorar
                            </Link>
                        </div>
                    </div>

                    <div className={styles.categoryCard}>
                        <Image
                            src="/image/infectados.jpg"
                            alt="Infectado de The Last of Us"
                            width={400}
                            height={200}
                            className={styles.cardImage}
                        />
                        <div className={styles.cardContent}>
                            <h3>Tipos de Infectados</h3>
                            <p>Aprenda sobre os diferentes estágios da infecção e as ameaças que eles representam.</p>
                            <Link href="./infectados" className={styles.cardButton}>
                                Explorar
                            </Link>
                        </div>
                    </div>

                    <div className={styles.categoryCard}>
                        <Image
                            src="/image/fazenda.png"
                            alt="Infectado de The Last of Us"
                            width={400}
                            height={200}
                            className={styles.cardImage}
                        />
                        <div className={styles.cardContent}>
                            <h3>Locais</h3>
                            <p>Veja os principais locais da historia</p>
                            <Link href="./local" className={styles.cardButton}>
                                Explorar
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
} 
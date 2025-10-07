'use client';

import React from 'react';
import styles from './SobreMim.module.css';


export default function SobreMimPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src="https://avatars.githubusercontent.com/u/210523238?s=400&u=1f7de7bb1046c618622a3ecb704a0d39f542909e&v=4" 
          alt="Foto de Perfil"
          className={styles.profileImage}
        />
        <h1 className={styles.title}>André Lucca Santos</h1>
        <p className={styles.subtitle}>Desenvolvedor </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Minha História</h2>
        <p className={styles.paragraph}>
          Olá! Meu nome é André Lucca Santos, curso desenvolvimento de sistemas no SENAI Valinhos.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Habilidades e Competências</h2>
        <ul className={styles.skillList}>
          <li className={styles.skillItem}>HTML5 & CSS</li>
          <li className={styles.skillItem}>JavaScript</li>
          <li className={styles.skillItem}>React</li>
          <li className={styles.skillItem}>Next.js</li>
          <li className={styles.skillItem}>Node.js</li>
          <li className={styles.skillItem}>Git & GitHub</li>
          <li className={styles.skillItem}>Figma</li>
          <li className={styles.skillItem}>Metodologias Ágeis</li>
        </ul>
      </section>
      
    <section className={styles.section}>
        <button
            className={styles.button}
            onClick={() => window.location.href = '/'}
        >
            Voltar para Home
        </button>
    </section>
    </div>
  );
}   
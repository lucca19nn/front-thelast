import Image from "next/image";

const styles = {
    main: {
        padding: "28px",
        maxWidth: 1100,
        margin: "0 auto",
        fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        color: "#e6f0e8",
    },
    hero: {
        display: "flex",
        gap: 28,
        alignItems: "center",
        background: "linear-gradient(90deg, #07120f 0%, #0f1a17 100%)",
        padding: 24,
        borderRadius: 12,
        boxShadow:
            "0 8px 32px rgba(0,0,0,0.6), inset 0 -1px 0 rgba(255,255,255,0.02)",
    },
    heroText: {
        flex: 1,
    },
    title: {
        margin: 0,
        fontSize: 36,
        lineHeight: 1.05,
        color: "#f6f9f4",
    },
    subtitle: {
        marginTop: 8,
        marginBottom: 16,
        color: "#bfcfc0",
        fontSize: 14,
    },
    cta: {
        display: "inline-block",
        padding: "10px 14px",
        background: "#6b8b39",
        color: "#08120f",
        fontWeight: 700,
        borderRadius: 8,
        textDecoration: "none",
    },
    coverWrap: {
        width: 420,
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
        flexShrink: 0,
    },
    section: {
        marginTop: 28,
        background: "#0b1512",
        padding: 18,
        borderRadius: 10,
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: 12,
        marginTop: 12,
    },
    card: {
        background:
            "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(0,0,0,0.12))",
        padding: 12,
        borderRadius: 8,
        border: "1px solid rgba(255,255,255,0.03)",
    },
    cardTitle: {
        margin: 0,
        fontSize: 16,
        color: "#f6f9f4",
    },
    cardText: {
        marginTop: 8,
        color: "#c7dac9",
        fontSize: 13,
    },
    smallList: { margin: 0, paddingLeft: 18, color: "#dfeee1" },
};

export default function Home() {
    return (
        <main style={styles.main}>
            <section style={styles.hero}>
                <div style={styles.heroText}>
                    <h1 style={styles.title}>The Last of Us — Parte I</h1>
                    <p style={styles.subtitle}>
                        Uma história de sobrevivência e vínculo em um mundo pós-colapso.
                        Acompanhe Joel e Ellie em uma jornada que mistura emoção, perigo e
                        escolhas difíceis.
                    </p>
                    <a href="#personagens" style={styles.cta}>
                        Ver Personagens
                    </a>
                </div>

                <div style={styles.coverWrap} aria-hidden="true">
                    <Image
                        src="/image/cp.jpg"
                        alt="Capa The Last of Us"
                        width={420}
                        height={260}
                        style={{ objectFit: "cover", display: "block" }}
                        priority
                    />
                </div>
            </section>
        </main>
    );
}

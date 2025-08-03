import React, { useEffect } from 'react';
import './LandingPage.css';

// Componente helper per le icone SVG, per mantenere il codice JSX pulito.
const Icon = ({ name, className }) => {
    const iconPaths = {
        upload: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></>,
        brain: <><path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 1.05.36 2.05.97 2.85L7 11.5v2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V12h2v2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V11.5l1.53-2.15c.6-.8 1-1.8 1-2.85A4.5 4.5 0 0 0 12 2Z" /><path d="M12 14.5a2.5 2.5 0 0 0-2.5 2.5V22h5v-5a2.5 2.5 0 0 0-2.5-2.5Z" /></>,
        calendar: <><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></>,
        check: <path d="M20 6 9 17l-5-5" />,
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {iconPaths[name]}
        </svg>
    );
};

// Funzione helper per tracciare gli eventi in Google Analytics
const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  } else {
    console.warn('Google Analytics gtag function not found.');
  }
};

const LandingPage = () => {
    // Hook per aggiungere una classe 'visible' alle sezioni quando entrano nel viewport
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Opzionale: smette di osservare dopo la prima volta
                }
            });
        }, { threshold: 0.1 });

        const sections = document.querySelectorAll('.fade-in-section');
        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    // --- MODIFICA QUI I TUOI LINK ---
    const paymentLink = "https://tally.so/r/wAeeQy"; // Sostituisci con il tuo link di pagamento (es. Gumroad)
    const waitlistLink = "https://tally.so/r/n0RRaA"; // Sostituisci con il tuo link per la waitlist (es. Tally)
    const youtubeEmbedUrl = "hhttps://youtube.com/shorts/p8Bmj1h3ITE";

    return (
        <div className="landing-body">
            <div className="background-glow"></div>
            <div className="landing-container">
                
                <header className="hero">

                    <div className="hero-brand">
                        <img src="/logo.png" alt="Mentora Logo" className="hero-logo" />
                    </div>

                    <h1 className="hero-title">Dall'ansia da esame alla certezza di essere preparato.</h1>
                    <p className="hero-subtitle">Mentora analizza i tuoi PDF, crea un piano di studi intelligente e ti interroga come un vero professore, per darti la sicurezza che ti serve per l'esame.</p>
                    
                    <div className="video-wrapper">
                        <div className="video-container">
                            {/* MODIFICA QUI: Assicurati che il video sia nella cartella `public` del tuo progetto */}
                            <iframe
                                className="youtube-video"
                                src={youtubeEmbedUrl}
                                title="Mentora App Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className="hero-offer-box fade-in-section">
                        <a href={paymentLink} className="price-highlight" style={{ textDecoration: 'none' }} target="_blank" 
                                rel="noopener noreferrer" onClick={() => trackEvent('begin_checkout', {
                                currency: 'EUR',
                                value: 19.00,
                                event_category: 'Conversion',
                                event_label: 'Early Bird Lifetime Deal'
                              })}>
                            <span className="offer-tag">Accesso 3 mesi</span>
                            <span className="old-price-hero">€90</span>
                            <span className="new-price-hero">€19</span>
                        </a>
                        <div className="cta-content">
                            <h3>Ottieni Accesso di 3 MESI.</h3>
                            <p>Un unico pagamento per avere Mentora per tre mesi, inclusi tutti gli aggiornamenti futuri. OFFERTA LIMITATIA AI PRIMI 100 SOSTENITORI.</p>
                            <a href={paymentLink} className="cta-button"  target="_blank" 
                                rel="noopener noreferrer" onClick={() => trackEvent('begin_checkout', {
                                currency: 'EUR',
                                value: 19.00,
                                event_category: 'Conversion',
                                event_label: 'Early Bird Lifetime Deal'
                              })}>
                                Sblocca l'Offerta a €19
                            </a>
                        </div>
                    </div>
                    
                    <a href={waitlistLink} className="waitlist-link" target="_blank" 
                        rel="noopener noreferrer" onClick={() => trackEvent('generate_lead', {
                        event_category: 'Engagement',
                        event_label: 'Waitlist Signup'
                      })}>
                        Non ancora pronto? Ti avvisiamo al lancio.
                    </a>
                </header>

                <main>
                    <section className="how-it-works fade-in-section">
                        <h2 className="section-title">Il tuo flusso di studio, finalmente preciso.</h2>
                        <div className="steps-grid">
                            <div className="step">
                                <div className="step-icon"><Icon name="upload" /></div>
                                <h3>1. Carica i PDF</h3>
                                <p>Dì addio al caos. Unisci il PDF principale, appunti e slide in un unico posto.</p>
                            </div>
                            <div className="step">
                                <div className="step-icon"><Icon name="calendar" /></div>
                                <h3>2. Ricevi il Piano</h3>
                                <p>Mentora genera un piano di studi giornaliero e ottimizzato. Zero tempo perso.</p>
                            </div>
                            <div className="step">
                                <div className="step-icon"><Icon name="brain" /></div>
                                <h3>3. Fatti Interrogare</h3>
                                <p>Mettiti alla prova con un'AI che simula un esame reale e valuta la tua preparazione.</p>
                            </div>
                        </div>
                    </section>

                    <section className="benefits fade-in-section">
                        <h2 className="section-title">Basta sentirsi impreparati.</h2>
                        <ul className="benefits-list">
                            <li><Icon name="check" className="check-icon" /><div><strong>Acquisisci vera sicurezza.</strong> Fatti interrogare da un'AI che ti chiede dimostrazioni, non ti dà suggerimenti e ti permette di disegnare formule, proprio come a un esame.</div></li>
                            <li><Icon name="check" className="check-icon" /><div><strong>Dì addio al caos.</strong> Tutti i tuoi materiali sono organizzati e collegati per argomento. Niente più file sparsi e tempo perso a cercare.</div></li>
                            <li><Icon name="check" className="check-icon" /><div><strong>Chiarimenti istantanei, senza attrito.</strong> Non capisci un passaggio? Selezionalo e avvia una conversazione con l'AI, che verrà salvata per non farti dimenticare nulla.</div></li>
                            <li><Icon name="check" className="check-icon" /><div><strong>Ricevi feedback oggettivo.</strong> Ottieni una valutazione finale onesta su chiarezza, sicurezza e completezza della tua esposizione. Scopri davvero cosa sai.</div></li>
                        </ul>
                    </section>
                </main>

                <footer className="landing-footer">
                    <p>© 2025 Mentora. Per rendere lo studio universitario meno stressante.</p>
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;
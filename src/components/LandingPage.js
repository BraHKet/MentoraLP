import React, { useEffect } from 'react';
import './LandingPage.css';
import { landingPageEvent, purchaseButtonEvent, mailCollectEvent } from'./metaevents.js';

// Componente helper per le icone SVG
const Icon = ({ name, className }) => {
    const iconPaths = {
        upload: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></>,
        brain: <><path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 1.05.36 2.05.97 2.85L7 11.5v2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V12h2v2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V11.5l1.53-2.15c.6-.8 1-1.8 1-2.85A4.5 4.5 0 0 0 12 2Z" /><path d="M12 14.5a2.5 2.5 0 0 0-2.5 2.5V22h5v-5a2.5 2.5 0 0 0-2.5-2.5Z" /></>,
        calendar: <><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></>,
        check: <path d="M20 6 9 17l-5-5" />,
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
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
    useEffect(() => {
        landingPageEvent();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const sections = document.querySelectorAll('.fade-in-section');
        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    const paymentLink = "https://tally.so/r/wAeeQy";
    const waitlistLink = "https://tally.so/r/n0RRaA";
    const youtubeEmbedUrl = "https://www.youtube.com/embed/sAFrU6_mOWs?autoplay=1&mute=1&rel=0&controls=1&showinfo=0&modestbranding=1";

    const handleOfferClick = () => {
        trackEvent('Offerta-click', {
            currency: 'EUR',
            value: 19.00,
            event_category: 'Conversion',
            event_label: 'Early Bird 3 Mesi'
        });
        purchaseButtonEvent();
        window.open(paymentLink, '_blank', 'noopener,noreferrer');
    };

    const handleWaitlistClick = (e) => {
        trackEvent('mailCollection-click', {
            event_category: 'Engagement',
            event_label: 'Waitlist Signup'
        });
        mailCollectEvent();
        window.open(waitlistLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="landing-body">
            <div className="background-glow"></div>
            <div className="landing-container">
                <header className="hero">
                    <div className="hero-brand">
                        <img src="/logo.png" alt="Mentora Logo" className="hero-logo" />
                        <h1 className="hero-title-brand">Mentora</h1>
                    </div>

                    {/* FASE 1: GANCIO E SPIEGAZIONE DEL PROBLEMA */}
                    <h2 className="hero-title">Il vero problema è non sapere se sei preparato.</h2>
                    <p className="hero-subtitle">Anche io ho passato notti insonni a causa dell'ansia da esame. Per questo ho creato Mentora: il Tutor AI che ti organizza lo studio e ti dice finalmente se sei preparato. **Guarda come funziona:**</p>
                    
                    {/* FASE 2: DIMOSTRAZIONE DEL VALORE (IL VIDEO) */}
                    <div className="video-wrapper">
                        <div className="video-container">
                            <iframe
                                className="youtube-video"
                                src={youtubeEmbedUrl}
                                title="Mentora App Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* FASE 3: OFFERTA (DOPO AVER DIMOSTRATO IL VALORE) */}
                    <div id="offer-section" className="hero-offer-box-revamped fade-in-section" onClick={handleOfferClick}>
                        <div className="offer-text-content">
                            <span className="offer-tag-revamped">🔥 Offerta Pre-Lancio (solo per i primi 100)</span>
                            <h3>Ottieni 3 Mesi di Accesso a Mentora</h3>
                        </div>
                        <div className="offer-price-button">
                            <span className="old-price-revamped">€90</span>
                            <span className="cta-button-revamped">Sblocca Ora a soli €19</span>
                        </div>
                    </div>
                    
                    <a href={waitlistLink} className="waitlist-link" onClick={handleWaitlistClick}>
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
                                <p>Unisci il PDF del corso, appunti e slide in un unico posto per dire addio al caos.</p>
                            </div>
                            <div className="step">
                                <div className="step-icon"><Icon name="calendar" /></div>
                                <h3>2. Ricevi il Piano</h3>
                                <p>L'AI genera un piano di studi giornaliero e ottimizzato per non farti perdere tempo.</p>
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
                            <li><Icon name="check" className="check-icon" /><div><strong>Acquisisci vera sicurezza.</strong> Fatti interrogare da un'AI che ti chiede dimostrazioni e ti permette di scrivere formule, proprio come a un esame.</div></li>
                            <li><Icon name="check" className="check-icon" /><div><strong>Dì addio al caos.</strong> Tutti i tuoi materiali sono organizzati e collegati per argomento. Niente più file sparsi a farti perdere tempo.</div></li>
                            <li><Icon name="check" className="check-icon" /><div><strong>Chiarimenti istantanei, senza attrito.</strong> Non capisci un passaggio? Avvia una conversazione con l'AI direttamente dall'app, senza cambiare contesto.</div></li>
                            <li><Icon name="check" className="check-icon" /><div><strong>Ricevi feedback oggettivo.</strong> Ottieni una valutazione finale onesta sulla tua esposizione per capire davvero cosa sai e dove migliorare.</div></li>
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
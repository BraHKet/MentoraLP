// File: LandingPage.js (aggiornato e ottimizzato)

import React, { useEffect,useState, useRef } from 'react';
import './LandingPage.css';
import { landingPageEvent, purchaseButtonEvent, mailCollectEvent } from './metaevents.js';
import ChatSimulation from './ChatSimulation';

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

const LandingPage = () => {
    useEffect(() => {
        // Logica per animazioni su scroll, se presente
    }, []);

    const paymentLink = "https://tally.so/r/wAeeQy";
    const waitlistLink = "https://tally.so/r/n0RRaA";

    // --- STATO E RIFERIMENTI PER IL SONDAGGIO ---
    const [pollSubmitted, setPollSubmitted] = useState(false); // Ti serve solo questo

    // --- FUNZIONE CORRETTA PER GESTIRE IL CLICK SUL SONDAGGIO ---
    const handlePollClick = (choice) => {
    if (pollSubmitted) return;

    // 1. Recupera i voti esistenti dal localStorage
    // Usiamo un blocco try-catch nel caso in cui i dati fossero corrotti
    let existingVotes = [];
    try {
        // JSON.parse() trasforma la stringa salvata di nuovo in un array
        const savedVotes = localStorage.getItem('pollVotes');
        if (savedVotes) {
            existingVotes = JSON.parse(savedVotes);
        }
    } catch (error) {
        console.error("Errore nel leggere i voti dal localStorage:", error);
        existingVotes = []; // In caso di errore, ripartiamo da un array vuoto
    }

    // 2. Crea il nuovo voto con un codice unico e la risposta
    const newVote = {
        id: Date.now(), // Usiamo il timestamp attuale come codice unico semplice
        answer: choice
    };

    // 3. Aggiungi il nuovo voto all'array esistente
    const updatedVotes = [...existingVotes, newVote];

    // 4. Salva l'array aggiornato nel localStorage
    // JSON.stringify() trasforma l'array in una stringa per poterlo salvare
    localStorage.setItem('pollVotes', JSON.stringify(updatedVotes));

    // 5. Stampa tutti i voti raccolti fino ad ora nella console
    console.log("--- Voti raccolti fino a questo momento ---");
    console.table(updatedVotes); // console.table() li mostra in una tabella leggibile!

    // 6. Aggiorna l'interfaccia utente come prima
    setPollSubmitted(true);
};
    // Questo useEffect si attiva quando la scelta viene impostata,
    // e invia il form nascosto.
    

    const handleOfferClick = () => { window.open(paymentLink, '_blank', 'noopener,noreferrer'); };
    const handleWaitlistClick = () => { window.open(waitlistLink, '_blank', 'noopener,noreferrer'); };

    // --- NUOVA FUNZIONE PER GESTIRE IL CLICK SUL SONDAGGIO ---
    
    
    return (
        <div className="landing-body">
            <div className="background-glow"></div>
            <div className="landing-container">
                <header className="hero">
                    <img src="/logo.png" alt="Mentora Logo" className="hero-logo" />
                </header>

                <main>
                    {/* Sezione 1: Il Problema */}
                    <section className="page-section">
                        <h2 className="section-title">Studiare con un amico a volte non basta...</h2>
                        <div className="scenario-scene">
                            <div className="character-group">
                                <div className="speech-bubble friend-bubble">Uhm... allora, parlami di quella... cosa... la termodinamica?</div>
                                <img src="/omino3.png" alt="Amico che interroga" className="character-image" />
                            </div>
                            <div className="character-group">
                                <div className="speech-bubble user-bubble-static"><em>(Non sa neanche cosa chiedere...)</em></div>
                                <img src="/wojak4.png" alt="Utente che viene interrogato" className="character-image" />
                            </div>
                        </div>
                    </section>

                    {/* Sezione 2: La Soluzione */}
                    <section className="page-section">
                        <h2 className="section-title">Ecco come ti prepara un vero esperto.</h2>
                        <div className="chat-scene-container">
                            <ChatSimulation />
                            <div className="characters-container">
                                <img src="/robot2.png" alt="Tutor AI" className="scene-character robot-character" />
                                <img src="/woj6.png" alt="Studente" className="scene-character student-character" />
                            </div>
                        </div>
                    </section>
                    

                        {/* SEZIONE SONDAGGIO MODIFICATA CON LA LOGICA CORRETTA localStorage.removeItem('pollVotes'); in console per elinare dati*/}
            <section className="page-section">
                
                <div className="poll-container">
                    <h3 className="poll-question">Chi scegli per la tua preparazione?</h3>
                    <div className="poll-options">
                        <button 
                            className="poll-button poll-button-mentora"
                            onClick={() => handlePollClick('Mentora')}
                            disabled={pollSubmitted}
                        >
                            {pollSubmitted ? 'Grazie!' : '🧠 Voglio Mentora'}
                        </button>
                        <button 
                            className="poll-button poll-button-friend"
                            onClick={() => handlePollClick('Amico')}
                            disabled={pollSubmitted}
                        >
                            {pollSubmitted ? 'Voto registrato' : 'Mi fido del mio amico sotto stupefacenti'}
                        </button>
                    </div>
                </div>
            </section>
            


                    {/* Sezione 3: La Call to Action */}
                    <section className="page-section">
                        <h2 className="section-title">Lascia la mail o ottieni l'accesso!</h2>
                        <div id="offer-section" className="cta-container">
                            <div className="hero-offer-box-revamped" onClick={handleOfferClick}>
                                <div className="offer-text-content">
                                    <span className="offer-tag-revamped">🔥 Offerta Pre-Lancio (solo per i primi 100)</span>
                                    <h3>Ottieni 3 Mesi di Accesso a Mentora</h3>
                                </div>
                                <div className="offer-price-button">
                                    <span className="old-price-revamped">€90</span>
                                    <span className="cta-button-revamped">Sblocca Ora a soli €19</span>
                                </div>
                            </div>
                            <button className="waitlist-button" onClick={handleWaitlistClick}>
                                Non ancora pronto? Ti avvisiamo noi al lancio.
                            </button>
                        </div>
                    </section>

                    {/* Sezione 4: Come Funziona */}
                    <section className="page-section">
                        <h2 className="section-title">Il tuo flusso di studio, finalmente preciso.</h2>
                        <div className="steps-grid">
                            <div className="step"><div className="step-icon"><Icon name="upload" /></div><h3>1. Carica i PDF</h3><p>Unisci il PDF del corso, appunti e slide in un unico posto per dire addio al caos.</p></div>
                            <div className="step"><div className="step-icon"><Icon name="calendar" /></div><h3>2. Ricevi il Piano</h3><p>L'AI genera un piano di studi giornaliero e ottimizzato per non farti perdere tempo.</p></div>
                            <div className="step"><div className="step-icon"><Icon name="brain" /></div><h3>3. Fatti Interrogare</h3><p>Mettiti alla prova con un'AI che simula un esame reale e valuta la tua preparazione.</p></div>
                        </div>
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
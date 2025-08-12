// File: InvestorLandingPage.js
// VERSIONE FINALE: Con video pitch di YouTube responsivo integrato.

import React from 'react';
import './InvestorLandingPage.css'; // Si collega al tuo CSS che aggiorneremo

const InvestorLandingPage = () => {

    // [PLACEHOLDER 1] Inserisci qui il link diretto al tuo MVP su Vercel
    const appDemoLink = "https://ai-tutor-jet.vercel.app/";

    // [PLACEHOLDER 2] Inserisci qui SOLO l'ID del tuo video di YouTube
    // Esempio: per 'https://www.youtube.com/watch?v=ABCDE12345', l'ID è 'ABCDE12345'
    const youtubeVideoId = "7dCg9Vc4_JI";

    return (
        <div className="investor-body">
            <div className="background-glow"></div>
            <div className="investor-container">
                
                {/* --- HERO SECTION --- */}
                <header className="investor-hero">
                    <img src="/logo.png" alt="Mentora Logo" className="investor-logo" />
                    <h1 className="investor-title">The AI Tutor that turns studying into mastery.</h1>
                    <p className="investor-subtitle">
                        Mentora moves beyond quizzes. We use conversational AI to simulate real oral exams, 
                        giving students the expert feedback and confidence they need to succeed.
                    </p>
                    <a href={appDemoLink} target="_blank" rel="noopener noreferrer" className="investor-cta-button">
                        Launch App Demo
                    </a>
                </header>

                <main>
                    {/* --- VIDEO PITCH SECTION --- */}
                    <section className="investor-section">
                        {/* Questo è il contenitore del video, che usa il CSS per essere responsive */}
                        <div className="investor-visual-proof">
                            <div className="video-responsive-container">
                                <iframe
    src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`}
    title="Mentora Video Pitch"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
></iframe>
                            </div>
                        </div>
                    </section>
                    
                    {/* --- PROBLEM & SOLUTION SECTION --- */}
                    <section className="investor-section problem-solution-grid">
                        <div className="grid-item">
                            <h2 className="grid-title">The Problem: The "Polite Nod"</h2>
                            <p>Every student knows the feeling of rehearsing a lesson to a friend, only to get a nod of incomprehension. This creates a cycle of insecurity and inefficient studying.</p>
                        </div>
                        <div className="grid-item">
                            <h2 className="grid-title">Our Solution: A Real Conversation</h2>
                            <p>Mentora is an AI Professor that engages students in a natural oral exam. Our ML engine listens to *how* they explain concepts and provides instant, actionable feedback and a grade.</p>
                        </div>
                    </section>
                    
                    {/* --- VISION & IMPACT SECTION --- */}
                    <section className="investor-section vision-section">
                        <h2 className="investor-section-title">Our Vision: The University for Self-Learners</h2>
                        <p className="investor-section-description">
                            Our ultimate goal is to build a complete learning ecosystem, directly supporting **SDG 4: Quality Education**. 
                            By proving we can reliably assess knowledge, we pave the way to make a high-quality, structured education 
                            widely available and affordable for students everywhere.
                        </p>
                    </section>

                    {/* --- TEAM SECTION --- */}
                    <section className="investor-section">
                        <h2 className="investor-section-title">The Team</h2>
                        <div className="team-grid">
                            <div className="team-member">
                                {/* [PLACEHOLDER] Inserisci la tua foto */}
                                <img src="/tuo-avatar.png" alt="Founder" className="team-photo" />
                                <h3 className="team-name">Lorenzo Rizzo</h3>
                                <p className="team-role">Founder & CEO</p>
                            </div>
                            <div className="team-member">
                                 {/* [PLACEHOLDER] Inserisci la foto del tuo co-founder */}
                                <img src="/cofounder-avatar.png" alt="Co-founder" className="team-photo" />
                                <h3 className="team-name">Luca Parini</h3>
                                <p className="team-role">Co-Founder</p>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="investor-footer">
                    <p>© 2025 Mentora. A new chapter in education.</p>
                     {/* [PLACEHOLDER] Inserisci la tua email di contatto */}
                    <p>For inquiries, please contact: <a href="mailto:lore.mail.gl@gmail.com">lore.mail.gl@gmail.com</a></p>
                </footer>
            </div>
        </div>
    );
};

export default InvestorLandingPage;
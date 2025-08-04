import React, { useEffect } from 'react';

// ==========================================================
// NUOVO: Funzione helper per l'evento di acquisto completato di TikTok
// ==========================================================
const trackTikTokCompletePayment = () => {
  // Controlliamo che l'oggetto ttq di TikTok esista
  if (typeof window.ttq === 'object' && window.ttq) {
    // Usiamo l'evento standard di TikTok "CompletePayment"
    window.ttq.track('CompleteRealPaymentMentora', {
        content_type: 'product',
        quantity: 1,
        price: 19.00,
        value: 19.00, // Valore totale dell'acquisto
        currency: 'EUR',
    });
    console.log("TikTok Event Sent: CompletePayment"); // Log per debug
  } else {
    console.warn('TikTok ttq object not found. Event not tracked.');
  }
};
// ==========================================================



function PurchRedirect() {
  // useEffect si attiva una sola volta quando il componente viene caricato
  useEffect(() => {
    // Chiama entrambe le funzioni di tracciamento
    trackTikTokCompletePayment();
  }, []); // L'array vuoto [] assicura che venga eseguito solo al "mount"

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Grazie per il tuo acquisto!</h1>
        <p style={styles.text}>
          Il tuo ordine è stato ricevuto con successo. Riceverai a breve un'email con tutti i dettagli per accedere a Mentora.
        </p>
        {/* Ho rimosso l'onClick perché il componente non deve gestire la navigazione, 
            ma se vuoi puoi usare react-router-dom o un semplice tag <a> */}
        <a href="/" style={{...styles.button, textDecoration: 'none'}}>
          Torna alla Home
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0B0F19', // Ho allineato il colore a quello della landing page
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: "'Inter', sans-serif", // Ho allineato il font
  },
  card: {
    backgroundColor: '#111827', // Colore della card allineato
    borderRadius: '16px',
    padding: '40px 30px',
    maxWidth: '450px',
    width: '100%',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    color: '#F9FAFB',
    border: '1px solid rgba(255, 255, 255, 0.1)', // Bordo allineato
  },
  title: {
    fontSize: '2rem',
    marginBottom: '16px',
    fontWeight: '700',
    color: '#A78BFA', // Colore accento allineato
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '32px',
    color: '#9CA3AF', // Colore secondario allineato
  },
  button: {
    display: 'inline-block', // Necessario per applicare padding e altri stili
    backgroundImage: 'linear-gradient(90deg, #A78BFA, #C4B5FD)',
    color: '#030712',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
};

export default PurchRedirect;
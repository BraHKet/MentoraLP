import React, { useEffect } from 'react';

// ==========================================================
// Funzione helper per l'evento di acquisto di Google Analytics
// ==========================================================
const trackGooglePurchase = () => {
  // Controlliamo che la funzione gtag di Google esista
  if (typeof window.gtag === 'function') {
    // Usiamo l'evento standard "purchase" di Google Analytics 4
    window.gtag('event', 'PagamentoReale-effettuato', {
      transaction_id: `T${Date.now()}`, // ID transazione unico e dinamico
      value: 19.00,
      currency: 'EUR',
      items: [{
        item_id: 'MENTORA_3_MESI',
        item_name: 'Accesso 3 Mesi Mentora',
        price: 19.00,
        quantity: 1
      }]
    });
    console.log("Google Analytics Event Sent: purchase"); // Log per debug
  } else {
    console.warn('Google Analytics gtag function not found. Event not tracked.');
  }
};

// ==========================================================
// Funzione helper per l'evento di acquisto di TikTok
// ==========================================================
const trackTikTokCompletePayment = () => {
  // Controlliamo che l'oggetto ttq di TikTok esista
  if (typeof window.ttq === 'object' && window.ttq) {
    // Usiamo l'evento standard di TikTok "CompletePayment"
    window.ttq.track('Purchase', {
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

function PurchRedirect() {
  // useEffect si attiva una sola volta quando il componente viene caricato
  useEffect(() => {
    // Chiama entrambe le funzioni di tracciamento
    trackGooglePurchase();
    trackTikTokCompletePayment();
  }, []); // L'array vuoto [] assicura che venga eseguito solo al "mount"

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Grazie per il tuo acquisto!</h1>
        <p style={styles.text}>
          Il tuo ordine è stato ricevuto con successo. Riceverai a breve un'email con tutti i dettagli per accedere a Mentora.
        </p>
        <a href="/" style={{...styles.button, textDecoration: 'none'}}>
          Torna alla Home
        </a>
      </div>
    </div>
  );
}

// Stili in linea per il componente
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0B0F19',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: "'Inter', sans-serif",
  },
  card: {
    backgroundColor: '#111827',
    borderRadius: '16px',
    padding: '40px 30px',
    maxWidth: '450px',
    width: '100%',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    color: '#F9FAFB',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '16px',
    fontWeight: '700',
    color: '#A78BFA',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '32px',
    color: '#9CA3AF',
  },
  button: {
    display: 'inline-block',
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
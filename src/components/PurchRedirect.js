import { useEffect } from 'react';

function PurchRedirect() {
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'RealPurchase', { currency: 'EUR', value: 19.00 });
    }
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Grazie per il tuo acquisto!</h1>
        <p style={styles.text}>
          Il tuo ordine è stato ricevuto con successo. Ti contatteremo a breve con tutti i dettagli.
        </p>
        <button
          style={styles.button}
          onClick={() => window.location.href = '/'}
        >
          Torna alla Home
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#121212',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: '12px',
    padding: '40px 30px',
    maxWidth: '400px',
    width: '100%',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    color: '#f0f0f0',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '16px',
    fontWeight: '600',
  },
  text: {
    fontSize: '1.05rem',
    lineHeight: '1.5',
    marginBottom: '32px',
    color: '#ccc',
  },
  button: {
    backgroundColor: '#2979ff',
    color: '#fff',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default PurchRedirect;

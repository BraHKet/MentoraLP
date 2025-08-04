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
    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    padding: '40px',
    maxWidth: '400px',
    width: '100%',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
    fontSize: '1.8rem',
  },
  text: {
    color: '#555',
    fontSize: '1.1rem',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#2575fc',
    color: '#fff',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default PurchRedirect;

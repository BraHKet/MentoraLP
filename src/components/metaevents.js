// Funzione helper di base per tracciare gli eventi di TikTok
const trackTikTokEvent = (eventName, eventParams = {}) => {
  // Controlliamo che l'oggetto ttq di TikTok esista sulla finestra
  if (typeof window.ttq === 'object' && window.ttq) {
    window.ttq.track(eventName, eventParams);
    console.log(`TikTok Event Sent: ${eventName}`, eventParams); // Log per debug
  } else {
    // Messaggio di avviso se lo script di TikTok non si è caricato
    console.warn('TikTok ttq object not found. Event not tracked.');
  }
};

/**
 * Evento per una visita significativa alla Landing Page.
 * In TikTok, non esiste un evento specifico come "Lead-LandingPage". 
 * Il più simile è "ViewContent", che indica che l'utente ha visualizzato
 * una pagina chiave del sito.
 */
export const landingPageEvent = () => { 
    trackTikTokEvent('ViewContent', {
        content_type: 'product',
        content_name: 'Mentora Pre-launch Offer'
    });
};

/**
 * Evento per il click sul pulsante di acquisto.
 * L'evento standard di TikTok per questa azione è "InitiateCheckout".
 * Indica l'inizio del processo di acquisto.
 */
export const purchaseButtonEvent = () => {
    trackTikTokEvent('InitiateCheckout', {
        content_type: 'product',
        quantity: 1,
        price: 19.00,
        value: 19.00, // Valore totale dell'ordine
        currency: 'EUR',
    });
};

/**
 * Evento per l'iscrizione alla waitlist (raccolta email).
 * L'evento standard di TikTok per la raccolta di un contatto è "Contact".
 * È l'equivalente di un "Lead".
 */
export const mailCollectEvent = () => {
    trackTikTokEvent('Contact');
};


/**
 * !! IMPORTANTE !!
 * Evento per l'acquisto completato (da chiamare sulla pagina di ringraziamento).
 * Questo è l'evento più importante per l'ottimizzazione.
 * L'evento standard è "CompletePayment".
 */
export const completePaymentEvent = () => {
    trackTikTokEvent('CompletePayment', {
        content_type: 'product',
        quantity: 1,
        price: 19.00,
        value: 19.00,
        currency: 'EUR',
    });
};

import React from 'react';
import './PrivacyPolicy.css'; // <-- 1. Importa il file CSS

// Dati di configurazione
const APP_NAME = "Mentora";
const CONTACT_EMAIL = "lore.mail.gl@gmail.com";

function TermsOfService() {
  return (
    <div className="legal-container"> {/* <-- 2. Usa la classe CSS */}
      <h1>Termini di Servizio</h1>
      <p><strong>Data di entrata in vigore:</strong> {new Date().toLocaleDateString('it-IT')}</p>

      <p>Benvenuto in {APP_NAME}! Questi Termini di Servizio ("Termini") regolano il tuo utilizzo della nostra applicazione ("Servizio").</p>

      <h2>1. Accettazione dei Termini</h2>
      <p>Accedendo o utilizzando il nostro Servizio, accetti di essere vincolato da questi Termini e dalla nostra Informativa sulla Privacy.</p>

      <h2>2. Utilizzo del Servizio e Google Drive</h2>
      <p>
        Il nostro Servizio ti permette di creare e salvare file direttamente sul tuo Account Google Drive. Accettando questi Termini, riconosci che:
      </p>
      <ul>
        <li>Sei l'unico responsabile dei contenuti che crei e salvi sul tuo Google Drive tramite il nostro Servizio.</li>
        <li>La nostra applicazione agisce come strumento per creare e gestire questi file, ma la proprietà e la responsabilità dei dati rimangono tue.</li>
        <li>Ti impegni a utilizzare il Servizio in modo responsabile e a non utilizzarlo per scopi illegali o non autorizzati.</li>
      </ul>

      <h2>3. Limitazione di Responsabilità</h2>
      <p>Il Servizio è fornito "così com'è", senza garanzie di alcun tipo. Nei limiti massimi consentiti dalla legge, non saremo responsabili per eventuali danni, inclusa la perdita di dati, derivanti dall'uso del nostro Servizio.</p>
      
      <h2>4. Contatti</h2>
      <p>Per qualsiasi domanda relativa a questi Termini, puoi contattarci a: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
    </div>
  );
}

export default TermsOfService;
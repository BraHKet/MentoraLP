import React from 'react';
import './PrivacyPolicy.css'; // <-- 1. Importa il file CSS

// Dati di configurazione
const APP_NAME = "Mentora";
const CONTACT_EMAIL = "lore.mail.gl@gmail.com";

function PrivacyPolicy() {
  return (
    <div className="legal-container"> {/* <-- 2. Usa la classe CSS */}
      <h1>Informativa sulla Privacy</h1>
      <p><strong>Data di entrata in vigore:</strong> {new Date().toLocaleDateString('it-IT')}</p>
      
      <p>La presente Informativa sulla Privacy descrive come {APP_NAME} ("noi") raccoglie, utilizza e divulga le tue informazioni in relazione all'uso del nostro servizio.</p>

      <h2>1. Informazioni che Raccogliamo</h2>
      <h4>Dati di base dell'Account Google</h4>
      <p>Quando accedi alla nostra applicazione tramite il tuo Account Google, riceviamo da Google le seguenti informazioni di base per creare e gestire il tuo profilo:</p>
      <ul>
        <li>Nome e cognome</li>
        <li>Indirizzo email</li>
        <li>Immagine del profilo (avatar)</li>
      </ul>
      
      {/* SEZIONE FONDAMENTALE AGGIUNTA */}
      <h4>Dati e Permessi di Google Drive</h4>
      <p>Per fornire le sue funzionalità principali, la nostra applicazione richiede l'autorizzazione per accedere al tuo Google Drive. Questa autorizzazione è utilizzata esclusivamente per:</p>
      <ul>
          <li><strong>Caricare file:</strong> Per salvare i documenti e i file che crei specificamente all'interno della nostra applicazione direttamente nel tuo Google Drive.</li>
          <li><strong>Leggere file:</strong> Per accedere e visualizzare SOLO i file che sono stati precedentemente creati e salvati dalla nostra applicazione.</li>
      </ul>
      <p className="important-notice">
        <strong>Nota importante:</strong> La nostra applicazione NON ha il permesso di leggere, modificare o eliminare altri file presenti nel tuo Google Drive che non siano stati creati da noi. Il nostro accesso è limitato ai soli file gestiti dalla nostra applicazione.
      </p>

      <h2>2. Come Utilizziamo le Informazioni</h2>
      <p>Utilizziamo le informazioni e i permessi richiesti per le seguenti finalità:</p>
      <ul>
        <li>Per fornire, operare e mantenere le funzionalità del nostro servizio, come il salvataggio e il recupero dei tuoi lavori.</li>
        <li>Per identificarti come utente e personalizzare la tua esperienza.</li>
      </ul>

      <h2>3. Clausola Obbligatoria per Google</h2>
      <p>
        L'uso e il trasferimento ad altre app delle informazioni ricevute dalle API di Google aderiranno alle{' '}
        <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">
          Norme sui dati utente dei servizi API di Google
        </a>
        , inclusi i requisiti di utilizzo limitato.
      </p>

      <h2>4. Contatti</h2>
      <p>Per qualsiasi domanda relativa a questa Informativa sulla Privacy, puoi contattarci a: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
    </div>
  );
}

export default PrivacyPolicy;
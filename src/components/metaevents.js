export const landingPageEvent = () => { 
    if (window.fbq) {
        window.fbq('track', 'Lead-LandingPage');
    } else {
        console.warn("fbq non è definita");
    }
}

export const purchaseButtonEvent = () => {
  if (window.fbq) {
    window.fbq('track', 'PurchaseButtonPress');
  } else {
    console.warn('fbq non è definita');
  }
};

export const mailCollectEvent = () => {
  if (window.fbq) {
    window.fbq('track', 'MailCollect');
  } else {
    console.warn('fbq non è definita');
  }
};
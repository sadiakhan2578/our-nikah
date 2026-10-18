// STEP 1: Create a Google Form and link responses to Google Sheets.
// STEP 2: Paste its PUBLIC RESPONDER link below (not the editor link).
// Example: const RSVP_FORM_URL = "https://docs.google.com/forms/d/e/FORM_ID/viewform";
const RSVP_FORM_URL = "";

const button = document.getElementById('rsvp-link');
const help = document.getElementById('rsvp-help');
if (RSVP_FORM_URL.startsWith('https://') && RSVP_FORM_URL.includes('forms')) {
  button.href = RSVP_FORM_URL;
  button.textContent = 'RESPOND TO RSVP';
  button.removeAttribute('aria-disabled');
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  help.textContent = 'Your response will be recorded privately.';
} else {
  button.addEventListener('click', event => event.preventDefault());
}

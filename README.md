# Sadia & Khalid — Nikah Invitation

A free, static, mobile-friendly Nikah invitation for GitHub Pages.

## Set up your RSVP collection
1. Open https://forms.google.com and create a **Blank form** named `Sadia & Khalid — Nikah RSVP`.
2. Add these questions (make the first four required):
   - Full name — Short answer
   - Will you attend the Nikah ceremony? — Multiple choice: Yes / No
   - Will you join us for a meal afterward? — Multiple choice: Yes / No / Not sure
   - How many people are included in your response (including yourself)? — Dropdown: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (or Short answer with number validation)
   - Dietary restrictions or other notes — Paragraph (optional)
3. Under **Responses**, choose **Link to Sheets** / **View in Sheets** and create a spreadsheet. Keep it private; do not publish it.
4. Under **Settings**, ensure guests outside your organization can respond, turn off 'Limit to 1 response' if that would require Google sign-in, and check that the form is accepting responses. Avoid collecting email addresses unless you need them.
5. Publish the form if Google Forms asks you to, then copy the **responder link** (not the editor link).
6. In `script.js`, replace `const RSVP_FORM_URL = "";` with the actual link in quotes.
7. Open `index.html` locally and click RSVP to verify it opens the form. Submit a test response and verify it appears in your Sheet; then delete the test row if desired.

**Privacy:** Your GitHub Pages website is public. Never put guest responses, private Google Sheets URLs, secrets, or contact lists in the repository. The responder link is public; the spreadsheet remains private if you do not share it.

## Publish for free using GitHub Pages
1. Sign in to https://github.com and create a **public** repository, e.g. `our-nikah`.
2. Upload `index.html`, `style.css`, and `script.js` into the **root** of the repository, then commit.
3. Open repository **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**; choose `main` and `/ (root)`; click **Save**.
4. Wait for the deployment. Your URL will be `https://YOUR-USERNAME.github.io/our-nikah/` (adjust to your actual repository name).
5. Test the site on your phone and submit a test RSVP. Send the URL via WhatsApp.

## Important details
- The mosque name is linked to a Google Maps **search**, not a verified street address. Verify the exact address with the mosque before sharing the invitation.
- The meal location is intentionally not specified. Do not imply that a meal venue is confirmed.
- RSVP deadline is October 23, 2026. The site displays this deadline but **does not automatically close the form**; close responses manually in Google Forms when ready.
- This version opens Google Forms in a new tab. A more seamless embedded form is possible later.
- Hosting is free within GitHub Pages' normal usage limits; a custom domain is optional and not required.

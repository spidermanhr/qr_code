let qrcodeInstance = null;

// Objekt s prijevodima za oba jezika
const translations = {
    hr: {
        title: "Generator QR kodova",
        subtitle: "Brzo i jednostavno pretvorite bilo koji tekst, web adresu, e-mail ili telefonski broj u funkcionalan QR kod.",
        select_type: "Odaberi tip QR koda:",
        options: {
            url: "URL",
            text: "Tekst",
            email: "E-mail",
            sms: "SMS",
            wifi: "Wi-Fi",
            vcard: "vCard (Kontakt)",
            bitcoin: "Bitcoin",
            twitter: "Twitter",
            facebook: "Facebook"
        },
        form: {
            url_label: "URL:",
            url_placeholder: "https://www.primjer.com",
            text_label: "Tekst:",
            text_placeholder: "Upišite svoj tekst ovdje...",
            email_label: "E-mail adresa:",
            email_placeholder: "vas.email@primjer.com",
            email_subject_label: "Predmet:",
            email_subject_placeholder: "Predmet poruke",
            email_body_label: "Poruka:",
            email_body_placeholder: "Sadržaj poruke...",
            sms_number_label: "Broj telefona:",
            sms_number_placeholder: "+385 91 123 4567",
            sms_text_label: "Poruka:",
            sms_text_placeholder: "Poruka...",
            wifi_ssid_label: "Naziv mreže (SSID):",
            wifi_ssid_placeholder: "Naziv mreže",
            wifi_hidden_label: "Skrivena mreža (hidden network)",
            wifi_password_label: "Lozinka:",
            wifi_show_password: "Prikaži lozinku",
            wifi_encryption_label: "Tip enkripcije:",
            wifi_wpa: "WPA/WPA2",
            wifi_wep: "WEP",
            wifi_open: "Otvorena mreža",
            vcard_name_label: "Ime i prezime:",
            vcard_phone_label: "Broj telefona:",
            vcard_email_label: "E-mail:",
            vcard_org_label: "Organizacija:",
            vcard_title_label: "Titula:",
            btc_address_label: "Bitcoin adresa:",
            btc_amount_label: "Iznos (opcionalno):",
            twitter_username_label: "Korisničko ime (@):",
            twitter_username_placeholder: "korisnicko_ime",
            facebook_url_label: "Facebook URL profila:",
            facebook_url_placeholder: "https://www.facebook.com/vaš.profil"
        },
        buttons: {
            generate: "Generiraj QR kod",
            download: "Preuzmi PDF",
            reset: "Ispočetka"
        },
        pdf: {
            title_url: "URL adresa",
            title_text: "Tekstualna poruka",
            title_email: "E-mail poruka",
            title_sms: "SMS poruka",
            title_wifi: "Wi-Fi mreža",
            title_vcard: "Podaci za kontakt (vCard)",
            title_bitcoin: "Bitcoin adresa",
            title_twitter: "Twitter profil",
            title_facebook: "Facebook profil",
            title_default: "Detalji QR koda",
            details_scan: "Skenirajte za više informacija.",
            details_address: "Adresa:",
            details_subject: "Predmet:",
            details_message: "Poruka:",
            details_number: "Broj:",
            details_ssid: "SSID:",
            details_password: "Lozinka:",
            details_encryption: "Enkripcija:",
            details_name: "Ime i prezime:",
            details_phone: "Broj telefona:",
            details_email: "E-mail:",
            details_org: "Organizacija:",
            details_title: "Titula:",
            details_amount: "Iznos:",
            details_username: "Korisničko ime:",
            details_url: "URL:",
            alert_generate_first: "Prvo generirajte QR kod.",
            alert_error: "Greška pri generiranju PDF-a. Provjerite konzolu za detalje."
        }
    },
    en: {
        title: "QR Code Generator",
        subtitle: "Quickly and easily convert any text, web address, email, or phone number into a functional QR code.",
        select_type: "Select QR code type:",
        options: {
            url: "URL",
            text: "Text",
            email: "Email",
            sms: "SMS",
            wifi: "Wi-Fi",
            vcard: "vCard (Contact)",
            bitcoin: "Bitcoin",
            twitter: "Twitter",
            facebook: "Facebook"
        },
        form: {
            url_label: "URL:",
            url_placeholder: "https://www.example.com",
            text_label: "Text:",
            text_placeholder: "Enter your text here...",
            email_label: "Email address:",
            email_placeholder: "your.email@example.com",
            email_subject_label: "Subject:",
            email_subject_placeholder: "Message subject",
            email_body_label: "Message:",
            email_body_placeholder: "Message content...",
            sms_number_label: "Phone number:",
            sms_number_placeholder: "+44 7700 900358",
            sms_text_label: "Message:",
            sms_text_placeholder: "Message...",
            wifi_ssid_label: "Network name (SSID):",
            wifi_ssid_placeholder: "Network name",
            wifi_hidden_label: "Hidden network",
            wifi_password_label: "Password:",
            wifi_show_password: "Show password",
            wifi_encryption_label: "Encryption type:",
            wifi_wpa: "WPA/WPA2",
            wifi_wep: "WEP",
            wifi_open: "Open network",
            vcard_name_label: "Full name:",
            vcard_phone_label: "Phone number:",
            vcard_email_label: "Email:",
            vcard_org_label: "Organization:",
            vcard_title_label: "Title:",
            btc_address_label: "Bitcoin address:",
            btc_amount_label: "Amount (optional):",
            twitter_username_label: "Username (@):",
            twitter_username_placeholder: "username",
            facebook_url_label: "Facebook profile URL:",
            facebook_url_placeholder: "https://www.facebook.com/your.profile"
        },
        buttons: {
            generate: "Generate QR Code",
            download: "Download PDF",
            reset: "Reset"
        },
        pdf: {
            title_url: "URL Address",
            title_text: "Text Message",
            title_email: "Email Message",
            title_sms: "SMS Message",
            title_wifi: "Wi-Fi Network",
            title_vcard: "Contact Info (vCard)",
            title_bitcoin: "Bitcoin Address",
            title_twitter: "Twitter Profile",
            title_facebook: "Facebook Profile",
            title_default: "QR Code Details",
            details_scan: "Scan for more info.",
            details_address: "Address:",
            details_subject: "Subject:",
            details_message: "Message:",
            details_number: "Number:",
            details_ssid: "SSID:",
            details_password: "Password:",
            details_encryption: "Encryption:",
            details_name: "Full Name:",
            details_phone: "Phone Number:",
            details_email: "Email:",
            details_org: "Organization:",
            details_title: "Title:",
            details_amount: "Amount:",
            details_username: "Username:",
            details_url: "URL:",
            alert_generate_first: "Please generate a QR code first.",
            alert_error: "Error generating PDF. Check the console for details."
        }
    }
};

let currentLang = 'hr'; 

document.addEventListener('DOMContentLoaded', () => {
    const qrTypeSelect = document.getElementById('qrType');
    qrTypeSelect.addEventListener('change', updateForm);

    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('lang-hr').addEventListener('click', () => setLanguage('hr'));
    
    setLanguage(currentLang);
    updateForm();
});

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[currentLang];

    // Ažuriranje glavnih elemenata
    document.getElementById('main-title').textContent = t.title;
    document.getElementById('main-subtitle').textContent = t.subtitle;
    document.getElementById('label-qrType').textContent = t.select_type;
    document.getElementById('btn-generate').textContent = t.buttons.generate;
    document.getElementById('btn-download').textContent = t.buttons.download;
    document.getElementById('btn-reset').textContent = t.buttons.reset;

    // Ažuriranje opcija u select izborniku
    const qrTypeSelect = document.getElementById('qrType');
    qrTypeSelect.options[0].textContent = t.options.url;
    qrTypeSelect.options[1].textContent = t.options.text;
    qrTypeSelect.options[2].textContent = t.options.email;
    qrTypeSelect.options[3].textContent = t.options.sms;
    qrTypeSelect.options[4].textContent = t.options.wifi;
    qrTypeSelect.options[5].textContent = t.options.vcard;
    qrTypeSelect.options[6].textContent = t.options.bitcoin;
    qrTypeSelect.options[7].textContent = t.options.twitter;
    qrTypeSelect.options[8].textContent = t.options.facebook;
    
    // Ažuriranje dinamičkog obrasca
    updateForm();
}

function updateForm() {
    const qrType = document.getElementById('qrType').value;
    const formContainer = document.getElementById('form-container');
    const t = translations[currentLang];
    let formHtml = '';

    if (qrcodeInstance) {
        document.getElementById('qrcode').innerHTML = '';
        qrcodeInstance = null;
    }

    switch (qrType) {
        case 'url':
            formHtml = `
                <label for="url">${t.form.url_label}</label>
                <input type="text" id="url" name="url" placeholder="${t.form.url_placeholder}" required>
            `;
            break;
        case 'text':
            formHtml = `
                <label for="text">${t.form.text_label}</label>
                <textarea id="text" name="text" rows="4" placeholder="${t.form.text_placeholder}" required></textarea>
            `;
            break;
        case 'email':
            formHtml = `
                <label for="email">${t.form.email_label}</label>
                <input type="email" id="email" name="email" placeholder="${t.form.email_placeholder}" required>
                <label for="emailSubject">${t.form.email_subject_label}</label>
                <input type="text" id="emailSubject" name="emailSubject" placeholder="${t.form.email_subject_placeholder}">
                <label for="emailBody">${t.form.email_body_label}</label>
                <textarea id="emailBody" name="emailBody" rows="4" placeholder="${t.form.email_body_placeholder}"></textarea>
            `;
            break;
        case 'sms':
            formHtml = `
                <label for="smsNumber">${t.form.sms_number_label}</label>
                <input type="tel" id="smsNumber" name="smsNumber" placeholder="${t.form.sms_number_placeholder}" required>
                <label for="smsText">${t.form.sms_text_label}</label>
                <textarea id="smsText" name="smsText" rows="4" placeholder="${t.form.sms_text_placeholder}"></textarea>
            `;
            break;
        case 'wifi':
            formHtml = `
                <label for="ssid">${t.form.wifi_ssid_label}</label>
                <input type="text" id="ssid" name="ssid" placeholder="${t.form.wifi_ssid_placeholder}" required>
                <div class="checkbox-container">
                    <input type="checkbox" id="hidden-network">
                    <label for="hidden-network">${t.form.wifi_hidden_label}</label>
                </div>
                <label for="password">${t.form.wifi_password_label}</label>
                <input type="password" id="password" name="password">
                <div class="checkbox-container">
                    <input type="checkbox" id="show-password" onclick="togglePassword()">
                    <label for="show-password">${t.form.wifi_show_password}</label>
                </div>
                <label for="encryption">${t.form.wifi_encryption_label}</label>
                <select id="encryption" name="encryption">
                    <option value="WPA">${t.form.wifi_wpa}</option>
                    <option value="WEP">${t.form.wifi_wep}</option>
                    <option value="nopass">${t.form.wifi_open}</option>
                </select>
            `;
            break;
        case 'vcard':
            formHtml = `
                <label for="vcardName">${t.form.vcard_name_label}</label>
                <input type="text" id="vcardName" name="vcardName">
                <label for="vcardPhone">${t.form.vcard_phone_label}</label>
                <input type="tel" id="vcardPhone" name="vcardPhone">
                <label for="vcardEmail">${t.form.vcard_email_label}</label>
                <input type="email" id="vcardEmail" name="vcardEmail">
                <label for="vcardOrg">${t.form.vcard_org_label}</label>
                <input type="text" id="vcardOrg" name="vcardOrg">
                <label for="vcardTitle">${t.form.vcard_title_label}</label>
                <input type="text" id="vcardTitle" name="vcardTitle">
            `;
            break;
        case 'bitcoin':
            formHtml = `
                <label for="btcAddress">${t.form.btc_address_label}</label>
                <input type="text" id="btcAddress" name="btcAddress" required>
                <label for="btcAmount">${t.form.btc_amount_label}</label>
                <input type="number" id="btcAmount" name="btcAmount" step="any">
            `;
            break;
        case 'twitter':
            formHtml = `
                <label for="twitterUsername">${t.form.twitter_username_label}</label>
                <input type="text" id="twitterUsername" name="twitterUsername" placeholder="${t.form.twitter_username_placeholder}" required>
            `;
            break;
        case 'facebook':
            formHtml = `
                <label for="facebookUrl">${t.form.facebook_url_label}</label>
                <input type="text" id="facebookUrl" name="facebookUrl" placeholder="${t.form.facebook_url_placeholder}" required>
            `;
            break;
    }

    formContainer.innerHTML = formHtml;
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('show-password');

    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

function generateQRCode() {
    const qrType = document.getElementById('qrType').value;
    let qrData = '';

    switch (qrType) {
        case 'url':
            qrData = document.getElementById('url').value;
            break;
        case 'text':
            qrData = document.getElementById('text').value;
            break;
        case 'email':
            const email = document.getElementById('email').value;
            const subject = document.getElementById('emailSubject').value;
            const body = document.getElementById('emailBody').value;
            qrData = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            break;
        case 'sms':
            const number = document.getElementById('smsNumber').value;
            const text = document.getElementById('smsText').value;
            qrData = `smsto:${encodeURIComponent(number)}:${encodeURIComponent(text)}`;
            break;
        case 'wifi':
            const ssid = document.getElementById('ssid').value;
            const password = document.getElementById('password').value;
            const encryption = document.getElementById('encryption').value;
            const isHidden = document.getElementById('hidden-network').checked;
            
            let hiddenString = isHidden ? 'H:true;' : '';
            qrData = `WIFI:S:${encodeURIComponent(ssid)};T:${encryption};P:${encodeURIComponent(password)};${hiddenString};`;
            break;
        case 'vcard':
            const name = document.getElementById('vcardName').value;
            const phone = document.getElementById('vcardPhone').value;
            const emailVcard = document.getElementById('vcardEmail').value;
            const org = document.getElementById('vcardOrg').value;
            const title = document.getElementById('vcardTitle').value;
            qrData = `BEGIN:VCARD\nVERSION:3.0\nN:${encodeURIComponent(name)}\nTEL:${encodeURIComponent(phone)}\nEMAIL:${encodeURIComponent(emailVcard)}\nORG:${encodeURIComponent(org)}\nTITLE:${encodeURIComponent(title)}\nEND:VCARD`;
            break;
        case 'bitcoin':
            const btcAddress = document.getElementById('btcAddress').value;
            const btcAmount = document.getElementById('btcAmount').value;
            if (btcAmount) {
                qrData = `bitcoin:${encodeURIComponent(btcAddress)}?amount=${encodeURIComponent(btcAmount)}`;
            } else {
                qrData = `bitcoin:${encodeURIComponent(btcAddress)}`;
            }
            break;
        case 'twitter':
            const twitterUser = document.getElementById('twitterUsername').value;
            qrData = `https://twitter.com/${encodeURIComponent(twitterUser)}`;
            break;
        case 'facebook':
            const facebookUrl = document.getElementById('facebookUrl').value;
            qrData = facebookUrl;
            break;
    }

    if (qrcodeInstance) {
        document.getElementById('qrcode').innerHTML = '';
    }

    qrcodeInstance = new QRCode(document.getElementById("qrcode"), {
        text: qrData,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

function generatePdf() {
    const qrcodeElement = document.getElementById('qrcode');
    const qrType = document.getElementById('qrType').value;
    const t = translations[currentLang];
    
    if (qrcodeElement.innerHTML === '') {
        alert(t.pdf.alert_generate_first);
        return;
    }

    html2canvas(qrcodeElement).then(canvas => {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();
        
        const imgData = canvas.toDataURL('image/png');
        
        const qrSize = 50;
        const pageWidth = pdf.internal.pageSize.getWidth();
        
        const qrX = (pageWidth - qrSize) / 2;
        const qrY = 30;

        pdf.addImage(imgData, 'PNG', qrX, qrY, qrSize, qrSize);
        
        let title = '';
        let details = [];

        switch (qrType) {
            case 'url':
                title = t.pdf.title_url;
                details.push(document.getElementById('url').value);
                break;
            case 'text':
                title = t.pdf.title_text;
                details.push(document.getElementById('text').value);
                break;
            case 'email':
                title = t.pdf.title_email;
                details.push(`${t.pdf.details_address} ${document.getElementById('email').value}`);
                details.push(`${t.pdf.details_subject} ${document.getElementById('emailSubject').value}`);
                details.push(`${t.pdf.details_message} ${document.getElementById('emailBody').value}`);
                break;
            case 'sms':
                title = t.pdf.title_sms;
                details.push(`${t.pdf.details_number} ${document.getElementById('smsNumber').value}`);
                details.push(`${t.pdf.details_message} ${document.getElementById('smsText').value}`);
                break;
            case 'wifi':
                title = t.pdf.title_wifi;
                details.push(`${t.pdf.details_ssid} ${document.getElementById('ssid').value}`);
                details.push(`${t.pdf.details_password} ${document.getElementById('password').value}`);
                details.push(`${t.pdf.details_encryption} ${document.getElementById('encryption').value}`);
                break;
            case 'vcard':
                title = t.pdf.title_vcard;
                details.push(`${t.pdf.details_name} ${document.getElementById('vcardName').value}`);
                details.push(`${t.pdf.details_phone} ${document.getElementById('vcardPhone').value}`);
                details.push(`${t.pdf.details_email} ${document.getElementById('vcardEmail').value}`);
                details.push(`${t.pdf.details_org} ${document.getElementById('vcardOrg').value}`);
                details.push(`${t.pdf.details_title} ${document.getElementById('vcardTitle').value}`);
                break;
            case 'bitcoin':
                title = t.pdf.title_bitcoin;
                details.push(`${t.pdf.details_address} ${document.getElementById('btcAddress').value}`);
                details.push(`${t.pdf.details_amount} ${document.getElementById('btcAmount').value}`);
                break;
            case 'twitter':
                title = t.pdf.title_twitter;
                details.push(`${t.pdf.details_username} @${document.getElementById('twitterUsername').value}`);
                break;
            case 'facebook':
                title = t.pdf.title_facebook;
                details.push(`${t.pdf.details_url} ${document.getElementById('facebookUrl').value}`);
                break;
            default:
                title = t.pdf.title_default;
                details.push(t.pdf.details_scan);
                break;
        }

        const textStartY = qrY + qrSize + 15;
        pdf.setFontSize(14);
        pdf.text(title, pageWidth / 2, textStartY, { align: 'center' });

        pdf.setFontSize(10);
        const detailsX = 20;
        let currentY = textStartY + 10;

        details.forEach(line => {
            const splitText = pdf.splitTextToSize(line, pageWidth - 40);
            pdf.text(splitText, detailsX, currentY);
            currentY += (pdf.getLineHeight() * splitText.length);
        });

        pdf.save(`qr-kod-${currentLang}.pdf`);

    }).catch(error => {
        console.error('Došlo je do greške prilikom generiranja PDF-a:', error);
        alert(t.pdf.alert_error);
    });
}

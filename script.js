document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    const userInfo = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`;
    
    const qr = qrcode(0, 'M');
    qr.addData(userInfo);
    qr.make();
    
    document.getElementById('qrcode').innerHTML = qr.createImgTag(5);
});

// QR Code Scanner
const html5QrCode = new Html5Qrcode("scanner");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    document.getElementById("scan-result").innerHTML = `
        <h3>Scan Successful!</h3>
        <p>Decoded Text: ${decodedText}</p>
    `;
    html5QrCode.stop();
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };

html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
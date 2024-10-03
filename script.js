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

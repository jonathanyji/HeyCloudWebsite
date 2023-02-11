function sendEmail() {
    console.log("SEND EMAIL BUTTON")
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jonathanyji98@hotmail.com",
        Password : "732819FFAB592D96FE2D7B3103A91CA4B6FE",
        To : 'iamjonny98@gmail.com',
        From : "jonathanyji98@hotmail.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
}
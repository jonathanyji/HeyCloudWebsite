function sendEmail() {
    console.log("SEND EMAIL BUTTON 3")
    Email.send({
        SecureToken : "18GPG1N7N6RR3bMiaDEneMzWPXKFBECqxq",
        To : 'jonathanyji98@hotmail.com',
        From : "iamjonny98@gmail.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
}
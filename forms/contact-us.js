function sendEmail() {
    console.log("SEND EMAIL BUTTON")
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "iamjonny98@gmail.com",
        Password : "18GPG1N7N6RR3bMiaDEneMzWPXKFBECqxq",
        To : 'iamjonny98@gmail.com',
        From : "iamjonny98@gmail.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
}
function sendEmail() {
    console.log("SEND EMAIL BUTTON 4")
    Email.send({
        SecureToken : "18GPG1N7N6RR3bMiaDEneMzWPXKFBECqxq",
        To : "jonathanyji98@hotmail.com",
        From : "iamjonny98@gmail.com",
        Subject : "Test email",
        Body : "This is just a test email"
    }).then(
      message => alert(message)
    );
}
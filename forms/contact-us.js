function sendEmail() {
    console.log("SEND EMAIL BUTTON 2")
    Email.send({
        Host : "smtp.gmail.com",
        Username : "iamjonny98@gmail.com",
        Password : "18GPG1N7N6RR3bMiaDEneMzWPXKFBECqxq",
        Domain: "gmail.com",
        Port: 25,
        To : 'jonathanyji98@hotmail.com',
        From : "iamjonny98@gmail.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
}
function sendEmail() {
    console.log("SEND EMAIL BUTTON 2")
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "iamjonny98@gmail.com",
        Password : "clzuwcsdhybjvfml",
        To : 'jonathanyji98@hotmail.com',
        From : "iamjonny98@gmail.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
}
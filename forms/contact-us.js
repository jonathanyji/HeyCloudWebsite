function sendEmailFrom(){
    var email = "admin@heycloud.com.sg";
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("message").value;
    window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    return false;
}
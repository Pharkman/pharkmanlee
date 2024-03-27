
function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Check if required fields are empty
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all required fields.");
        return; // Exit the function if any field is empty
    }

    var content = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    const serviceId = "service_pzlzzza";
    const templateId = "template_m29kdpf";

    emailjs.send(serviceId, templateId, content)
        .then(
            (res) => {
                // Clear input fields after sending the email
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";

                console.log(res);
                alert('Message Sent Successfully');
            },
            (error) => {
                console.error("Error sending email:", error);
                alert('Failed to send message. Please try again later.');
            }
        );
}








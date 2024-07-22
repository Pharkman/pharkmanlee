function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Clear previous error messages
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("subjectError").style.display = "none";
    document.getElementById("messageError").style.display = "none";
    document.getElementById("formAlert").style.display = "none";

    var hasError = false;

    // Check if required fields are empty
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        document.getElementById("nameError").style.display = "block";
        hasError = true;
    }

    // Email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        document.getElementById("emailError").style.display = "block";
        hasError = true;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        document.getElementById("emailError").style.display = "block";
        hasError = true;
    }

    // if (subject === "") {
    //     document.getElementById("subjectError").textContent = "Subject is required.";
    //     document.getElementById("subjectError").style.display = "block";
    //     hasError = true;
    // }
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        document.getElementById("messageError").style.display = "block";
        hasError = true;
    }

    if (hasError) {
        showAlert('Please fill in all required fields and provide a valid email address.', 'error');
        return; // Exit the function if any field is empty or invalid
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

                showAlert('Message Sent Successfully', 'success');
            },
            (error) => {
                console.error("Error sending email:", error);
                showAlert('Failed to send message. Please try again later.', 'error');
            }
        );
}

function showAlert(message, type) {
    var alertBox = document.getElementById("formAlert");
    alertBox.textContent = message;
    alertBox.style.display = "block";

    if (type === 'success') {
        alertBox.className = "alert-message alert-success";
    } else {
        alertBox.className = "alert-message alert-error";
    }
}

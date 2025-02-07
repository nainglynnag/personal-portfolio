document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const accessKey = document.getElementById("access_key").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const responseMessage = document.getElementById("responseMessage");

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(pattern)){
        responseMessage.innerText = "Invalid email address!";
        responseMessage.classList.add("text-red-500");
        setTimeout(() => {
            responseMessage.innerText = "";
            responseMessage.classList.remove("text-red-500");
        }, 3000);
        return;
    }    

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            access_key: accessKey,
            name: name,
            email: email,
            subject: subject,
            message: message
        })
    });

    const result = await response.json();

    if (result.success) {
        responseMessage.innerText = "Message sent successfully!";
        responseMessage.classList.add("text-green-500");
        document.getElementById("contactForm").reset();
    } else {
        responseMessage.innerText = "Error sending message!";
        responseMessage.classList.add("text-red-500");
    }
    setTimeout(() => {
        responseMessage.innerText = "";
        responseMessage.classList.remove("text-green-500", "text-red-500");
    }, 3000);
});
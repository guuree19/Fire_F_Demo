document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = `<p>Thank you, <strong>${name}</strong>! We received your message: "${message}"</p>`;

    this.reset();
});

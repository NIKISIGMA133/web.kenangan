document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the user exists in localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        // Redirect to Kenangan Page if login is successful
        window.location.href = "kenangan.html";
    } else {
        alert("Incorrect username or password");
    }
});
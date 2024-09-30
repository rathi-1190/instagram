document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate fields
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // Send the login request to the server
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      // Check the response status
      if (response.ok) {
        // Redirect to error.html after a successful login attempt
        window.location.href = "error.html";
      } else {
        const data = await response.json();
        alert(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Fetch error:", error);
    }
  });

console.log("Received data:", req.body);

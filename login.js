// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {

    // Get the form, inputs, and the toggle button
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    // Error message elements
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Toggle show/hide password functionality
    togglePassword.addEventListener("click", function() {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);

        // Toggle the eye icon
        togglePassword.textContent = type === "password" ? "Show" : "Hide";
    });

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        // Prevent the form from being submitted
        event.preventDefault();

        // Clear previous error messages
        emailError.textContent = "";
        passwordError.textContent = "";

        // Initialize validation flag
        let isValid = true;

        // Validate email field
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Invalid email format";
            isValid = false;
        }

        // Validate password field (at least 8 characters)
        if (passwordInput.value.trim().length < 8) {
            passwordError.textContent = "Password must be at least 8 characters long";
            isValid = false;
        }

        // If form is valid, log success message (you can modify this to redirect or take other actions)
        if (isValid) {
            alert("Login successful!");
            form.reset();  // Optionally reset the form after successful login
        }
    });
});

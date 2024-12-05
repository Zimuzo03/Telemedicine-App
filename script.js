// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {

    // Get the form, inputs, and the toggle buttons
    const form = document.getElementById("registrationForm");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const ageInput = document.getElementById("age");
    const termsCheckbox = document.getElementById("terms");

    // Error message elements
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const ageError = document.getElementById("ageError");
    const termsError = document.getElementById("termsError");

    // Password visibility toggles
    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Toggle password visibility
    togglePassword.addEventListener("click", function() {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        togglePassword.textContent = type === "password" ? "Show" : "Hide";
    });

    toggleConfirmPassword.addEventListener("click", function() {
        const type = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password";
        confirmPasswordInput.setAttribute("type", type);
        toggleConfirmPassword.textContent = type === "password" ? "Show" : "Hide";
    });

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        // Prevent the form from being submitted
        event.preventDefault();

        // Clear previous error messages
        firstNameError.textContent = "";
        lastNameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";
        ageError.textContent = "";
        termsError.textContent = "";

        // Initialize validation flag
        let isValid = true;

        // Validate First Name
        if (firstNameInput.value.trim() === "") {
            firstNameError.textContent = "First name is required";
            isValid = false;
        }

        // Validate Last Name
        if (lastNameInput.value.trim() === "") {
            lastNameError.textContent = "Last name is required";
            isValid = false;
        }

        // Validate Email Address
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Invalid email format";
            isValid = false;
        }

        // Validate Password (at least 8 characters)
        if (passwordInput.value.trim().length < 8) {
            passwordError.textContent = "Password must be at least 8 characters long";
            isValid = false;
        }

        // Validate Confirm Password (must match password)
        if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
            confirmPasswordError.textContent = "Passwords do not match";
            isValid = false;
        }

        // Validate Age (between the age of 18 and 100)
        const age = parseInt(ageInput.value.trim());
        if (isNaN(age) || age < 18 || age > 100) {
            ageError.textContent = "Age must be between 18 and 100";
            isValid = false;
        }

        // Validate Terms and Conditions checkbox
        if (!termsCheckbox.checked) {
            termsError.textContent = "You must agree to the terms and conditions";
            isValid = false;
        }

        // If the form is valid, show success alert
        if (isValid) {
            alert("Registration successful!");
            form.reset();  // Optionally reset the form after successful registration
        }
    });
});

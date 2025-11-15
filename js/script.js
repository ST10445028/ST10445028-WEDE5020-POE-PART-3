// --- CONTACT FORM VALIDATION AND SIMULATED SUBMISSION ---
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const statusMessage = document.getElementById("form-status");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            statusMessage.textContent = "";
            statusMessage.style.color = "black";

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Basic validation
            if (name.length < 2) {
                return showError("Please enter your full name (at least 2 characters).");
            }
            if (!validateEmail(email)) {
                return showError("Please enter a valid email address.");
            }
            if (message.length < 10) {
                return showError("Message must be at least 10 characters long.");
            }

            // Simulated AJAX submission
            statusMessage.textContent = "Sending message...";
            statusMessage.style.color = "blue";

            setTimeout(() => {
                statusMessage.textContent = "Your message has been sent successfully! (simulation)";
                statusMessage.style.color = "green";
                form.reset();
            }, 1500);
        });

        function showError(msg) {
            statusMessage.textContent = msg;
            statusMessage.style.color = "red";
            return false;
        }

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    }
});

// --- INITIALIZE LEAFLET MAP (ABOUT PAGE) ---
window.addEventListener("load", () => {
    const mapElement = document.getElementById("map");

    // Only run if map container exists *and* Leaflet is loaded
    if (mapElement && typeof L !== "undefined") {
        const bellemaCoords = [-25.7465, 28.1897]; // Sammy Marks Square, Pretoria
        const map = L.map("map").setView(bellemaCoords, 16);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(bellemaCoords)
            .addTo(map)
            .bindPopup("<b>Bellema Store</b><br>Sammy Marks Square, Pretoria")
            .openPopup();
    } else if (mapElement) {
        console.error("Leaflet library not loaded or failed to initialize map.");
    }
});

// Enquiry form validation and simulated submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("enquiry-form");
    const statusMessage = document.getElementById("form-status");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // prevent default form submission

        statusMessage.textContent = "";
        statusMessage.style.color = "black";

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (name.length < 2) {
            return showError("Please enter your full name (at least 2 characters).");
        }

        if (!validateEmail(email)) {
            return showError("Please enter a valid email address.");
        }

        if (message.length < 10) {
            return showError("Message must be at least 10 characters long.");
        }

        // Simulated AJAX submission
        statusMessage.textContent = "Sending enquiry...";
        statusMessage.style.color = "blue";

        setTimeout(() => {
            statusMessage.textContent = "Your enquiry has been sent successfully! (simulation)";
            statusMessage.style.color = "green";
            form.reset();
        }, 1500);
    });

    // Show error helper
    function showError(msg) {
        statusMessage.textContent = " " + msg;
        statusMessage.style.color = "red";
        return false;
    }

    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // ===== Contact Form =====
    handleForm("contact-form");

    // ===== Enquiry Form =====
    handleForm("enquiry-form");

    // ===== Personal Shopper Form =====
    handleForm("personal-form");

    // Generic form handler function
    function handleForm(formId) {
        const form = document.getElementById(formId);
        if (!form) return; // If form not found, exit

        const statusMessage = form.querySelector("#form-status");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            statusMessage.textContent = "";
            statusMessage.style.color = "black";

            const name = form.querySelector("#name") ? form.querySelector("#name").value.trim() : "";
            const email = form.querySelector("#email") ? form.querySelector("#email").value.trim() : "";
            const message = form.querySelector("#message") ? form.querySelector("#message").value.trim() : "";
            const items = form.querySelector("#items") ? form.querySelector("#items").value.trim() : "";
            const phone = form.querySelector("#phone") ? form.querySelector("#phone").value.trim() : "";

            // Basic validation
            if (name && name.length < 2) {
                return showError("Please enter your full name (at least 2 characters).");
            }

            if (email && !validateEmail(email)) {
                return showError("Please enter a valid email address.");
            }

            if (message && message.length < 10) {
                return showError("Message must be at least 10 characters long.");
            }

            if (items && items.length < 5) {
                return showError("Please describe the items you want (at least 5 characters).");
            }

            if (phone && phone.length < 7) {
                return showError("Please enter a valid phone number (at least 7 digits).");
            }

            // Simulated AJAX submission
            statusMessage.textContent = "Sending...";
            statusMessage.style.color = "blue";

            setTimeout(() => {
                statusMessage.textContent = "Your form has been sent successfully! (simulation)";
                statusMessage.style.color = "green";
                form.reset();
            }, 1500);
        });

        function showError(msg) {
            statusMessage.textContent = " " + msg;
            statusMessage.style.color = "red";
            return false;
        }

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    }
});


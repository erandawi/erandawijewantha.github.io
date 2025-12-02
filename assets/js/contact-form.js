// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    // Check for success parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        formStatus.innerHTML = '<span style="color: var(--accent-primary);">✓ Message sent successfully! I\'ll get back to you soon.</span>';
        // Remove success parameter from URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Handle form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            const submitButton = form.querySelector('.form-submit');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            formStatus.innerHTML = '<span style="color: var(--text-secondary);">Sending your message...</span>';
        });
    }
});

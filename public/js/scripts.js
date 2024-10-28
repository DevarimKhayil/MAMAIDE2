// This script initializes animations on page load and handles form submission via AJAX.
// When the form is submitted, it prevents the default page reload, collects form data, 
// and sends it as a JSON payload to the server at the '/submit' endpoint using a POST request.
// If the response is successful, the form is reset and a success message is displayed.
// If there is an error, an error message is shown, and any caught exceptions are logged to the console.

document.addEventListener('DOMContentLoaded', function() {
    AOS.init(); // Initialize AOS for animations
    const form = document.querySelector('form');
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Error submitting form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was a problem submitting the form.');
        }
    });
});

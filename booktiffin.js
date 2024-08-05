document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            mealPlan: document.getElementById('mealPlan').value
        };

        // Simulate an API call to book the tiffin
        // Replace this with actual API call if needed
        fakeApiCall(formData)
            .then(response => {
                if (response.success) {
                    showSuccessMessage('Booked successfully!');
                } else {
                    showErrorMessage('There was an error booking the tiffin.');
                }
            })
            .catch(error => {
                showErrorMessage('There was an error booking the tiffin.');
            });
    });

    function fakeApiCall(data) {
        return new Promise((resolve, reject) => {
            // Simulate a successful response
            setTimeout(() => {
                resolve({ success: true });
            }, 1000);
        });
    }

    function showSuccessMessage(message) {
        alert(message); // Simple alert for success message
    }

    function showErrorMessage(message) {
        alert(message); // Simple alert for error message
    }
});

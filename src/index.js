document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    };

    try {
        const response = await fetch('http://localhost:4000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
        }

        const result = await response.json();
        console.log('Success:', result);
        alert('Message sent successfully!');
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to send message: ${error.message}');
    }
});
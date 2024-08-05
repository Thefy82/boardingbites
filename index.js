
// JavaScript for handling menu tab functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuTabs = document.querySelectorAll('.nav-link[data-bs-toggle="pill"]');
    const tabContents = document.querySelectorAll('.tab-pane');

    menuTabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active'));

            // Add active class to the clicked tab
            tab.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('show', 'active'));

            // Show the selected tab content
            const target = tab.getAttribute('href');
            document.querySelector(target).classList.add('show', 'active');
        });
    });
});



// Get all rectangles and modals
const rectangles = document.querySelectorAll('.rectangle');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Add click event listeners to rectangles
rectangles.forEach((rectangle, index) => {
    rectangle.addEventListener('click', () => {
        const modalId = `modal${index + 1}`;
        const modal = document.getElementById(modalId);
        modal.style.display = 'block'; // Show the modal
    });
});

// Add click event listeners to close buttons
closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none'; // Hide the modal
    });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
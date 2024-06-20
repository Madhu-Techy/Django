// Get all grid items
const gridItems = document.querySelectorAll('.grid-item');

// Function to randomly assign size classes
function assignSizeClasses() {
    const sizes = ['large', 'medium', 'small'];
    gridItems.forEach(item => {
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        item.classList.add(randomSize);
    });
}

window.addEventListener('load', function() {
    assignSizeClasses();
});

// Call the function to assign size classes
assignSizeClasses();
// Toggle visibility of the extra info in the About section
const toggleButton = document.getElementById('toggleButton');
const extraInfo = document.getElementById('extraInfo');

toggleButton.addEventListener('click', () => {
    if (extraInfo.style.display === 'none') {
        extraInfo.style.display = 'block';
        toggleButton.textContent = 'Show Less';
    } else {
        extraInfo.style.display = 'none';
        toggleButton.textContent = 'Click me for more info';
    }
});

// Handle form submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
        formMessage.textContent = `Thank you, ${name}, for contacting us!`;
        formMessage.style.display = 'block';
        formMessage.style.color = 'green';
    } else {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.display = 'block';
        formMessage.style.color = 'red';
    }
});

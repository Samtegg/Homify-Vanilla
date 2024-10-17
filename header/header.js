document.addEventListener('DOMContentLoaded', function() {
    // Navbar hover effect
    const navItems = document.querySelectorAll('.first-nav li, .second-nav li');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.color = '#00985B';
        });
        item.addEventListener('mouseleave', function() {
            this.style.color = '';
        });
    });

    // Button pop effect
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Connect register and sign-in buttons
    const registerButton = document.querySelector('.second-nav li:first-child');
    const signInButton = document.querySelector('.second-nav li.login');

    registerButton.addEventListener('click', function() {
        window.location.href = 'register.html';
    });

    signInButton.addEventListener('click', function() {
        window.location.href = 'signin.html';
    });

    // Make navigation options interactive
    const navOptions = document.querySelectorAll('.navigate-options p');
    navOptions.forEach(option => {
        option.addEventListener('click', function() {
            navOptions.forEach(opt => opt.style.backgroundColor = '#FFFFFF99');
            this.style.backgroundColor = '#00985B';
            this.style.color = '#FFFFFF';
        });
    });

    // Implement search functionality
    const searchInput = document.querySelector('.recommendation-search input');
    const searchButton = document.querySelector('.recommendation-search button');
    searchButton.addEventListener('click', function() {
        alert(`Searching for: ${searchInput.value}`);
        // Implement actual search functionality here
    });

    // House type and price range filters
    const filters = document.querySelectorAll('.house-filter');
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            alert(`Filter selected: ${this.querySelector('p').textContent}`);
            // Implement actual filtering functionality here
        });
    });

    // Load more functionality
    const loadMoreButton = document.querySelector('.loadmore p');
    loadMoreButton.addEventListener('click', function() {
        alert('Loading more properties...');
        // Implement actual load more functionality here
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input:first-child').value;
        const question = this.querySelector('input:last-of-type').value;
        alert(`Thank you for your question!\nEmail: ${email}\nQuestion: ${question}`);
        // Implement actual form submission here
    });
});
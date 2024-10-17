document.addEventListener('DOMContentLoaded', function() {
	// Make buttons pop on click
	const buttons = document.querySelectorAll('button');
	buttons.forEach(button => {
		button.addEventListener('click', function() {
			this.classList.add('button-pop');
			setTimeout(() => {
				this.classList.remove('button-pop');
			}, 200);
		});
	});

	// Make navigation options interactive
	const navOptions = document.querySelectorAll('.navigate-options p');
	navOptions.forEach(option => {
		option.addEventListener('click', function() {
			navOptions.forEach(opt => opt.classList.remove('active'));
			this.classList.add('active');
		});
	});

	// Implement search functionality (placeholder)
	const searchButton = document.querySelector('.recommendation-search button');
	searchButton.addEventListener('click', function() {
		const searchInput = document.querySelector('.recommendation-search input');
		alert(`Searching for: ${searchInput.value}`);
	});

	// House type and price range filters (placeholder)
	const filters = document.querySelectorAll('.house-filter');
	filters.forEach(filter => {
		filter.addEventListener('click', function() {
			alert(`Filter selected: ${this.querySelector('p').textContent}`);
		});
	});

	// Load more functionality (placeholder)
	const loadMoreButton = document.querySelector('.loadmore p');
	loadMoreButton.addEventListener('click', function() {
		alert('Loading more properties...');
	});

	// Contact form submission (placeholder)
	const contactForm = document.querySelector('.contact-form');
	contactForm.addEventListener('submit', function(e) {
		e.preventDefault();
		const email = this.querySelector('input:first-child').value;
		const question = this.querySelector('input:last-of-type').value;
		alert(`Thank you for your question!\nEmail: ${email}\nQuestion: ${question}`);
	});
});




// Load more 
document.getElementById('loadMoreBtn').addEventListener('click', function() {
    var contentDiv = document.getElementById('content');

    // Dynamically create and append new content
    var newParagraph = document.createElement('p');
    newParagraph.textContent = "New content loaded!";
    contentDiv.appendChild(newParagraph);
});



//Features
document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.features-image-scroll');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const viewAllBtn = document.getElementById('viewAllBtn');

    leftArrow.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });

    viewAllBtn.addEventListener('click', loadMoreImages);

    function loadMoreImages() {
        // Simulating loading more images
        const newImages = [
            './assets/apartment5.png',
            './assets/apartment6.png',
            './assets/apartment7.png',
            './assets/apartment8.png'
        ];

        newImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Additional Apartment';
            scrollContainer.appendChild(img);
        });

        // Update button text and disable it
        viewAllBtn.textContent = 'All Loaded';
        viewAllBtn.disabled = true;
    }
});

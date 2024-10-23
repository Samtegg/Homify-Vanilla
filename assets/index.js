	// nav-bar and menu-icon

document.addEventListener('DOMContentLoaded', function() {

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const firstNav = document.getElementsByClassName('first-nav')[0];
const secondNav = document.getElementsByClassName('second-nav')[0];

toggleButton.addEventListener('click', () => {
    firstNav.classList.toggle('active');
    secondNav.classList.toggle('active');
});


    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Automatic sliding for features images
    const featuresContainer = document.querySelector('.features-image');
    let scrollInterval;

    function startAutoScroll() {
        scrollInterval = setInterval(() => {
            featuresContainer.scrollLeft += 1;
            if (featuresContainer.scrollLeft >= featuresContainer.scrollWidth - featuresContainer.clientWidth) {
                featuresContainer.scrollLeft = 0;
            }
        }, 30);
    }

    function stopAutoScroll() {
        clearInterval(scrollInterval);
		
    }

    if (window.innerWidth <= 768) {
        startAutoScroll();

        featuresContainer.addEventListener('touchstart', stopAutoScroll);
        featuresContainer.addEventListener('touchend', startAutoScroll);
    }

    // Manual sliding for features images
    let isDown = false;
    let startX;
    let scrollLeft;

    featuresContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - featuresContainer.offsetLeft;
        scrollLeft = featuresContainer.scrollLeft;
        stopAutoScroll();
    });

    featuresContainer.addEventListener('mouseleave', () => {
        isDown = false;
        if (window.innerWidth <= 768) startAutoScroll();
    });

    featuresContainer.addEventListener('mouseup', () => {
        isDown = false;
        if (window.innerWidth <= 768) startAutoScroll();
    });

    featuresContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - featuresContainer.offsetLeft;
        const walk = (x - startX) * 2;
        featuresContainer.scrollLeft = scrollLeft - walk;
    });

    // Load more functionality for recommendations
    const loadMoreBtn = document.querySelector('.loadmore p');
    const recommendationContainer = document.querySelector('.recommendation-secondcontainer');

    loadMoreBtn.addEventListener('click', function() {
        // Simulating loading more items
        for (let i = 0; i < 3; i++) {
            const newCard = recommendationContainer.children[0].cloneNode(true);
            recommendationContainer.appendChild(newCard);
        }
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    // Autosuggest for search input
    const searchInput = document.querySelector('.recommendation-search input');
    const suggestions = ['Ikeja', 'Lekki', 'Victoria Island', 'Ikoyi', 'Ajah', 'Surulere', 'Yaba', 'Maryland', 'Magodo', 'Gbagada'];
    
    searchInput.addEventListener('input', function() {
        const inputValue = this.value.toLowerCase();
        const matchingSuggestions = suggestions.filter(suggestion => 
            suggestion.toLowerCase().startsWith(inputValue)
        );

        const datalist = document.getElementById('search-suggestions') || document.createElement('datalist');
        datalist.id = 'search-suggestions';
        datalist.innerHTML = matchingSuggestions.map(suggestion => `<option value="${suggestion}">`).join('');
        
        if (!document.getElementById('search-suggestions')) {
            document.body.appendChild(datalist);
            this.setAttribute('list', 'search-suggestions');
        }
    });

    // House type and Price range dropdowns
    const houseTypeFilter = document.querySelector('.house-filter:first-child');
    const priceRangeFilter = document.querySelector('.house-filter:last-child');

    function createDropdown(container, options, placeholder) {
        const dropdown = document.createElement('select');
        dropdown.innerHTML = `<option value="">${placeholder}</option>` +
            options.map(option => `<option value="${option.value}">${option.label}</option>`).join('');
        container.appendChild(dropdown);
        return dropdown;
    }

    const houseTypeDropdown = createDropdown(houseTypeFilter, [
        {value: 'apartment', label: 'Apartment'},
        {value: 'house', label: 'House'},
        {value: 'duplex', label: 'Duplex'},
        {value: 'bungalow', label: 'Bungalow'},
        {value: 'mansion', label: 'Mansion'}
    ], 'Select House Type');

    const priceRangeDropdown = createDropdown(priceRangeFilter, [
        {value: '0-1000000', label: '₦0 - ₦1,000,000'},
        {value: '1000001-5000000', label: '₦1,000,001 - ₦5,000,000'},
        {value: '5000001-10000000', label: '₦5,000,001 - ₦10,000,000'},
        {value: '10000001-50000000', label: '₦10,000,001 - ₦50,000,000'},
        {value: '50000001+', label: '₦50,000,001+'}
    ], 'Select Price Range');

    houseTypeDropdown.addEventListener('change', function() {
        console.log(`Filtered by house type: ${this.value}`);
        // Implement actual filtering logic here
    });

    priceRangeDropdown.addEventListener('change', function() {
        console.log(`Filtered by price range: ${this.value}`);
        // Implement actual filtering logic here
    });

    // Button pop effect
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('button-pop');
            setTimeout(() => {
                this.classList.remove('button-pop');
            }, 200);
        });
    });

    // Navigation options active state
    const navOptions = document.querySelectorAll('.navigate-options p');
    navOptions.forEach(option => {
        option.addEventListener('click', function() {
            navOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // House filter hover effect
    const houseFilters = document.querySelectorAll('.house-filter');
    houseFilters.forEach(filter => {
        filter.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#00985B';
            this.querySelector('p').style.color = '#FFFFFF';
        });
        filter.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.querySelector('p').style.color = '';
        });
    });
});
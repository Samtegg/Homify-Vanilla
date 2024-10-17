 // Sample data - In a real application, this would come from a backend API
 const user = {
	name: "John Doe",
	email: "johndoe@example.com",
	dateJoined: "January 1, 2023",
	userType: "Seller (Land Owner)",
	profilePicture: "/placeholder-user.jpg"
};

const properties = [
	{ 
		id: 1, 
		name: "3 Bedroom Flat", 
		location: "Lekki Phase 1", 
		type: "Apartment", 
		price: "₦50,000,000", 
		image: "/property-1.jpg",
		description: "Excellent road connectivity, 24/7 electricity supply, gated community with top-notch security."
	},
	{ 
		id: 2, 
		name: "2 Bedroom Bungalow", 
		location: "Ajah", 
		type: "House", 
		price: "₦35,000,000", 
		image: "/property-2.jpg",
		description: "Newly paved roads, stable power supply, close to shopping centers, serene environment."
	}
];

const transactions = [
	{ id: 1, type: "Sale", property: "3 Bedroom Flat", date: "March 15, 2023", amount: "₦50,000,000" },
	{ id: 2, type: "Listing", property: "2 Bedroom Bungalow", date: "April 2, 2023", amount: "N/A" }
];

const topListings = [
	{ 
		id: 3, 
		name: "Luxury 5 Bedroom Duplex", 
		location: "Banana Island", 
		type: "House", 
		price: "₦500,000,000", 
		image: "/property-3.jpg",
		description: "Private access road, uninterrupted power supply, 24/7 security, proximity to high-end amenities."
	},
	{ 
		id: 4, 
		name: "Studio Apartment", 
		location: "Victoria Island", 
		type: "Apartment", 
		price: "₦25,000,000", 
		image: "/property-4.jpg",
		description: "Central location, good road network, constant electricity, modern security systems in place."
	}
];

const notifications = [
	"New Listing Alert: Luxury 3-bedroom apartment in Lekki Phase 1 just added!",
	"Your property '2 Bedroom Bungalow' has received 5 new inquiries.",
	"Reminder: Complete your profile to increase visibility of your listings."
];

// Populate user information
document.getElementById('username').textContent = user.name;
document.getElementById('email').textContent = user.email;
document.getElementById('date-joined').textContent = user.dateJoined;
document.getElementById('user-type').textContent = user.userType;
document.getElementById('profile-picture').src = user.profilePicture;

// Populate notifications
const notificationsList = document.getElementById('notifications');
notifications.forEach(notification => {
	const li = document.createElement('li');
	li.textContent = notification;
	notificationsList.appendChild(li);
});

// Populate property list
const propertyList = document.getElementById('property-list');
properties.forEach(property => {
	const li = document.createElement('li');
	li.className = 'property-item';
	li.innerHTML = `
		<img src="${property.image}" alt="${property.name}" class="property-image">
		<div class="property-details">
			<h3>${property.name}</h3>
			<p>Location: ${property.location}</p>
			<p>Type: ${property.type}</p>
			<p>Price: ${property.price}</p>
			<p class="property-description">${property.description}</p>
			<div class="property-actions">
				<button class="edit-btn" onclick="editProperty(${property.id})">Edit Property</button>
			</div>
		</div>
	`;
	propertyList.appendChild(li);
});

// Populate transaction list
const transactionList = document.getElementById('transaction-list');
transactions.forEach(transaction => {
	const li = document.createElement('li');
	li.textContent = `${transaction.type} - ${transaction.property} - ${transaction.date} - ${transaction.amount}`;
	transactionList.appendChild(li);
});

// Populate top listings
const topListingsList = document.getElementById('top-listings');
topListings.forEach(listing => {
	const li = document.createElement('li');
	li.className = 'property-item';
	li.innerHTML = `
		<img src="${listing.image}" alt="${listing.name}" class="property-image">
		<div class="property-details">
			<h3>${listing.name}</h3>
			<p>Location: ${listing.location}</p>
			<p>Type: ${listing.type}</p>
			<p>Price: ${listing.price}</p>
			<p class="property-description">${listing.description}</p>
		</div>
	`;
	topListingsList.appendChild(li);
});

function logout() {
	// Implement logout functionality here
	alert('Logging out...');
}

function uploadProperty() {
	// Implement property upload functionality here
	alert('Uploading new property...');
}

function changeProfilePicture() {
	// Implement profile picture change functionality here
	alert('Changing profile picture...');
}

function editProperty(propertyId) {
	// Implement property edit functionality here
	alert(`Editing property with ID: ${propertyId}`);
	// In a real application, this function would open a modal or navigate to an edit page
	// where the user can modify the property details and image
}
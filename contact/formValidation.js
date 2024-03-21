function validateForm() {
	var firstName = document.getElementById("fname").value;
	var lastName = document.getElementById("lname").value;
	var mobileNumber = document.getElementById("phone").value;
	var message = document.getElementById("message").value;
	var doorStreet = document.getElementById("doorStreet").value;
	var postalTown = document.getElementById("postalTown").value;
	var postCode = document.getElementById("postCode").value;

	// Validate First Name
	if (firstName.length < 2 || firstName.length > 20) {
		alert("First name must be between 2 and 20 characters.");
		return false;
	}

	// Validate Last Name
	if (lastName.length > 25) {
		alert("Last name cannot exceed 25 characters.");
		return false;
	}

	// Validate Door Number and Street Name
	if (!/^\d{1,4}\s[A-Za-z]{2,45}$/.test(doorStreet)) {
		alert(
			"Door number and street name must start with 1 to 4 numbers followed by 2 to 45 letters after a space character."
		);
		return false;
	}

	// Validate Postal Town
	if (postalTown.length > 45 || /\d/.test(postalTown)) {
		alert(
			"Postal town cannot contain any numbers and cannot exceed 45 characters."
		);
		return false;
	}

	// Validate Post Code
	if (!/^[a-zA-Z0-9]{5,7}$/.test(postCode)) {
		alert("Post code must contain 5 to 7 alphanumeric characters.");
		return false;
	}

	// Validate Mobile Number
	if (!/^\d{6,10}$/.test(mobileNumber)) {
		alert("Mobile number must be 6 or 10 digits.");
		return false;
	}

	// Validate Message
	if (message.length < 10) {
		alert("Message must be at least 10 characters long.");
		return false;
	}

	return true; // Form is valid
}

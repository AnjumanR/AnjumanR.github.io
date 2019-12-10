var fields {};
document.addEventListener("DOMContentLoaded", function() {
	fields.name = document.getElementById('name');
	fields.email = document.getElementById('email');
	fields.subject = document.getElementById('subject');
	fields.message = document.getElementById('message');
})

function isNotEmpty(value) {
	if (value == null || typeof value == 'undefined' ) return false;
	return (value.length > 0);
}

function isNumber(num) {
	return (num.length > 0) && !isNaN(num);
}

function fieldValidation(field, validationFunction) {
	if (field == null) return false;

	let isFieldValid = validationFunction(field.value)
	if (!isFieldValid) {
		field.className = 'placeholderRed';
	} else {
		field.className = '';
	}

	return isFieldValid;
}

function isValid() {
 var valid = true;
 
 valid &= fieldValidation(fields.name, isNotEmpty);
 valid &= fieldValidation(fields.email, isEmail);
 valid &= fieldValidation(fields.subject, isNotEmpty);
 valid &= fieldValidation(fields.message, isNotEmpty);


 return valid;
}

class User {
 constructor(name, email, subject, message) {
 this.name = name;
 this.email = email;
 this.subject = subject;
 this.message = message;
 }
}
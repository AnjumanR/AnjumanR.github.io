var fields = {};
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
function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) 
{
	if (field == null) return false;

	//let isFieldValid = validationFunction(field.value)
	if (!validationFunction(field.value)) {
		field.className = 'placeholderRed';
	} else {
		field.className = '';
	}

	return validationFunction(field.value);
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

function sendContact()
{
	if(isValid()){
		let usr = new User(fields.name.value, fields.email.value, fields.subject.value, fields.message.value);
		alert(usr.name +', thanks for registering.')
		var i;
		const values = Object.values(fields)
		window.location.href = "mailto:anjumanraha@gmai1.com?subject=" + fields.subject.value + "&body= Prefered Email: " + fields.email.value + ". " + fields.message.value + " ";
		console.log("mailto:anjumanraha@gmai1.com?subject=" + fields.subject.value + "&body=Prefered Email: " + fields.email.value + ". " + fields.message.value)
		//sendMail()
	}
	else
		{
			alert("There was an error")
		}
}

//function sendMail() {
//    $.ajax({
//      type: 'POST',

//          'from_email': 'anjumanraha@gmail.com',
//          'to': [
//              {
//                'email': 'anjumanraha@gmail.com',
//                'name': 'Anjuman',
//                'type': 'to'
//              }
//            ],
//          'autotext': 'true',
//          'subject': 'YOUR SUBJECT HERE!',
//          'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
//        }
//      }
//     }).done(function(response) {
//       console.log(response);
//     });
//}
//var send = document.getElementById('reset');
//if(x.)
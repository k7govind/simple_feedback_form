// var userfirstname = document.getElementById('firstname');
// var userlastname = document.getElementById('lastname');
// var useremail = document.getElementById('useremail');

// function checkField(currentElement) {
//     //alert(obj.value.trim());
//     if(currentElement.value.trim() == '') {
//         currentElement.nextElementSibling.classList.add('text-danger');
//         //currentElement.style.borderBottomColor='red';
//         currentElement.classList.add('border-danger');
//         currentElement.nextElementSibling.classList.remove('d-none');
//     }
// }

// function validateForm(event) {

// }

// function emptyField(currentElement) {
//     currentElement.nextElementSibling.classList.add('d-none');
//     currentElement.classList.remove('border-danger');
//     currentElement.style.borderBottomColor='black';
// }


$(document).ready(function () {
  $("#contactform").validate({
    rules: {
      firstname: {
        required: true,
        minlength: 2,
        maxlength: 120,
        lettersonly: true, // custom rule we'll add below
      },
      lastname: {
        required: true,
        minlength: 2,
        maxlength: 120,
        lettersonly: true,
      },
      useremail: {
        required: true,
        email: true,
      },
      userfeedback: {
        required: true,
      },
    },
    messages: {
      firstname: {
        required: "First name is required",
        minlength: "First name must be at least 2 characters",
        maxlength: "First name must not exceed 120 characters",
        lettersonly: "Only letters are allowed",
      },
      lastname: {
        required: "Last name is required",
        minlength: "Last name must be at least 2 characters",
        maxlength: "Last name must not exceed 120 characters",
        lettersonly: "Only letters are allowed",
      },
      useremail: {
        required: "Email is required",
        email: "Enter a valid email address",
      },
      userfeedback: {
        required: "Feedback is required"
      }
    },
    submitHandler: function (form) {
      // ✅ form is valid — you can submit via AJAX or normal submit
      alert("Form submitted successfully!");
      form.submit();
    },
  });

  // Custom rule: letters only
  $.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-zA-Z]+$/.test(value);
  }, "Letters only please");
});


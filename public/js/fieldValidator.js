var userfirstname = document.getElementById('firstname');
var userlastname = document.getElementById('lastname');
var useremail = document.getElementById('useremail');

function checkField(currentElement) {
    //alert(obj.value.trim());
    if(currentElement.value.trim() == '') {
        currentElement.nextElementSibling.classList.add('text-danger');
        //currentElement.style.borderBottomColor='red';
        currentElement.classList.add('border-danger');
        currentElement.nextElementSibling.classList.remove('d-none');
    }
}

function validateForm(event) {

}

function emptyField(currentElement) {
    currentElement.nextElementSibling.classList.add('d-none');
    currentElement.classList.remove('border-danger');
    currentElement.style.borderBottomColor='black';
}

/*Note: No REGEX was added for address as addresses can vary wildly in formatting */
const NAME_REGEX = /^\w+$/; // For first and last names
const CITY_REGEX = /^\w+$/;
const STATES = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
const ZIP_REGEX = /\d{5}([ \-]\d{4})?/;
const EMAIL_REGEX = /(@\w+\.\w+)$/;
const PHONE_REGEX = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/


document.addEventListener("DOMContentLoaded", function () {

    let inputs = document.querySelectorAll("input");
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let address = document.getElementById("address");
    let state = document.getElementById("state");
    let zip = document.getElementById("zip")
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let form = document.getElementById("visitorForm");

    function validateName(el) {
        if (el.value.match(NAME_REGEX)) {
            el.setCustomValidity('');
        } else {
            el.setCustomValidity('Invalid name!');
        }
    }

    function validateAddress(el) {
        if (el.value == "" | el.value === null) {
            el.setCustomValidity('');
        } else {
            el.setCustomValidity('Please enter and address!');
        }
    }

    function validateCity(el) {
        if (el.value.match(CITY_REGEX)) {
            el.setCustomValidity('');
        } else {
            el.setCustomValidity('Invalid city!');
        }
    }

    function validateState(el) {
        if (STATES.includes(el.value)) {
            el.setCustomValidity('');
        } else {
            el.setCustomValidity('Invalid state! Ex: "UT"');
        }
    }

    function validateZip(el) {
        if (el.value.match(ZIP_REGEX)) {
            el.setCustomValidity('');
        } else {
            el.setCustomValidity('Invalid Zipcode!');
        }
    }

    function validateEmail(el) {
        if (el.value.match(EMAIL_REGEX)) {
            el.setCustomValidity('');
        } else {
            el.setCustomValidity('Invalid Email!');
        }
    }

    function validatePhoneNumber(el) {
        if (el.value.match(PHONE_REGEX)) {
            el.setCustomValidity('');
        } else {
            el.setCustomValidity('Invalid phone number!');
        }
    }

    for (let i = 0; i < inputs.length; ++i) {
        inputs[i].addEventListener("change", function (ev) {
            let el = ev.currentTarget;
            el.classList.add('was-validated');
            console.log(`element ${el.name} was changed!`);
        });
    }

    firstName.addEventListener("input", ev => {validateName(ev.currentTarget)});
    lastName.addEventListener("input", ev => {validateName(ev.currentTarget)});
    address.addEventListener("input", ev => {validateAddress(ev.currentTarget)});
    city.addEventListener("input", ev => {validateCity(ev.currentTarget)});
    state.addEventListener("input", ev => {validateState(ev.currentTarget)});
    zip.addEventListener("input", ev => {validateZip(ev.currentTarget)});
    email.addEventListener("input", ev => {validateEmail(ev.currentTarget)});
    phone.addEventListener("input", ev => {validatePhoneNumber(ev.currentTarget)});


    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        ev.stopPropagation();

        // Custom validation
        validateName(firstName);
        validateName(lastName);
        validateAddress(address);
        validateCity(city);
        validateState(state);
        validateZip(zip);
        validateEmail(email);
        validatePhoneNumber(phone);

        let formValid = this.checkValidity();

        if (!formValid) {
            console.log("form not valid");
            ev.preventDefault();
            ev.stopPropagation();
        }
        else {
            console.log("form is valid!!");
            ev.preventDefault();
            ev.stopPropagation();
        }
        form.classList.add('was-validated');
    });


    });
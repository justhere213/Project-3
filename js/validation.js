document.addEventListener("DOMContentLoaded", function () {

    let inputs = document.querySelectorAll("input");
    let firstName = document.getElementById("first-name");
    let emailInput = document.getElementById("email");
    let form = document.getElementById("myForm");

    function validateFirstName(el) {
        if (el.value === "Ken") {
            //setCustomValidity called with a null string sets input 'valid' property to true
            el.setCustomValidity('');
        } else {
            //setCustomValidity called with a null string sets input 'invalid' property to true
            el.setCustomValidity('Name must be "Ken"!');
        }
    }

    for (let i = 0; i < inputs.length; ++i) {
        inputs[i].addEventListener("change", function (ev) {
            let el = ev.currentTarget;
            el.classList.add('was-validated');
            console.log(`element ${el.name} was changed!`);
        });
    }

    firstName.addEventListener("input", ev => {validateFirstName(ev.currentTarget)});

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();  //for now so we don't redirect
        ev.stopPropagation();

        //Call custom validation here
        validateFirstName(firstName);

        //DOM checkValidity function tells you current status of form according to html5
        //'this' keyword will refer to the form since 'this' always refers to element that captured the event
        let formValid = this.checkValidity();

        if (!formValid) {
            console.log("form not valid");
            ev.preventDefault();
            ev.stopPropagation();
        }
        else {
            console.log("form is valid!!");
            //if you don't preventDefault and stopPropagation
            //the default form action would be to redirect to the url in the 'action' attribute of the form
            //https://wp.zybooks.com/form-viewer.php
            ev.preventDefault();
            ev.stopPropagation();
        }
        form.classList.add('was-validated');
    });


    });
// Exercise 7
function validate() {
    let error = 0;

    // Get the input fields
    let fName = document.getElementById("fName").value;
    let fEmail = document.getElementById("fEmail").value;
    let fAddress = document.getElementById("fAddress").value;
    let fLastN = document.getElementById("fLastN").value;
    let fPassword = document.getElementById("fPassword").value;
    let fPhone = Number(document.getElementById("fPhone").value);

    // Get the error elements
    let errorName = document.getElementById("errorName");
    let errorEmail = document.getElementById("errorEmail");
    let errorAddress = document.getElementById("errorAddress");
    let errorLastN = document.getElementById("errorLastN");
    let errorPassword = document.getElementById("errorPassword");
    let errorPhone = document.getElementById("errorPhone");

    // Validate fields entered by the user: name, phone, password, and email

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        "use strict";

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll(".needs-validation");

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener(
                "submit",
                function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    form.classList.add("was-validated");
                },
                false
            );
        });
    })();

    /* if(fName.length < 3 || fName.includes(Number)){
		error++;
	}

	if(fEmail.length < 3 || !fEmail.includes('@')){
		error++;
	}

	if(fAddress.length < 3){
		error++;
	}

	if (fLastN.length < 3 || fLastN.includes(Number)){
		error++;
	}

	if (fPassword.length < 3 || !fPassword.includes(Number)) {
		error++;
	}

	if (fPhone.length < 3) {
		error++;
	} */

    /* if(error>0){
		alert("Error");
	}else{
		alert("OK");
	} */
}

/*  - Tots els camps són obligatoris.

	- Tots els camps han de tenir almenys 3 caràcters.

	- El nom i cognoms han de contenir només lletres.

	- El telèfon ha de contenir només números.

	- La contrasenya ha d'incloure números i lletres.

	- L'email ha de tenir format d'email. */

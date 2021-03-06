function submitForm() {
    var lastName = document.querySelector("#lastName").value;
    var firstName = document.querySelector("#firstName").value;
    var email = document.querySelector("#emailAdress").value;
    var message = document.querySelector("#message").value;

    var userData = Array.from(document.querySelectorAll("#contact input")).reduce((acc, input) =>
        ({ ...acc, [input.id]: input.value }), {});
    console.log(userData);
    
}
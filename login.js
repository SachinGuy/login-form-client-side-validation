const emailEntry = document.querySelector("#email");
const passwordEntry = document.querySelector("#password");
const signUpBtn = document.querySelector("#sign-up-btn");
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (event) => 
{
    //Prevent default behavior of form element.
    event.preventDefault();

    //If correct input Log in!
    if(emailEntry.checkValidity() && passwordEntry.checkValidity())
    {
        alert("You are now Logged In!");

        //Reset the values when submitted!
        emailEntry.value = "";
        passwordEntry.value = "";
    }
})

signUpBtn.addEventListener("click", () => 
{
    //Go to sign up page
    window.location.replace("sign-up.html");
})
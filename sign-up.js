const signUpForm = document.querySelector("#sign-up-form");
const emailEntry = document.querySelector("#email");
const passwordEntry = document.querySelector("#password");
const confirmPasswordEntry = document.querySelector("#confirm-password");

confirmPasswordEntry.addEventListener("input", () => 
{
    if(passwordEntry.value !== confirmPasswordEntry.value)
    {
        
        confirmPasswordEntry.setCustomValidity("Passwords should be same!");
    }else{
        confirmPasswordEntry.setCustomValidity("");
    }
})
signUpForm.addEventListener("submit", (event) => 
{
    event.preventDefault();

    if(passwordEntry.value === confirmPasswordEntry.value)
    {
        alert("You're now signed up!");
        emailEntry.value = "";
        passwordEntry.value = "";
        confirmPasswordEntry.value = "";
    }
});
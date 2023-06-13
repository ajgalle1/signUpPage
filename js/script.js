
function validatePassword() {
    var re = /^(?=.*[a-z])(?=.*[A-Z])/;
    var re2 = /^(?=.*\d)/;
    var re3 = /^(?=.* [-+_!@#$%^&*., ?])/;
    
    /*This regular expression checks if the password contains at least one digit, one lowercase letter, one uppercase letter, and is at least 8 characters long 12.
    
    Here is a breakdown of the regular expression:
    
    ^ - start of the string
        (?=.* [a - z]) - positive lookahead to check if there is at least one lowercase letter
        (?=.* [A - Z]) - positive lookahead to check if there is at least one uppercase letter
        
    $ - end of the string
    */

    let x = document.getElementById("password").value;
    let text;

    if (x.length < 12) {
        text = "Password must be at least 12 characters.";
        document.getElementById("errorNotice").innerHTML = text;
        return false;
    } else if (!re.test(x)) {
        text = "Passwords must have at least one uppercase and one lowercase letter.";
        document.getElementById("errorNotice").innerHTML = text;
        return false;
    } else if (!re2.test(x)) {
        text = "Passwords must have at least one number.";
        document.getElementById("errorNotice").innerHTML = text;
        return false;
    } else if (!re3.test(x)) {
        text = "Passwords must have at least one special character.";
        document.getElementById("errorNotice").innerHTML = text;
        return false;

    }

        alert("Registration successful, " + document.getElementById("firstName").value + ".");
        return true;

}

function announceFunction() {
    alert("Sorry, there is nothing to log into yet.");
}
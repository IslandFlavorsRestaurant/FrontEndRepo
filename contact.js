
// function validateEmail() {
//     var emailID = document.getElementById("email").value;
//     atpos = emailID.indexOf("@");
//     dotpos = emailID.lastIndexOf(".");
//     if(atpos < 1 || (dotpos - atpos < 2)) {
//         alert("Your email address is missing an @ and/or a .");
//     } else {        
//         alert("Thank you, your message was sumitted successfully")    
//     }
// }

function validateEmail() {
    var emailID = document.getElementById("email").value;
    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID))
    {
        alert("Thank you, your message was sumitted successfully")
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)

}
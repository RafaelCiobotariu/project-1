function validatePasswordForm() {
  let password = document.getElementById("password").value;
  let confirmedPassowrd = document.getElementById("confpassword").value;
  console.log("pssst");
  if (password !== confirmedPassowrd) {
    alert("Passwords doesn't match");
    return false;
  }
}

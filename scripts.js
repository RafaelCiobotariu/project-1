function verifyPassword() {
  let pw = document.getElementById("password").value;
  let pwc = document.getElementById("confpassword").value;
  //check empty password field
  if (pw !== pwc) {
    document.getElementById("message").innerHTML = "**Password dont match";
    document.getElementById("message2").innerHTML = "**Password dont match";
    return false;
  }
}

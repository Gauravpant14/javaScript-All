let email = document.getElementById("email");

checkEmail = () => {
  console.log("CALLED")
  let regX = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.(a-zA-Z)$/;
  let str = email.value;
  
  if(regX.test(str)){
    document.getElementById('em').innerHTML = "your email is not valid";
    email.classList.remove('is-invalid');
  }
  else{
    console.log('your email is not valid');
    email.classList.add('is-invalid');
  }
}

email.addEventListener('change', checkEmail);

function validation() {
  const fName = document.getElementById("fName").value.trim();
  const lName = document.getElementById("lName").value.trim();
  
  const pass = document.getElementById("pass").value.trim();
  const cPass = document.getElementById("cPass").value.trim();
  const mob = document.getElementById("mobileNum").value.trim();
  let chk1 = document.querySelector("#chk1");
  let chk2 = document.querySelector("#chk2");
  let chk3 = document.querySelector("#chk3");
  let lastBtn=document.querySelector(".lastBtn")

 




  if (fName == "") {
    document.getElementById("fN").innerHTML =
      "**Please Enter Your First Name**";
    return false;
  }

  if (fName.length < 3) {
    document.getElementById("fN").innerHTML =
      "**User Name Must be Greater then 3 character long!**";
    return false;
  }

  if (!isNaN(fName)) {
    document.getElementById("fN").innerHTML = "**Only Characters Are Allowed**";
    return false;
  }

  if (lName == "") {
    document.getElementById("lN").innerHTML = "**Please Enter Your Last Name**";
    return false;
  }

  // if (email == "" ) {
  //   document.getElementById("eM").innerHTML = "**Please Enter Your Email**";
  //   return false;
  // }

  if (pass == "") {
    document.getElementById("password").innerHTML =
      "**Don't Leave your password blank**";
    return false;
  }

  if (pass.length < 8) {
    document.getElementById("password").innerHTML =
      "**Password Must be Greater then 8 character long!**";
    return false;
  }

  if (cPass == "") {
    document.getElementById("cPassword").innerHTML =
      "**Don't Leave your password blank**";
    return false;
  }
  if (pass != cPass) {
    document.getElementById("cPassword").innerHTML = "**Password not Matched**";
    return false;
  }
  if (mob.length !=10 || isNaN(mob)) {
    document.getElementById("mobile").innerHTML =
      "**Please Enter Valid Mobile Number**";
    return false;
  }
  if ((chk1.checked) && (chk2.checked == false) && (chk3.checked == false)) {
    document.getElementById("chk").innerHTML = "**kuch bhi**";
  }

  // if(email == match(regX)){
  //   document.getElementById('em').innerHTML = "Minimum eight characters, at least one letter, one number and one special character:"
  // }
}

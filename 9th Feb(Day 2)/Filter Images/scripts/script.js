var all = document.querySelector(".all");
var NatureBtn = document.getElementById("nature");
var PeopleBtn = document.querySelector(".people");
var TechBtn = document.querySelector(".tech");

NatureBtn.addEventListener("click", showNature);
PeopleBtn.addEventListener("click", showPeople);
TechBtn.addEventListener("click", showTech);
all.addEventListener("click", showAll);

function showNature() {
  let elems = document.getElementsByClassName("allNature");
  
  for (var i = 0; i < elems.length; i += 1) {
    elems[i].style.display = "flex";
  }
  let elems1 = document.getElementsByClassName("allPeople");
  for (var i = 0; i < elems1.length; i += 1) {
    elems1[i].style.display = "none";
  }
  let elems2 = document.getElementsByClassName("allTech");
  for (var i = 0; i < elems2.length; i += 1) {
    elems2[i].style.display = "none";
  }
}

function showPeople() {
  let elems = document.getElementsByClassName("allNature");
  for (var i = 0; i < elems.length; i += 1) {
    elems[i].style.display = "none";
  }
  let elems1 = document.getElementsByClassName("allPeople");
  for (var i = 0; i < elems1.length; i += 1) {
    elems1[i].style.display = "";
  }
  let elems2 = document.getElementsByClassName("allTech");
  for (var i = 0; i < elems2.length; i += 1) {
    elems2[i].style.display = "none";
  }
}

function showTech() {
  let elems = document.getElementsByClassName("allNature");
  for (var i = 0; i < elems.length; i += 1) {
    elems[i].style.display = "none";
  }
  let elems1 = document.getElementsByClassName("allPeople");
  for (var i = 0; i < elems1.length; i += 1) {
    elems1[i].style.display = "none";
  }
  let elems2 = document.getElementsByClassName("allTech");
  for (var i = 0; i < elems2.length; i += 1) {
    elems2[i].style.display = "";
  }
}

function showAll() {
  let elems = document.getElementsByClassName("allNature");
  for (var i = 0; i < elems.length; i += 1) {
    elems[i].style.display = "block";
  }
  let elems1 = document.getElementsByClassName("allPeople");
  for (var i = 0; i < elems1.length; i += 1) {
    elems1[i].style.display = "block";
  }
  let elems2 = document.getElementsByClassName("allTech");
  for (var i = 0; i < elems2.length; i += 1) {
    elems2[i].style.display = "block";
  }
}

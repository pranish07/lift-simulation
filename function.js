let liftContainer = document.querySelector(".lift-container");
let numOfFloors = document.querySelector(".num-of-floors");
let numOfLifts = document.querySelector(".num-of-lifts");
let btnGenerate = document.querySelector(".btn-generate");
let errorFloor = document.querySelector(".error-floor");
let errorLift = document.querySelector(".error-lift");

btnGenerate.addEventListener("click", function (e) {
  handleValidations() && handleFloors();
});

numOfFloors.addEventListener("change", function () {
  errorFloor.innerHTML = "";
  console.log(errorFloor.innerText);
});

function handleValidations() {
  let validationSuccessful;
  let floorValue = numOfFloors.value;
  let liftValue = numOfLifts.value;
  
  if (floorValue === 0 || floorValue === "") {
    errorFloor.innerHTML = "Enter how many floors do u want?";
    (validationSuccessful = false);
  } else if (floorValue < 0) {
    errorFloor.innerHTML = "enter a positive integer";
    (validationSuccessful = false);
  }

  if (liftValue === 0 || liftValue === "") {
    errorLift.innerHTML = "Enter how many lift do u want?";
    (validationSuccessful = false);
  } else if (liftValue < 0) {
    errorLift.innerHTML = "enter a positive integer";
    (validationSuccessful = false);
  }
  return validationSuccessful && true;
}

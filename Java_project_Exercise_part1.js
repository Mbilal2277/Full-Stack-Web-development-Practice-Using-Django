
var Fname = prompt("Enter your First name");
var Lname = prompt("Enter your last name");
var age = prompt("Enter your age");
var height = prompt("Enter your height in cms");
var petname = prompt("Enter your pet's name");
alert("Thanks a lot for the information");

var length = petname.charAt(petname.length-1);

if (Fname[0] === Lname[0] &&  20<= age <=30 && height>= 170 && length === "y" ) {
  console.log("Congrats comrade, you have passed the spy test");
    }
    else {
      console.log("Sorry, nothing to display");
    }

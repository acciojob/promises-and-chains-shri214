//your JS code here. If required.
//your JS code here. If required.
var nameElement = document.querySelector("#name");
var ageElement = document.querySelector("#age");
var btnElement = document.querySelector("#btn");
let calc=()=>{
var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    var age = ageElement.value;
    var name = nameElement.value;
   // var age = ageElement.value;
   //  var name = nameElement.value;
   if (!(age && name)) {
     alert("Please enter valid details");
    return;
   }
    if (age < 18) {
      reject(`Oh sorry ${name}. You aren't old enough.`);
    } else {
      resolve(`Welcome, ${name}. You can vote.`);
    }
  }, 4000);
});
return promise;
}

// function callPromise() {
//     return promise;
// }
function handleSubmit(e) {
    e.preventDefault();
  calc().then((data)=>{
	  alert(data);
  }).catch((data)=>{
	  alert(data);
  });
}

btnElement.addEventListener("click", handleSubmit);
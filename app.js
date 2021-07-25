
//  var itemsArray = [
//      { name: "juice", price: "50", quantity: "3" },
//      { name: "cookie", price: "30", quantity: "9" },
//      { name: "shirt", price: "880", quantity: "1" },
//      { name: "pen", price: "100", quantity: "2" }]


//      let addAll = 0;

//      for(var i=0;i<itemsArray.length;i++){
//          let add = Number(itemsArray[i].price)
//           * Number(itemsArray[i].quantity);

//          addAll = addAll + add;

//          console.log(itemsArray[i].name," --- ",add);


//      }

//      console.log("total price of all items are ",addAll);








//  let test = {
//      firstName: "Osama",
//      email: "@gmail.com",
//      password: "etc",
//      age: "12",
//      gender: "male",
//      city: "lahore",
//      country: "Pak"
//  }

//  console.log(test.hasOwnProperty("age"))
//  console.log(test.hasOwnProperty("country"))
//  console.log(test.hasOwnProperty("firstName"))
//  console.log(test.hasOwnProperty("lastName"))






//  function Person(firstName,email,password,age,gender,city,country) {
//      this.firstName = firstName,
//      this.email = email,
//      this.password = password,
//      this.age = age,
//      this.gender = gender,
//      this.city = city,
//      this.country = country
//  }

// let myData = new Person("m.osama","etc@gmail.com","etc",12,"male","khi","pakistan")
// console.log(myData.firstName);
// console.log(myData.email);
// console.log(myData.password);
// console.log(myData.age);
// console.log(myData.gender);
// console.log(myData.city);
// console.log(myData.country);


    
// function Record2(name, gender, address, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
// };

//  var arr = [];

// function getInputValue() {
//     var inputVal1 = document.getElementById("name").value;
//     var inputVal2 = document.getElementById("gender").value;
//     var inputVal3 = document.getElementById("address").value;
//     var inputVal4 = document.getElementById("education").value;
//     var inputVal5 = document.getElementById("profession").value;
    
//     var rec1 = new Record2(inputVal1, inputVal2, inputVal3, inputVal4, inputVal5);
//     arr.push(rec1);
//     localStorage.setItem("rec1", JSON.stringify(rec1));
//}

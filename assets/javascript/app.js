// console.log("time");
// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyCxjJ04Z5kmOEPyxv23IMILrA-ltcAdBeg",
    authDomain: "testproject-5dac0.firebaseapp.com",
    databaseURL: "https://testproject-5dac0.firebaseio.com",
    projectId: "testproject-5dac0",
    storageBucket: "testproject-5dac0.appspot.com",
    messagingSenderId: "949902679531"
  };

firebase.initializeApp(config);

var dataBase = firebase.database()
console.log(dataBase);

dataBase.ref().set( 
  {
    trainName : "berekly",
    firstTraintime: " 09:00",
    trainDestination: "san francisco",
    frequencyTime: "00:10"
  }
)

// 2. Create button for adding new train - then update the html + update the database
$("#add-train-btn").on("click",function(event) {
    event.preventDefault();
console.log("event");
})

// var trainName = $("#trainNameInput").val().trim();
var firstTraintime = $("#firstTraintime").val().trim();
var trainDestination = $("#trainDestnation").val().trim();
// var frequencyTime = $("#frequencyTime").var().trim();

// test for variables
// console.log("trainName");
console.log("firstTraintime");
console.log("trainDestination");
// console.log("frequencyTime");
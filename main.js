var myText = "Hello World" , myFavouriteFood = "Pizza";

console.log(myText);

window.alert(myFavouriteFood);
let likeThings = ["Outdoor Games","Video Games","Watching Series","Exercising in gym","Listening podcasts"]
for (let i = 0; i < 5; i++) {
    document.write("<h2>"+likeThings[i] +"</h2>")
}
document.write("<p>This content is generated by document.write() function.</p>");

// Basic Object
let person = {
    firstName: "Yash",
    lastName: "Bhakta",
    age: 21,
    sayHello: function() {
        window.alert("Hello, I'm " + this.firstName + " " + this.lastName + ".");
    }
};

// Accessing object properties
console.log("First Name:", person.firstName);
console.log("Age:", person.age);

// Calling a method of the object
person.sayHello();

let roundedNumber = Math.round(4.7); // Result: 5
let floorNumber = Math.floor(4.7); // Result: 4
let ceilNumber = Math.ceil(4.3); // Result: 5
let absoluteValue = Math.abs(-7); // Result: 7
let squareRoot = Math.sqrt(9); // Result: 3
let powerResult = Math.pow(2, 3); // Result: 8
let randomNumber = Math.random(); // Result: a random number between 0 and 1
let maxNumber = Math.max(10, 5, 8, 15); // Result: 15
let minNumber = Math.min(10, 5, 8, 15); // Result: 5

document.write("<p>roundedNumber " +roundedNumber +"<br>floorNumber "+floorNumber +"<br>ceilNumber "+ ceilNumber+"</p>")
document.write("<p>absoluteValue " +absoluteValue +"<br>squareRoot "+squareRoot +"<br>powerResult "+ powerResult+"</p>")
document.write("<p>randomNumber " +randomNumber +"<br>maxNumber "+maxNumber +"<br>minNumber "+ minNumber+"</p>")

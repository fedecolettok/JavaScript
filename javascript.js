/*
   every()

   DEFINITION AND USAGE
   - The every() method checks a function for each array element.
   - The every() method returns true if the function returns true for all elements.
   - The every() method returns false if the function returns false for at least one element.
   - The every() method doesn't execute the function for empty elements.
   - The every() method doesn't change the original array.

   SYNTAX
   array.every(function(currentValue, index, arr), thisValue

   PARAMETERS
   Parameter   |  Description
---------------|-------------------
function       |  (R) A function to be run for each array's element
currentValue   |  (R) The value of the current element
index          |  (O) The index of the current element
arr            |  (O) The array of the current element
thisValue      |  (O) Default = undefined. A value passed to the function as its `this` value

   RETURN VALUE
   Type        |  Description
---------------|-------------------
A boolean      |  `true` if all elements pass the test, otherwise `false`

*/

// Check if all values in `ages[]` are > 18
const ages = [32, 33, 26, 40]

console.log(ages.every(checkAge));

function checkAge(age) {
   return age > 18   
}


// Check if all answers are the same
const survey = [
   {name: "Steve", answer: "Yes"},
   {name: "Jessica", answer: "Yes"},
   {name: "Peter", answer: "Yes"},
   {name: "Sam", answer: "No"}
];

let isSameAnswer = survey.every(function(surv, index, array) {
   if (index === 0) {
      return true;
   } else {
      return (surv.answer === array[index - 1].answer)
   }
})



const students = [
   {name: 'Federico',
   courses: {
      matemáticas: 86,
      inglés: 98,
      historia: 74
   }},
   {name: 'Trinidad',
   courses: {
      matemáticas: 97,
      inglés: 81,
      historia: 80
   }},
   {name: 'Marianela',
   courses: {
      matemáticas: 84,
      inglés: 94,
      historia: 8
   }},
];

let allStudentsPassed = students.every(function(student, index, array) {
   let courses = Object.values(student.courses);
   return courses.every(function(courseGrade) {
      return courseGrade > 60
   });
});

console.log(allStudentsPassed);
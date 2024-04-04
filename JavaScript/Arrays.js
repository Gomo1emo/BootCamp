let courses = ["Javascript","Java","Angular","React"];//Pre-defined array of courses
courses.length = 4;

courses[4] = "Typescript"
courses[5] = "Vue"
console.log("number of courses available: " + courses);

//Check if array is object or string 
console.log(typeof courses)

//injecting multiple values into a single array
courses.push("C++","Flutter","C#","Python");

console.log("New semester courses "+ courses);
//Check if array is an array method
console.log(`courses are: , ${courses instanceof Array}`)
console.log("is this still an array?" + Array.isArray(courses))

let faculty = courses.toString();
console.log(`courses are: , ${faculty instanceof Array}`)
console.log("courses as string" + faculty);
console.log(typeof faculty)
console.log(faculty.toUpperCase())
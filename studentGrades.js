let sg50 = [50,51,52,53,54,55,56,57,58,59,60];
let sg60 = [61,62,63,64,65,66,67,68,69,70];
let sg70 = [71,72,73,74,75,76,77,78,79,80];
let sg80 = [81,82,83,84,85,86,87,88,89,90];
let sg90 = [91,91,93,94,95,96,97,98,99,100];
let sgAll = [50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,91,93,94,95,96,97,98,99,100];
let sgRan = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];



// console.log("How many items in array?", sgRan.length);

let sortedNumbers = sgRan.sort(function(first, second){
	console.log("first:", first, "second:", second);
    console.log("first minus second", first - second);
    
	return first - second; 
});

let lowRan = sortedNumbers.slice(0,1)
let hiRan = sortedNumbers.slice(11)
console.log("sortedNumbers", sortedNumbers);
console.log("lowest number", lowRan);
console.log("highest number", hiRan);




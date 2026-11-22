// Task 3: getGrade (Warm-up)
// Turn a score into a letter grade.
//
// - 90+ is "A", 80+ is "B", 70+ is "C", 60+ is "D", otherwise "F".
// - A score below 0 or above 100 gives "Invalid".

function getGrade(score) {
  if (score <0 || score >100 )return "Invalid"
 if (score >= 90 ){
  return "A";
 }
 else if (score >=80){
  return "B"
 }
 else if (score >=70){
  return "C"
 }
 else if (score >=60){
  return "D"
 }
 else if (score >=50 || score >=0){
  return "F"
 }
 
 
}

// Expected output:
console.log(getGrade(95));   // "A"
console.log(getGrade(90));   // "A"
console.log(getGrade(85));   // "B"
console.log(getGrade(72));   // "C"
console.log(getGrade(65));   // "D"
console.log(getGrade(30));   // "F"
console.log(getGrade(0));    // "F"
console.log(getGrade(101));  // "Invalid"
console.log(getGrade(-5));   // "Invalid"

//question 1//
 
let finalCount; 

for (let i = 1; i <= 5; i++) {
  console.log("Inside loop, i =", i);
  finalCount = i;
 }

console.log("Final counter value after loop =", finalCount);




//number 2 question//

function canEnterVenue(age, hasID, hasParentConsent) {
  if (age >= 18 && hasID) {
    return "Access granted: Adult with valid ID.";
  } 
  else if (age >= 13 && age <= 17 && hasID && hasParentConsent) {
    return "Access granted: Minor with ID and parent consent.";
  } 
  else if (age < 13) {
    return "Access denied: Under 13 not allowed.";
  } 
  else if (!hasID) {
    return "Access denied: Valid ID required.";
  } 
  else {
    return "Access denied: Parent consent required.";
  }
}

// Test cases
console.log(canEnterVenue(25, true, false)); 
console.log(canEnterVenue(16, true, true)); 
console.log(canEnterVenue(16, true, false)); 
console.log(canEnterVenue(10, true, true));  
console.log(canEnterVenue(20, false, false)); 
console.log(canEnterVenue(15, false, true));


//question 3//


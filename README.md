ID= 11236716

Task 1: processArray Function
- *Objective*: Transform an array of numbers.
- *Functionality*: 
  - Takes an array of numbers as input.
  - Returns a new array where:
    - Each even number is squared.
    - Each odd number is tripled.
 Task 2: formatArrayStrings Function
- *Objective*: Modify an array of strings based on another array of processed numbers.
- *Functionality*:
  - Takes two arrays as input: one of strings and one of numbers (processed by processArray).
  - Returns a new array where each string is modified based on the corresponding number:
    - If the number is even, the string is converted to uppercase.
    - If the number is odd, the string is converted to lowercase.
 Task 3: createUserProfiles Function
- *Objective*: Create user profiles from two arrays.
- *Functionality*:
  - Takes two arrays as input: one of original names and one of modified names (from Task 2).
  - Returns an array of objects where each object contains:
    - originalName: the original name from the input array.
    - modifiedName: the corresponding modified name from the input array.
    - id: an auto-incremented identifier starting from 1.
  

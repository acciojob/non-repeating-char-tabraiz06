function firstNonRepeatedChar(str) {
	
 // Write your code here
		let arr= str.trim().split("")
	let result = [];
  for (let i = 0; i < arr.length; i++) {
    arr.filter((ele) => ele === arr[i]).length > 1
      ? result.push(null)
      : result.push(arr[i]);
  }
  return result.find((ele) => ele !== null)
    ? result.find((ele) => ele !== null)
    : null;
}
const input = prompt("Enter a string");

let res = console.log(firstNonRepeatedChar(input));
alert(console.log(firstNonRepeatedChar(input))); 

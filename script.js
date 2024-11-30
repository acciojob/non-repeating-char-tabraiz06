function firstNonRepeatedChar(str) {
	
 // Write your code here
		let arr= str.trim().split("")
	let result=""
	for(let i=0; i<arr.length; i++){
	   arr.filter(ele=> ele === arr[i]).length >1 ? result=null : result=arr[i]
	}
	console.log(result)
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

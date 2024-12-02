function firstNonRepeatedChar(str) {
  // Write your code here
  let arr = str.trim().split("");
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    if (res[arr[i]]) {
      res[arr[i]] = res[arr[i]] + 1;
    } else {
      res[arr[i]] = 1;
    }
  }
  let result=Object.values(res).sort((a,b)=>a-b)
  
  if(result.includes(1)){
 return  Object.keys(res).find(ele=>res[ele] === result[0])
  }else{
    return null
  }

}
const input = prompt("Enter a string");

let res = console.log(firstNonRepeatedChar(input));
alert(console.log(firstNonRepeatedChar(input))); 

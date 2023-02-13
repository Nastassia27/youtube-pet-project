/*function digitize(num) {
    return num.toString().split('').reverse().map(Number);
}

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }
digitize(3457438)
sumMix(45738);

function alphabetPosition(text) {
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	return text.toLowerCase().split("").filter(function(x){
		if (x.toLowerCase().match(/[a-z]/)) {
			return x;
		}
	}).map(function(y){
		if (alphabet.includes(y)) {
			return (alphabet.indexOf(y)+1);
			return (alphabet.indexOf(y)+);
		}
	}).join(" ");
}
alphabetPosition("Hello world");
String.prototype.toAlternatingCase = function () {
	let str = '';
	 for(let i = 0; i< this.length; i++){
	   if (this[i] == this[i].toLowerCase()){ 
		 str += this[i].toUpperCase();
	   } else {
		 str += this[i].toLowerCase();
	   }
	 }
	 return str;
	 return alphabetPosition ();
   }

   // Will there be enough space?
   function enough(cap, on, wait) {
	let allPeople = on+wait;
	if(cap>=allPeople){
	  return 0;
	} return allPeople-cap;
  }
  function reverseWords(str) {
	let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
  }

  return reverseWords("Hello World");
  // replace !

  function removeExclamationMarks(s) {
	return s.replace(/\u0021/g, '');
  }

  function powersOfTwo(n){
	let arr=[];
	for (let i = 0; i<=n; i++){
	  let number = Math.pow(2, i);
	  arr.push(number);
	}
	return arr;
  }
  //stray numbers
  function stray(numbers) {
	var a = numbers.sort();
	
	if(a[0] != a[1]) {
	  return a[0]
	} 
	return a[a.length-1]
  }

  function makeNegative(num) {
	if(num>=0){
	  num = num* -1
	  
	  }
	return num;
  }*/
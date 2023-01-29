function digitize(num) {
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
		}
	}).join(" ");
}
alphabetPosition("Hello world");

function alphabetMax(max, min){
    var listOfItems = 0;
    describe("Test", function(){
        it("Examples", function(){
          Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
          Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
          Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
          Test.assertEquals(max([5]), 5);
        });
}
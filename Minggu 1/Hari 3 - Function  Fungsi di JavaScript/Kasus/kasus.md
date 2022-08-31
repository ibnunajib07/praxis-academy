#Looping Triangle

let n = 7;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);


#Fizz Buzz

let n = 100;
	for (let i = 1; i <= n; i++){
		if (i%3 == 0){
        console.log("fizz");}
      	if (i%5 == 0 && i%3 != 0){
        console.log("buzz");}
        else console.log(i);
	}

#Chessboard

    var chessBoard = "";
    var size = 9;

    for (var lineCounter = 1; lineCounter < size; lineCounter++) { 

        if (lineCounter%2 === 0) { 

        for (var charCounter = 1; charCounter < size; charCounter++) {
            var evenOdd = (charCounter%2 === 0);
            switch (evenOdd) {
                case true:
                    (chessBoard += " ");
                    break;
                case false:
                    (chessBoard += "#");
                    break;
                }
            }                   
        }
    else { 

        for (var charCounter = 1; charCounter < size; charCounter++) {
            var evenOdd = (charCounter%2 === 0);
            switch (evenOdd) {
                case true:
                    (chessBoard += "#");
                    break;
                case false:
                    (chessBoard += " ");
                    break;
            }
            }                       
        }   
    chessBoard += "\n";
    }
    console.log(chessBoard);
// Create a variable below
var helloWorld = "Hello World";
var number = 0
// Console.log() your variable here.

//console.log(helloWorld);

function numberSequence(name,number){
    console.log(number);
    var n = number, firstTerm = 0, secondTerm =1;
    console.log("Hi "+name+", thanks for inputting your information!");
    console.log("Fibonacci Sequence in "+number+" terms");
    for(i=1;i<=n;i++){
        console.log(firstTerm);

        //Fibonacci Sequence = (Xn-1+Xn-2)
        var nextNumber = firstTerm + secondTerm;
        firstTerm = secondTerm;
        secondTerm = nextNumber;
    } 
}
function userinput(){
    var name = prompt("What is your name?")
    var number = prompt("What is your favorite number");
    numberSequence(name,number);
}

function design(){
    var number = prompt("Enter a number")
    for(i=1;i<=number;i++){
        console.log(i);
        for(n=1;n<=number;n++){
            console.log(n);
        }
    }
}

//userinput();
design();
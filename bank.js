var fs = require("fs");
var math = require("math");
var total = fs.readFile("bank.txt", "utf8", function readtotal(read, data){
  data.split;

}));

});

var action = process.argv[2];
var value = process.argv[3];



 switch(action){
   case 'total':
   Total()
   break;

   case 'deposit':
   Deposit()
   break;

   case 'withdrawl':
   Withdrawl()
   break;

   case 'lotto':
   Lotto()
   break;


 }


 function Total(action, value){
   var newtotal= total + value;
   fs.appendFile("bank.txt")
   }));
   console.log(action);
 };
 function Deposit(action, value){

   console.log(value);
 };
 function Withdrawl(action, value){
   fs.readFile("bank.txt", function({

   });
   console.log();
 };
 function Lotto(action, value){
   fs.readFile("bank.txt",)
   console.log();
 };


// # BankJs
//
// ## File
//
// * [`bank.txt`](Unsolved/bank.txt)
//
// ## Instructions
//
// * Starting from scratch, build a Node application called `bank.js` which takes in user inputs via the command line to register bank transactions.
//
// * The transactions possible are:
//
//   * `total` - this should tally up all of the money in the bank balance and display it for the user.
//
//   * `deposit <number>` - this should add a positive amount to the bank balance. (No need to display the total here)
//
//   * `withdraw <number>` - this should add a negative amount to the bank balance. (No need to display the total here)
//
//   * `lotto` - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.
//
// * For all deposits, withdrawals, or lotto purchases the transaction should be registered in the `bank.txt` file.
//
// ### Hints
//
// * Consider making a series of if-then or switch-case statements to identify the "type" of transaction and the "amount" involved (if relevant).
//
// ### Bonuses
//
// * If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.
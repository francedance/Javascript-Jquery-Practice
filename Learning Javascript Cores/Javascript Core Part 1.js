/*Topics here are discussed in "Javascript The Definitive Guid" by David Flanagan
Warning: Do not run this javascript file directly since these are just examples, it is not completely functioning program! 
Organized by Jae Hyuk Oh

Covers Core Javascript: 
	+Expression Statements
	+Compound and Empty Statements
	+Empty Statements
	+Declaration Statements
	+Conditionals (if , if..else, if..else if, switch)
	+Loops (while, do..while, for , for..in)

*/

//Examples of Expression Statements in Javascript


		var greeting = "Hello" + name; 
		var i *= 3; //equal to i = i * 3  
		counter++; // assume counter variable is declared
		delete o.x; // delete operation is also expression statement
		alert(greeting); // function calls are expression statement
		widow.close();
		Math.cos(x); //assume variable x is declared 
		var cx = Math.cos(x); 

//Examples of Compound and Empty Statements 

		{
			//Compound statements are enclosed with two curly braces
			//Web browser will treat any codes between two curly braces as one statement. 
			var x = Math.PI;
			cx = Math.cos(x);
			console.log("cos(pi) = " + cx );
			
		}

//Examples of Empty statement 

		; //just semicolon itself is an empty statement
		for(i = 0 ; i < a.length; a[i++] = 0) ; 
		/* assume var a = new Array(size) is declared, this initializes array with 0.
		Usually, after for() loop we have some statement , ex: for(i = 0 ; i < a.length ; i++) a[i] = 0 ;
		Above method with empty statement works same as traditional. 
		 */

		//often people accidentally put ; next to if condition for example,
		if ((a==0) || (b== 0)); //<- this line is meaningless and doesn't do any! 
			o = null; // <- this line will always run 
			
		//If you need empty statements, use comments to distinguish and avoid of being confused 
		for(i = 0; i < a.length ; a[i++] = 0) /* empty */ ; //<- specify that after for() is empty! 
		
//Examples of Declaration statements 

		//usually var and function are declaration statements 
		var i; //one simple variable
		var j = 0; //one var, one value
		var p , q; //two variables
		var greeting = "hello" + name; //a complex initializer (make sure you define what 'name' us!
		var x = 2.34, y = Math.cos(0.75), r, theta; //Many variables 
		var x = 2, y= x*x; //Second var uses the first
		var x = 2, //Multiple variables...each on its own line
			f= function(x){return x*x},
			y = f(x);
			
		//if var is defined inside a function, it is local variable otherwise it is a global variable, example:
		var x = 3 ; // <- var x 3 is global variable!
		
		var call = function different() {
			var x = 4; 
			console.log(x); // <- x is 4 in this case since var x = 4 was declared inside the function named different.
		}
		
		console.log(x); // <- this will print out the value of x from global variable which is 3
		call(); // <- this will print out the value of x inside function different() which is 4
		
		//When declaring a function, use keyworf "function" infront of name.
		//For example. if you want to declare a function that simply print out a message with function name "message" ,
		function message () {
			console.log('some message');
		}
		
		message() ; // simply calling function message !
		
		//to pass an argument to a function do this:
		function message (var1, var2 , var3 .. etc) { //you can have many arguments as you want!
			return var1 + var2 + var3 + .. + etc; //return the sum of all the arguments!
			
		}
		
		message(1 , 2 , 3 , ... , etc); // so var1 = 1 , var1 = 2 , var3 = 3 and etc
		

//Examples of Conditionals 

	if (expression) //General rule of simple if condition followed by statement. 
		statement;	//The value of expression should spit out a boolean value = true or false, 1 or 0. 
		
		
	//example
	if (1<2) // since 1 is less than 2 , the value of "1<2" becomes true or 1. If true, execute the next statement.
		console.log("1 is less than 2!");
	
	
	if (expression) //General rule of simple if..else.. condition 
		statement;
	else 
		statement;
	
	//example 
	
	if (1<2)
		console.log("1 is less than 2!"); //this is executed when 1<2 condition is true
	else 
		console.log("where are you from?"); //this is executed when 1<2 condtion is false (basically in this situation, it is useless code but I put it as example
	
	if (expression) //General rule of simple if..else if.. condition
		statement;
	else if(expression)
		statement;
	
	//example
	//In case of if..else.. , 'else' part is completely ignored if 'if' part is true and if 'if' part is false, whatever in 'else' part is executed!
	//but in if..else if..else if ...else , you can give program some more choices. 
	var n = 1;
	
	if (n == 1) 
		console.log("1"); //if n is equal to 1 execute 
	else if (n == 2)
		console.log("2"); //if n is equal to 2 execute 
	
	//switch 
	//General rule of simple switch statement
	
	switch(expression) {
		statements
	}
	
	//examples 
	switch(n) {
		case 1: //this applies when the value of n === 1 *note: we use '===' and not '=='! This is important.
			//Execute code block #1.
			break; //break statement works as a brake in switch statement. So when codes are executed, it knows where to jump to which is default: 
					//if break statement isn't provided, it will automatically execute codes that belong to next case which is case 2:
		case 2: //this applies when the value of n === 2
			//Execute code block #2.
			break;
		case 3: //this applies when the value of n === 3
			//Execute code block #3.
			break;
		default: //this is the part where switch statement flows to when none of the above cases are met! So if (n) is never === 1 , 2, 3, then it will execute 
				//codes belonging to default.
			//Execute code block #4.
			break;
		
	}
	
	//More switch example
	
	function convert(x) {
		switch(typeof x) {
			case 'number':
				return x.toString(16);
			case 'string':
				return '"' + x + '"';
			default: 
				return String(x);
		}
		
	}

//Example of Loops

	//While loop
	
	while (expression) //General rule of while loop
		statement;
		
	/*Example of White loop in use	
	These codes simply counts from 0 to 9 using loop. Generally, loops are used to repeat single task works. 
	In this case, instead of writing 'console.log(0)' , 'console.log(1)' ..'console.log(9)' , we put them in a loop that loops until it prints 10 times.
	Also in this case, we are using 'var count' as to control the overall loop flow. By incrementing count, we can make it stop exactly at anywhere! 
	If, expression part is never resolved or comes to an end, for example when you have 'while (0 < 10)' , or 'while (true)', you're going to experience 
	what's called an infinited loop! AKA, a loop that never ends until you specify an exit condition. I think using infinite loop in javascript is critical as to
	it can literally make a web browser irresponsive.
	*/
	
	var count = 0;
	while (count < 10) {
		console.log(count);
		count++;
		
	}
	
	//Do..while loop
	
	do //General rule of do..while loop.
	 statement
	 while(expression);
	
	/* The difference between 'while' loop and 'do..while' loop is that in 'do..while' loop, a body of statement will be executed at least once compared to 'while' loop
	 which it could never run! the main reason is that in 'do..while' loop, the condition is checked after all the statements are executed.*/
	 
	 //Example of Do..while loop in use
	 
	 function printArray(a) {
		 var len = a.length, i=0;
		 if(len == 0)
			 console.log("Empty Array");
		 else {
			 do {
				 console.log(a[i]);
			 }while(++i < len);
			 
			 /*
			 do {console.log(a[i]);
			 }while(++i < len); 
			 
			can bee replaced by 
			
			while(i < len) {
				console.log(a[i]);
				i++;
			}
			 
			 */
			 
		 }
	 }
	 
	 //For loop
	 
	 for(initialize ; test ; increment statement/decrement statement)
		statement; //General rule of for loop
	 
	 //Notice that for loop has equivalent result as while loop
	 //for example,
	 
	 for(initializer ; test ; increment statement/decrement statement)
		 statment; 
	 //same as 
	 initialize;
		while(test) {
			statement;
			increment statement/decrement statement;
		}
		
	//For loop in use
	
	var i,j;
	var sum = 0;
	for (i=0, j=10 ; i < 10 ; i++, j--) 
		sum += i*j;
		/*i=0 and j=10 belongs to initialize section
		i < 10 belongs to test section
		i++ and j-- belongs to increment/decrement section
		sum += i*j belongs to statement section
		
		The loop simply starts from where i=0 and j=10. Every loop, the value of i will increment and the value of j will decrement, and product of i and j will
		be added towards the sum. 
		
		so, at the first round of loop, 
			i = 0 ; j = 10 therefore sum = sum + (0 * 10) which is 0, then i becomes 1 and j becomes 9 for next round.
			at the second round of loop,
			i = 1 ; j = 9 therefore sum = sum (currently the value is 0 from the first round) +  (1 * 9), then i becomes 2 and j becomes 8 for next round.
			At this point, the value of sum is 9. And we will be running this loop until the condition ( i < 10) is met! 
		*/
		
	//Another example of loop in use
	
	function tail(o) { 
	
		//return the tail of linked list o 
		//Traverse while o.next is truth
		
		for(; o.next; o = o.next) /* empty */;
		return o;
		
		//if test expression is ommited from for (); the loop repeats forever! 
		
	}
	
	//For..in Loops
	//Loops through the properties of an object
	
	for (variable in object) //General rule of for..in loop 
		statement
		
	//For..in loop in use 
	
	var o = {x:1 , y:2 , z:3};
	var a = [] , i = 0;
	for(a[i++] in o) /* empty */ ;
		
	//Better example!
	
	var drinks = { //creation of object drinks
		"coffee":["Espresso","Americano","Latte"],
		"alcohol":["vodka","whiskey","rum","wine"],
		"juice":["orange","peach","strawberry"]
		}
		
	var x;
	for(x in drinks) 
		console.log(x); //this will print out properties "coffe" , "alcohol" , "juice" 
	
	for(x in drinks)
		console.log(x + ": " + drinks[x]); 
	/*
	this will print out whole lists of drinks
	
	coffee: Espresso, Americano, Latte 
	alcohol: vodka, whiskey, rum, wine
	juice: orange, peach, strawberry 
	*/
	
	 
	 
		
		





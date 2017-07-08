**Many of the contents here are sourced/derived from:**

[Javascript: The Definitive Guide 6th Edition by David Flanagan](https://www.amazon.com/JavaScript-Definitive-Guide-David-Flanagan/dp/0596101996/ref=sr_1_2?ie=UTF8&qid=1499269479&sr=8-2&keywords=javascript+the+definitive+guide)

**This is like my study notes + guides to learning Javascript with my own comments/thoughts/examples.Some of the codes here might not work for other Javascript versions since this note covers ECMAScript 5. I am willing to accept any changes so please feel free to give me feedbacks!** 

# Part 1:

# Covers Javascript Core of:

- [Expression Statements](#expression-statements)
- [Compound and Empty Statements](#compound-and-empty-statements)
- [Empty Statements](#empty-statements)
- [Declaration Statements](#declaration-statements)
- [Conditionals](#conditionals)

	[If](#if)
	
	[If else](#if-else)
	
	[If else if](#if-else-if)
	
- [Loops](#loops)
	
	[While](#while)
	
	[Do while](#do-while)
	
	[For](#for)
	
	[For in](#for-in)

# Part 2: 

# Covers Javascript Core of:
	
- [Jumps](#jumps)

	[Labeled Statement](#labeled-statement)
	
	[Break](#break)
	
	[Continue](#continue)
	
	[Return](#return)
	
	[Throw](#throw)
	
	[Try-Catch-Finally](#try-catch-follow)
	
- [Miscellaneous Statements](#miscellaneous-statements)

	[With](#with)
	
	[Debugger](#debugger)
	
	[Use Strict](#use-strict)
	
- [Summary of JavaScript Statements](#summary-statements)

## Expression Statements

**examples:**

```Javascript
	var greeting = "Hello" + name; 
	var i *= 3; //equal to i = i * 3  
	counter++; // assume counter variable is declared
	delete o.x; // delete operation is also expression statement
	alert(greeting); // function calls are expression statement
	widow.close();
	Math.cos(x); //assume variable x is declared 
	var cx = Math.cos(x); 
```
## Compound and Empty Statements 
------------------------

**Compound statements are enclosed with two curly braces. Web browser will treat any codes between two curly braces as one statement.**

**examples:**

```Javascript
	{	
	var x = Math.PI;
	cx = Math.cos(x);
	console.log("cos(pi) = " + cx );
	}
```
## Empty Statements
------------------------

**examples:**

**just semicolon itself is an empty statement**
	
```Javascript
	; 
```
```Javascript
	for(i = 0 ; i < a.length; a[i++] = 0) ; 
	
	/* assume var a = new Array(size) is declared, this initializes array with 0.
	Usually, after for() loop we have some statement , ex: for(i = 0 ; i < a.length ; i++) a[i] = 0 ;
	Above method with empty statement works same as traditional. 
	*/
```

**often people accidentally put ; next to if condition for example,**
	
```Javascript

	if ((a==0) || (b== 0)); //<- this line is meaningless and doesn't do any! 
	o = null; // <- this line will always run 
```
			
**If you need empty statements, use comments to distinguish and avoid of being confused**
	
```Javascript	

	for(i = 0; i < a.length ; a[i++] = 0) /* empty */ ; //<- specify that after for() is empty! 

```
## Declaration Statements

**examples:**

```Javascript

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
```
			
**If  var is defined inside a function, it is local variable otherwise it is a global variable, example:**
	
```Javascript

	var x = 3 ; // <- var x 3 is global variable!
		
	var call = function different() {
		var x = 4; 
		console.log(x); // <- x is 4 in this case since var x = 4 was declared inside the function named different.
	}
		
		console.log(x); // <- this will print out the value of x from global variable which is 3
		call(); // <- this will print out the value of x inside function different() which is 4
```
	
**When declaring a function, use keyword function infront of name. For example. if you want to declare a function that simply print out a message with function name "message" ,**
	
```Javascript

	function message () {
		console.log('some message');
	}
		
		message() ; // simply calling function message !
```
		
**To pass an argument to a function do this:**
		
```Javascript		

	function message (var1, var2 , var3 .. etc) { //you can have many arguments as you want!
		return var1 + var2 + var3 + .. + etc; //return the sum of all the arguments!
			
	}
		
		message(1 , 2 , 3 , ... , etc); // so var1 = 1 , var1 = 2 , var3 = 3 and etc
```

## Conditionals


### **If**

 **General syntax of simple if condition followed by statement.**

```Javascript

	if (expression) 
		statement; //The value of expression should spit out a boolean value = true or false, 1 or 0. 
		
```		
**examples:**

```Javascript

	if (1<2) // since 1 is less than 2 , the value of "1<2" becomes true or 1. If true, execute the next statement.
		console.log("1 is less than 2!");
		
```

### **If else**

 **General syntax of simple if..else.. condition** 
 
```Javascript

	if (expression)
		statement;
	else 
		statement;
```
	
**examples:**
	
```Javascript

	if (1<2)
		console.log("1 is less than 2!"); //this is executed when 1<2 condition is true
	else 
		console.log("where are you from?"); //this is executed when 1<2 condtion is false (basically in this situation, it is useless code but I put it as example
		
```
### **If else if**

 **General syntax of simple if..else if.. condition**
	
```Javascript

	if (expression)
		statement;
	else if(expression)
		statement;
```
	


	**In case of if..else.. , 'else' part is completely ignored if 'if' part is true and if 'if' part is false, whatever in 'else' part is executed! but in if..else if..else if ...else , you can give program some more choices.**

**examples:**

```Javascript

	var n = 1;
	
	if (n == 1) 
	
		console.log("1"); //if n is equal to 1 execute 
	else if (n == 2)
	
		console.log("2"); //if n is equal to 2 execute 
```
### **Switch**

 **General syntax of simple switch statement**
	
```Javascript

	switch(expression) {
		statements
	}
```

**examples:**

```Javascript

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
```
	
**More switch examples:**
	
```Javascript

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
```

## Loops

### While

**General syntax of while loop**

```Javascript
	while (expression) 
		statement;
```
**examples:**

**Example of White loop in use:**	

```Javascript

	var count = 0;
	while (count < 10) {
		console.log(count);
		count++
		
	}
	
```

**These codes simply counts from 0 to 9 using loop. Generally, loops are used to repeat single task works. In this case, instead of writing** 

>'console.log(0)' , 'console.log(1)' ..'console.log(9)'

**we put them in a loop that loops until it prints 10 times. Also in this case, we are using 'var count' as to control the overall loop flow. By incrementing count, we can make it stop exactly at anywhere! If, expression part is never resolved or comes to an end, for example when you have**

>'while (0 < 10)' , or 'while (true)'

**you're going to experience what's called an infinited loop! AKA, a loop that never ends until you specify an exit condition. I think using infinite loop in javascript is critical as to it can literally make a web browser irresponsive.**


### Do While

**General syntax of do..while loop.**

```Javascript
	do 
	 statement
	 while(expression);
	
```
**The difference between 'while' loop and 'do..while' loop is that in 'do..while' loop, a body of statement will be executed at least once compared to while loop which it could never run! the main reason is that in 'do..while' loop, the condition is checked after all the statements are executed.**

**examples:**

```Javascript
	function printArray(a) {
		var len = a.length, i=0;
		 if(len == 0)
			 console.log("Empty Array");
		 else {
			 do {
				 console.log(a[i]);
			 }while(++i < len);
			 
			 }
			}
```
**Notice: This,**

```Javascript
	 do {
	 console.log(a[i]);
	}while(++i < len); 
```

**Can be replaced by**

```Javascript

	while(i < len)
	{
	console.log(a[i]);
	i++;
	}

```

### For 

**General syntax of for loop**

```Javascript

 for(initialize ; test ; increment statement/decrement statement)
	tatement;

```
**Notice that for loop has equivalent result as while loop**
**examples:**

```Javascript

	 for(initializer ; test ; increment statement/decrement statement)
		 statment; 

```

**same as**

```Javascript

initialize;
	while(test) {
		statement;
		increment statement/decrement statement;
		}

```
**more examples of for loop in use**

```Javascript
	var i,j;
	var sum = 0;
	for (i=0, j=10 ; i < 10 ; i++, j--) 
		sum += i*j;
		
```
>i=0, j=10 
**belongs to initialize section**

>i < 10 
**belongs to test section**

>i++ and j-- 
**belongs to increment/decrement section**

>sum += i*j 
**belongs to statement section**

**The loop simply starts from where i=0 and j=10. Every loop, the value of i will increment and the value of j will decrement, and product of i and j will be added towards the sum.**

**First round of loop**

	i = 0 ; j = 10 
	
**therefore**

	sum - sum + (0 * 10)
	
**which is 0, then i becomes 1 and j becomes 9 for next round.
	
**Second round of loop**

	i = 1; j = 9
	
**therefore**

	sum = sum (currently the value if 0 from the first round) + (1*9)
	
**at this point sum = 9, then i become 2 and j becomes 8 for nexr round. And this pattern will repeat unti (i < 10) is met!**

**Some more examples:**

```Javascript

	function tail(o) { 
	
		//return the tail of linked list o 
		//Traverse while o.next is truth
		
		for(; o.next; o = o.next) /* empty */;
		return o;
		
		//if test expression is ommited from for (); the loop repeats forever! 
		
	}

```
### For In
**It is used to loop through the properties of an object**
**General syntax of For In loop**

```Javascript
	for(variable in object)
	statement
```
**examples:**

```Javascript
	
	var o = {x:1 , y:2 , z:3};
	var a = [] , i = 0;
	for(a[i++] in o) /* empty */ ;
```
**Here's better examples:**

```Javascript

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

```
**This will print out whole lists of drink**

	coffee: Espresso, Americano, Latte
	alcohol: vodka, whiskey, rum, wine
	juice: orange, peach, strawberry
	
	
## Jumps

** General ideas of Jump statements: **
**Jumps in javascript causes the javascript interpreter to jump to a new location in the source code. I believe that using Jumps in a software development is important to debug and track flows.**

	
**'break' statement =  makes the interpreter jump to the end of a loop or other statement.**
**'continue' statement = makes the interpreter skip the rest of the body of a loop and jump back to the top of a loop to begin a new iteration.**

**Javascript allows statements to be 'named', or 'labeled', and the 'break' and 'continue' can identify the target loop or other statement label.** 

**'return' statement = makes the interpreter jump from a function invocation back to the code that invoked it and also supplies the value for the invocation.**

**'throw' statement = raises, or "throws", an exception and is designed to work with the 'try'/'catch'/'finally' statement, which establishes a block of exception handling code.**

## Labeled statement

**General syntax of labeled statement**

```Javascript 
	
	identifier: statement 
	
```
**By labeling a statement, you give it a name that you can use to refer to it elsewhere in your program (somehow like a function name).**

**Example of labeled statement with 'continue'**

```Javascript
	
	//mainloop is the identifier
	mainloop: while(token != null) {
		
		// Code omitted...
		continue mainloop; // Jump to the next iteration of the named loop
		// More code omitted...
	}
	
```
```Javascript

	mainloop
	
```	
**is the identifier for while loop**

```Javascript
	continue mainloop;
```

**Means jump to the next iteration of the named loop (which is 'mainloop')**

## Break 

**Use this inside a loop to jump!**

```Javascript

	break;

```
**You can use it with label!** 

```Javascript

	break mainloop;
```

**Example of 'break' statement in use**

```Javascript

	for(var i = 0 ; i < a.length; i++) {
		if( a[i] == target) 
			break;
	}

```
**Example of 'break' statement + identifier (AKA label) in use**

```Javascript

	mainloop: while(token != null) { 

	// 'mainloop' is the identifier in this case. As long the word isn't reserved by javascript, it's fine. 
		
		if(token == target) 
			break mainloop; //this will exit the loop
		
	}
	
```

## Continue

**Continue statement is similar to the break statement. Instead of exiting a loop, however, continue restarts a loop at the next iteration. 'continue' statement**

**General syntax of 'continue' statement**

```Javascript

	continue;
```
**Just like 'break', you can also use 'continue' with label, for example**

```Javascript

	continue mainloop;
```
**'Continue' statement in use**

```Javascript

	for(i = 0 ; i < data.length; i++){
			if (!data[i]) continue; // Can't proceed with undefined data
			total += data[i];	
	}

```
## Return

**Recall that function invocations are expressions and that all expressions have values.**
**'return' statement within a function specifies the value of invocations of that functions.**

**General syntax of 'return' statement**

```Javascript
	
	return expression;

```
**If 'return' statement appear anywhere else but within the body of a function, it is a syntax error!!**
**example of 'return' statement in use**

```Javascript

	function square(x) { 
	
		/*It is a function who's name is square. It takes in a value 'x' from a caller and simply returns the square value of 'x' back to its caller!*/
		
		return x*x;
	}
	
	square(2);

```
**The value of**

	square(2) 

**is**

	4

**If for example, you do not include 'return' within a body of a function, then the value of caller is simply undefined. It's up to your choice to use 'return' statement. Usually, I will use 'return' when I need a to pass a value to a function for computation purposes or want to continuously use a value after function through out a program. Let's say, if a return value in a function is important to proceed a next function, I will store the return value like var x = square(x) , and use 'x' in future programming**

**Some more example**

```Javascript

	function display_object(o) {
	
		// Return immediately if the argument is null or undefined
		if (!o) return;
		// Rest of function goes here...
	}
	

```
## Throw

**An exception is a signal that indicates that some sort of exceptional condition or error has occured. To 'throw' an exception is to signal such an error or exceptional condition. To 'catch' an exception is to handle it to take whatever actions are necessary or appropriate to recover from the exception.In javascript, exceptions are thrown whenever a runtime error occurs and whenever the program explicitly throws one using the 'throw' statment. Exceptions are caught with the 'try'/'catch'/'finally' statements**

**General syntax of 'throw' statement**

```Javascript
	
	throw expressions;

```
**'throw' statement in use**

```Javascript

	function factorial(x) {
		// If the input argument is invalid, throw an exception!
		if (x < 0) 
			throw new Error("x must not be negative");
		//Otherwise, compute a value and return normally
		for(var f = 1; x > 1 ; f *= x, x--) /* empty */;
		return f;
		
	}

```
	Error 
	
**Error object has a 'name' property that specifies the type of error and a 'message' property that holds the string passed to the constructor function.**

## Try-Catch-Follow

**'try'-'catch'-'finally' are javascript's exception handling mechanism.**

**'try' : definies the block of code whose exceptions are to be handled**

**'catch' : which is a block of statements that are invoked when an exception occurs anywhere within the 'try' block**

**'finally' : contains cleanup code that is guaranteed to be executed, regardless of what happens in the 'try' block**

**The following code illustrates the syntax and purpose of the try/catch/finally statement:**
			 
```Javascript
	try {
			/*
			Normally, this code runs from the top of the block to the bottom without problems.
			But it can sometimes throw an exception, either directly, with a throw statement, or indirectly, by calling
			a method that throws an exception
			*/
		}
		catch (e) {
			/* 
			The statements in this block are executed if, and only if, the try block throws an exception.
			These statements can use the local variable 'e' to refer to the Error object or other value that was thrown.
			This block may handle the exception somehow, may ignore the exception by doing nothing, or may rethrow the exception with throw.
			*/
		}
		finally {
			/*
			This block contains statements that are always executed, regardless of what happens in the try block.
			They are executed whether the try block terminates:
				1) normally, after reaching the bottom of the block
				2) because of a break, continue, or return statement
				3) with an exception that is handled by a catch clause aboce
				4) with an uncaught exception that is still propagating
			*/
		}


```

**An example of try-catch-finally in use**

```Javascript

	try {
			//Ask the use to enter a number
			var n = Number(prompt("Please enter a positice integer", ""));
			// Computer the factorial of the number, assuming the input is valid
			var f = factorial(n); //Use the factorial function we've created up with 'throw new Error("x must not be negative")'
			//Display the result;
			alert(n + "! = " + f);
		}
		catch (ex) { //If the user's input was not valid, we end up here
			alert(ex); //Tell the user what the error is
		}
		//'fianlly' is optionals and not used often as 'catch'

```
## Miscellaneous Statements

## With

**'with' statement is used to temporarily extend the scope chain.**
**General syntax of 'with' statement**

```Javascript

	with(object)
		statement

```
**with' statement is forbidden under 'strict mode' and should be deprecated in non-strict mode: avoid using it whenever possible. Javascript code that uses 'with' is difficult to optimize and is likely to run more slowly than the equivalent code written without the 'with' statement**

**'with' statement in use**

```Javascript

	with(document.forms[0]) {//Access form elements directly here. For example:
		name.value = "";
		address.value = "";
		email.value = "";
		}

```
**Using 'with' statement as above will give you a shortcut of writing**

```Javascript
	document.forms[0].address.value = "";
	document.forms[0].name.value = "";
```
**multiple times :) BUT there's another shortcut too!**

```Javascript
	
	var f = document.forms[0];
	f.name.value = "";
	f.address.value = "";
	f.email.value = "";

```
## Debugger

**'debugger' statement normally does nothing. In practice, this statement acts like a breakpoint: execution of javascript code stops and you can use the 'debugger' to print variables' values, examine the call stack, and so on. Suppose, for example, that you are getting an exception in your function f() because it is being called with an undefined argument, and you can't figure out where this call is coming from. To help you in debugging this problem, you might alter f() so that it begines like this:**

```Javascript

	function f(o) { //Temporary line for debugging purpose
		if(o === undefined) 
			debugger;//The rest of the function goes here
		
	}
```
**Once 'debugger' is triggered, a web browser tends to open developer's tool like Firebug for Firefox and Developer's console for Chrome.**

## Use Strict

**'use strict' is generally used to provide stronger error checking and increase security.**
**Here is the few differences between 'non-strict' vs. 'strict':**

	- The 'with' statement is not allowed in stric mode
	
	- In strict mode, all variables must be declared: a ReferenceError is thrown if you assign a value to an identifier that is not a declared variable,function, function parameter, 'catch' clause parameter, or property of the global object.
	
	- In strict mode, functions invoked as functions (rather than as methods) have a 'this' value of undefined. (In non-strict mode, functions invoked as functions are always passed the global object as their 'this' value). 

**Try this**

```Javascript

	var hasStrictMode = function(){
		"use strict";
		return this===undefines
	}();

```
## Summary of JavaScript Statements

	Statement	Syntax		Purpose
	---------------------------------------
	break		break [label];		"Exit from the innermost loop or 'swith' or from named enclosing statement"

	case		case expressions:	"Label a statement within a 'switch'"

	continue	continue [label];	"Begin next iteration of the innermost loop or the named loop"

	debugger	debugger;		"Debugger breakpoint"

	default		default:		"Label the default statement within a 'switch'"

	do/while	do statement 		"An alternative to the 'while' loop"
			while (expression)	

	empty		;			"Do nothing"

	for		for(init;test;incr)	"An easy-to-use loop"
			statement

	for/in		for (var in object)	"Enumerate the properties of object"
			statement
			
	function	function name ([param[,..]])	"Declare a function named name"
			{body}

	if/else		if (expr) statement1	"Execute statement1 or statement2"
			else statement2

	label		label: statement;	"Give statement the name label"

	return		return [expression];	"Return a value from a function"

	switch		switch (expression)	"Multiway branch to case or default: labels"
			{statements}

	throw		try { statements}	"Handle exceptions"
			[catch { handler statement}]
			[finally {cleanup statements}]
			
	use strict	"use strict";		"Apply strict mode restrictions to script function"

	var		var name [ = expr] [,...];	"Decalre and initialize one or more variables"

	while		while (expression)	"A basic loop construct"
			statement
			
	with		with (object) statement		"Extend the scope chain(forbidden in strict mode)"



			

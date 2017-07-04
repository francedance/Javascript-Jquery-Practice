/*Topics here are discussed in "Javascript The Definitive Guid" by David Flanagan
Warning: Do not run this javascript file directly since these are just examples, it is not completely functioning program! 
Organized by Jae Hyuk Oh

Covers Core Javascript :
	+Jumps (labeled statements, break, continue,  return, throw, try/catch/finally(
	+Miscellaneous Statements (with, debugger, 'use strict')
	+Summary of JavaScript Statements

*/

	/* 
	Jumps in javascript causes the javascript interpreter to jump to a new location in the source code. I believe that using Jumps in a software development 
	is important to debug and track flows.

	ideas:
	'break' statement =  makes the interpreter jump to the end of a loop or other statement.
	'continue' statement = makes the interpreter skip the rest of the body of a loop and jump back to the top of a loop to begin a new iteration.

	Javascript allows statements to be 'named', or 'labeled', and the 'break' and 'continue' can identify the target loop or other statement label. 

	'return' statement = makes the interpreter jump from a function invocation back to the code that invoked it and also supplies the value for the invocation.

	'throw' statement = raises, or "throws", an exception and is designed to work with the 'try'/'catch'/'finally' statement, which establishes a block of exception
						handling code.
	*/


	/*Any statement may be 'labeled' by preceding it with an identifier and a colon:
	for examples */

		identifier: statement //general rule of labeling 
		
	/*By labeling a statement, you give it a name that you can use to refer to it elsewhere in your program (somehow like a function name).
	Example of labeled statement with 'continue' */
	
	mainloop: while(token != null) { // 'mainloop' is the identifier in this case. As long the word isn't reserved by javascript, it's fine. 
		// Code omitted...
		continue mainloop; // Jump to the next iteration of the named loop
		// More code omitted...
	}
	
	//'break' statement
	break; //use this inside a loop to jump! 
	
	//also break can be used with label!
	
	break mainloop;
	
	//example of 'break' statement in use
	
	for(var i = 0 ; i < a.length; i++) {
		if( a[i] == target) break;
	}
	
	//example of 'break' + identifier statement in use
	
	mainloop: while(token != null) { // 'mainloop' is the identifier in this case. As long the word isn't reserved by javascript, it's fine. 
		
		if(token == target) 
			break mainloop; //this will exit the loop
		
	}
	
	
	/*'Continue' statement is similar to the break statement. Instead of exiting a loop, however, continue restarts a loop at the next iteration.
	'continue' statement */
	
	continue;
	
	//Just like 'break', you can also use 'continue' with label, for example
	continue mainloop; //mainloop is the label from the above 
	
	//'continue' statement in use
	for(i = 0 ; i < data.length; i++){
			if (!data[i]) continue; // Can't proceed with undefined data
			total += data[i];
		
	}
	
	/*Recall that function invocations are expressions and that all expressions have values.
	'return' statement within a function specifies the value of invocations of that functions.*/
	
	return expression; //General rule of 'return' statement
	
	
	/*If 'return' statement appear anywhere else but withing the body of a function, it is a syntax error!! 
	example of 'return' statement in use*/
	
	function square(x) { 
	/*It is a function who's name is square. 
	It takes in a value 'x' from a caller and simply returns the square value of 'x' back to its caller!
					*/
		return x*x;
	}
	
	square(2); //square(2) => is same as 4. 
	
	/*If for example, you do not include 'return' within a body of a function, then the value of caller is simply undefined. It's up to your choice to use 
	'return' statement. Usually, I will use 'return' when I need a to pass a value to a function for computation purposes or want to continuously use a value 
	after function through out a program. Let's say, if a return value in a function is important to proceed a next function, I will store the return value 
	like var x = square(x) , and use 'x' in future programming */

	//Here's anothe example of 'return' in use
	
	function display_object(o) {
		// Return immediately if the argument is null or undefined
		if (!o) return;
		// Rest of function goes here...
	}
	
	/*An exception is a signal that indicates that some sort of exceptional condition or error has occured. To 'throw' an exception is to signal such an 
	error or exceptional condition. To 'catch' an exception is to handle it to take whatever actions are necessary or appropriate to recover from the exception.
	In javascript, exceptions are thrown whenever a runtime error occurs and whenever the program explicitly throws one using the 'throw' statment. 
	Exceptions are caught with the 'try'/'catch'/'finally' statements */
	
	throw expressions; //General rule of 'throw' statement;
	
	//'throw' statement in use
	function factorial(x) {
		// If the input argument is invalid, throw an exception!
		if (x < 0) 
			throw new Error("x must not be negative");
		//Otherwise, compute a value and return normally
		for(var f = 1; x > 1 ; f *= x, x--) /* empty */;
		return f;
		
	}
	
	//Error object has a 'name' property that specifies the type of error and a 'message' property that holds the string passed to the constructor function.
	
	/*'try'/'catch'/'finally' are javascript's exception handling mechanism.
	
	'try' : definies the block of code whose exceptions are to be handled
	'catch' : which is a block of statements that are invoked when an exception occurs anywhere within the 'try' block
	'finally' : contains cleanup code that is guaranteed to be executed, regardless of what happens in the 'try' block

	*/
	
	//The following code illustrates the syntax and purpose of the try/catch/finally statement:
	
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
		
		//An example of try/catch/finally in use
		
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
		
	//Miscellaneous Statements ('with', 'debugger', and 'use strict')
	
		//'with' statement is used to temporarily extend the scope chain.
	
		with (object) //General rule of 'with' statement
			statement
			
		/* 'with' statement is forbidden under 'strict mode' and should be deprecated in non-strict mode: avoid using it whenever possible.
		Javascript code that uses 'with' is difficult to optimize and is likely to run more slowly than the equivalent code written without the 'with' statement */
		
		//'with' statement in use
			
			with(document.forms[0]) {
				//Access form elements directly here. For example:
				name.value = "";
				address.value = "";
				email.value = "";
			}
		
		/* above codes basically give you a shortcut of writing: 
		
			document.forms[0].address.value = "" ;
			document.forms[0].name.value = "" ;

			multiple times. */
			
		//Of course, you can still do shortcuts without using 'with' statement, do this instead:
		
			var f = document.forms[0];
			f.name.value = "";
			f.address.value = "";
			f.email.value = "";
			
		/* 'debugger' statement normally does nothing. In practice, this statement acts like a breakpoint: execution of javascript code stops and you can use
		the 'debugger' to print variables' values, examine the call stack, and so on. Suppose, for example, that you are getting an exception in your 
		function f() because it is being called with an undefined argument, and you can't figure out where this call is coming from. To help you in 
		debugging this problem, you might alter f() so that it begines like this: */
		
			function f(o) { //Temporary line for debugging purpose
				if ( o === undefined) debugger; //The rest of the function goes here
				...
			}
		
		/* 'use strict' is generally used to provide stronger error checking and increase security. 
		
		Here is the few differences between 'non-strict' vs. 'stric' :
		
			- The 'with' statement is not allowed in stric mode
			- In strict mode, all variables must be declared: a ReferenceError is thrown if you assign a value to an identifier that is not a declared variable,
			  function, function parameter, 'catch' clause parameter, or property of the global object.
			- In strict mode, functions invoked as functions (rather than as methods) have a 'this' value of undefined. (In non-strict mode, functions invoked
			  as functions are always passed the global object as their 'this' value). 
		*/
		
		//try this
		var hasStrictMode = function() {
							"use strict";
							return this===undefined
		}();
			
		
/* Here is the summary of javascript statements!

statement	syntax					purpose
------------------------------------------------
break		break [label];					Exit from the innermost loop or 'swith' or from named enclosing statement

case		case expressions:				Label a statement within a 'switch' 

continue	continue [label];				Begin next iteration of the innermost loop or the named loop

debugger	debugger;						Debugger breakpoint

default		default:						Label the default statement within a 'switch'

do/while	do statement 					An alternative to the 'while' loop
			while (expression)	

empty		;								Do nothing

for			for(init;test;incr)				An easy-to-use loop
			statement

for/in		for (var in object)				Enumerate the properties of object
			statement
			
function	function name ([param[,..]])	Declare a function named name
			{body}

if/else		if (expr) statement1			Execute statement1 or statement2
			else statement2

label		label: statement;				Give statement the name label

return		return [expression];			Return a value from a function

switch		switch (expression)				Multiway branch to case or default: labels
			{statements}

throw		try { statements}				Handle exceptions
			[catch { handler statement}]
			[finally {cleanup statements}]
			
use strict	"use strict";					Apply strict mode restrictions to script function

var			var name [ = expr] [,...];		Decalre and initialize one or more variables

while		while (expression)				A basic loop construct
			statement
			
with		with (object) statement			Extend the scope chain(forbidden in strict mode)

 */

	

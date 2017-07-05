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
	
- [Jumps (labeled statements, break, continue,  return, throw, try/catch/finally](#jumps)
- [Miscellaneous Statements (with, debugger, 'use strict')](#miscellaneous-statements)
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

 **General rule of simple if condition followed by statement.**

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

 **General rule of simple if..else.. condition** 
 
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

 **General rule of simple if..else if.. condition**
	
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

 **General rule of simple switch statement**
	
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

**General rule of while loop**

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

**General rule of do..while loop.**

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

**General rule of for loop**

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

	>i = 0 ; j = 10 
	
**therefore**

	> sum - sum + (0 * 10)
	
**which is 0, then i becomes 1 and j becomes 9 for next round.
	
**Second round of loop**

	>i = 1; j = 9
	
**therefore**

	> sum = sum (currently the value if 0 from the first round) + (1*9)
	
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
**General rule of For In loop**

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

	>coffee: Espresso, Americano, Latte
	alcohol: vodka, whiskey, rum, wine
	juice: orange, peach, strawberry






			 
		

			

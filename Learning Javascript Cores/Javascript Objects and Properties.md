## Just some gibberish on Javascript objects and properties 
**Based on Ecmascript 5 so might not work on newest version**

### Creating Objects (different ways) 

**Object Literals methods**

```Javascript 
 var empty = {}; // an object with no properties !!
 var point = { x:0 , y:0 } // two properties !!
 var point2 = { x: point.x , y: point.y+1 }; // complex values but still works!!
 var book = {
        "main title": "Javascript",
        "sub-title": "Objects and Properties",
        "for": "Anyone who wants to learn Javascript",
        author: {
                  firstname: "Jae",
                  lastname: "Oh"
                  }
           }; //You can define your own properties and customize your objects.


```
**Using 'new' to create objects**

```Javascript 

  var o = new Object(); // same as var o = {}; 
  var o = new Array(); // same as var 0 = [];
  var d = new Date(); // create a date object that you can access
  
  //example of accessing properties of newly date objects
  console.log(d.getDate()) // will return 21 if today's date is 9/21/2017

```
**Using 'Object.create()'**

```Javascript 
  var o1 = Object.create({x:1 , y:2}) // o1 inherits properties x and y.
  var o2 = Object.create(null); // o2 inherits no properties or methods.
  
  //If you want the result of var o = {} or var o = new Object() using Object.create() method: 
  var o = Object.create(Object.prototype); 



```

**Safe? practice of utilizing objects with 'inherit'**

**Sometime when you're coding or programming a project, you'll accidentally or non-intentionally alternate a value of something.**
**Imagine you accidentally change a value of some properties of an object..**
**Let's say you have a function change()**

```Javascript 
//a function that changes object.x properties to 3.
  function change(o){
        o.x = 3;
  }
  
  var x = {x: 1}; //here I have declared object and key = 'x' with value = '1'
 var x_inherited = new Object(); //just an empty object
 x_inherited.prototype = x; //inheriting x's properties to x_inherited
 
  //here's the differences between passing inherited object vs. object
  
  change(x_inherited) ;
  console.log(x.x); //prints 1
  console.log(x_inherited.x); //prints  3
  
  //use this when you have a function that requires reading a value of Object much safer I say.
  


```
**Customize and Configure your own object properties**

```Javascript

  var p = Object.defineProperties({}, {
    x: { value: 1, writable: true, enumerable: true, configurable: true},
    y: { value: 1, writiable: true, enumerable: true, configurable: true},
    r: {
         get: function() { return Math.sqrt(this.x * this.x + this.y * this.y) },
         emumerable: true,
         configurable: true
        }
     });



```

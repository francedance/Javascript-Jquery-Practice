# Using a Jquery, you can easily conduct DOM traversing through your HTML! 
## I am going to show you few examples of DOM traversing techniques with Jquery here.

**Before anything, here's a outline of your HTML structure**

```Html

  <div id="gallery">
  
    <a id="1">
      <img src="url1">
    </a>
    
    <a id="2">
      <img src="url2">
    </a>
    
    <a id="3">
      <img src="url3">
    </a>
    
   </div>
```

### .find() 

**Find particular elements inside the current selection.**

**Let's say, you want to select all ('img') tags inside '#gallery', you would do this:**

```Javascript

  $('#gallery img')

```
**This works but there's even a better method which is a lot faster when you have a lot of contents in your page**

```Javascript
  $('#gallery').find('img')

```

### .children()

**Similar to .find() but it limits its selection to immediate children of the current selection**

**Here's another example of your HTML**

```Html
  
  <div id=collection_of_somethings>
  
    <div id="something1">
      <div id="1">
        <p>Inside something1</p>
       </div>
    </div>
    
     <div id="something2">
      <div id="2">
        <p>Inside something2</p>
       </div>
    </div>
    
     <div id="something3">
      <div id="3">
        <p>Inside something3</p>
       </div>
    </div>
  
  </div>

```
**Here's the differences between .find() and .children():**

**Using the above examples, let's say you do:**

```Javascript

 $('#collection_of_somethings').find('div')

```

**The result of above code will be all 'div' tags within id="collection_of_somethings".**

**This will include 'div' tags inside 'id="something1"' , 'id="something2"', 'id="something3"'**

**But you don't want to include those 'div' tags within id="something1".."something2".."something3" but only the 'div' tags that are children of id="collection_of_somethings"**

```Javascript

$('#collection_of_somethings').children('div') 

```
**will return just children 'div' tags of id="#collection_of_something" , NOT including 'div' tags inside!**

### .parent()

**Both .find() and .children() methods are examples of descendant selection (a tag inside another tag).**
**You're not only limited to those which means you can traverse to parent tags!**

**Here's another HTML example:**

```Html

<div id="parent">

<button id="color_changer">Click Me</button>

</div>

```
**Let's say you want to change the color of id="parent" when the button id="color_changer" is clicked.**

```Javascript

$('#color_changer').click(function(){
 var $this = $(this); //$(this) refers to an HTML element that .click() is applied ,which is the button itself with id="color_changer"
 
 $this.parent().css('backgroundColor' ,'red'); //this code changes the backgroundcolor of div with id="parent" to red

});

```
**It should makes sense because button with id="color_changer" is a child of div with id="parent". So when:**

```Javascript

$this.parent().css('backgroundColor' ,'red');

```
**is executed, it basically means, go and change the background color of div because it's the parent of button!**

### .closest() 

**It finds the nearest ancestor that matches a particular selector. Unlike .parent(), .clsoest() can accept a selector as an argument and finds the nearest ancestor that matches**

**Example:**

```Javascript

<div id="Cretaceous"
    <a href="">I am Cretaceous</a>
    
    <div id="Jurassic">
        <p>I am Jurassic</p>
        
          <div id="Triassic">
            <p>I am Triassic</p>
          </div>

     <div>
  
</div>

```
**Let's say you're currently at id="Triassic" but wants to do something to link inside id="Cretaceous""**

```Javascript

  $('#Triassic').closest('a')

```
**This code will give you a result you want!. If you've used .parent(), then it's not going to do any but just selecting 'div' with id="Jurassic"**

### .siblings()

**This is useful when you want to select an element that's at its same level**
**Example:**

```Html

<div id="daddy_and_mommy">

 <div id="children">
 
    <p id="mikey"></p>
    <p id="sonny"></p>
    <p id="franky">I have a cold</p>

  </div>
  
</div>

```
**You should get a general idea here right away!**
**Let's say "Franky" caught a cold, because "Mikey" , "Sonny" and "Franky" all share a room, "Mikey" and "Sonny" gets a cold too!**

```Javascript

 $('#franky').siblings().text('Franky, you got me a cold!!!');

```
### .next() 

**finds the next sibling of the current selection. With above example:**

```Javascript

$('#mikey').next().text('I am Sonny');

```
**Simply changes the text of id="sonny" because we started from id="#mikey".** 

### .prev()

**finds the previous sibling of the current selection. With above example:**

```Javascript
  
  $('#franky').prev().text('I am Sonny');

```
**This has same effect as**

```Javascript

$('#mikey').next().text('I am Sonny');

```
**Only difference is the starting point, .next() started at "Mikey" and .prev() started at "Franky".**

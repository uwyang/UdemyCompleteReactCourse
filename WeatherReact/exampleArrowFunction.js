var names = ['Andrew', 'Julie', 'Jen'];
/*
//without arrow functions.
names.forEach(function(name){
  console.log("foreach: ", name);
} );

names.forEach((name) => {
    console.log("=> ", name);
  }
);

names.forEach((name)=> console.log("short ", name));

var returnName = (name) => name + "!";

console.log(returnName("PenPen"));
// doesn't map.
console.log(returnName(["PenPen", "pewpew", "blahblah"]));

*/

/*
var person = {
  name: 'PenPen',
  greet: function(){
    names.forEach(function(name){
      console.log(this.name + ", say hi to " + name);
    }.bind(this))
  }
}

var person2 = {
  name: 'PenPen',
  greet: function(){
    names.forEach((name)=>console.log(this.name + ", say hi to " + name));
  }
}

person.greet();
person2.greet();
*/
function add(a, b){
  return a+b;
}
console.log(add(2, 4));

var addStatement = (a, b)=> a+b;
console.log(addStatement(4, 5)); 

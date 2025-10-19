let obj = {
name: "sanjit", age:20,
details: {
pin: 82
},
greet: function () {
return "main obj"
}
}
let shallow = {...obj};
let deep = JSON.parse (JSON.stringify(obj));

shallow.name = "mike"; 
shallow.details.pin = 50;

deep.name = "john";
deep.details.pin = 95;

//for obj it will affect in nested obj in shallow copy 
console.log(shallow.name, shallow.details.pin) // mike 50 console.log(obj.name, obj.details.pin) // sanjit 50
//not afftect in deep
console.log (deep. name, deep.details.pin) // john 95 console.log (obj.name, obj.details.pin) // sanjit 50
// For nested function
=
shallow.greet function () { return "shallomethod"
}
console.log(shallow.greet ()); console.log(obj.greet ());
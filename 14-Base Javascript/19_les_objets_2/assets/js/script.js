// Les objets javascript

//var cart = new Object()

/*var cart = {
    _id: 525544,
    name: "Zathatha",
    year: 2020
}
cart.model = "E25"

var cart2 = {...cart, _id: 552555, model: "T45"}*/

var person = {
    firstname : "Tita",
    lastname : "Line",
    username : "Popo",
    email: "popo@popo.popo",
    phone: "5528664",
    address: {
        street: "25 Rue des développeurs",
        code: 89000,
        country: "Canada"
    },
    fullname: function (){
        return this.firstname+" "+this.lastname
    },
    hello: function(){
        return "Hello, Welcome "+this.fullname()
    }
}

var person2 ={
    ...person,
    lastname: "Julie",
    firstname: "Dubois"
}

var saw_hello = ({firstname}) =>{
    console.log(`Hello ${firstname}`);
}

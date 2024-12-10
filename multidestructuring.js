let arr=[1,2,3,4,5,6,7,8];
let [a,b, , ,...rest]=arr;//isme 1,2 ko count kiya baaki 3,4 ko left and baaki array form me print
console.log(a,rest);
let [c, , d,...fest]=arr;//isme 2 ko left
console.log(c, d,fest);
/////************QUESTION 13**************//////
const people = [ 
    { 
        name: "Alice", 
        address: {
              city: "New York",
              street: { name: "Broadway", number: 123 } 
            } 
        }, 
        { name: "Bob", 
          address: { 
            city: "Los Angeles", 
            street: { name: "Sunset Boulevard", number: 456 } 
          } 
        } 
    ];

const [{name:firstname,address:{city:city1,street:{name:firststreet}}},{name:secondname,address:{city:city2,street:{name:secondstreet}}}]= people;
//const [{street1:{name3,number1},{street2:{name4,number2}}}] = people.address;
//console.log(name1,street1);
console.log([`${firstname} lives in ${city1} on ${firststreet}`,`${secondname} lives in ${city2} on ${secondstreet}`])
//or I can put MAP loop here
//const together=people.map(({name,address:{city,street:{number}}})=>`${name} lives in ${city} on ${street}`);
//console.log(together)

/////////////////QUESTION 14/////////////////////
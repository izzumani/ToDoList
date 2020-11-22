export default function (){
//     const personInfo = {
//         firstName: 'Isaac',
//         lastName: 'Njiru'
//     }
//  class Person {
//      firstName =""
//      lastName=""
//      age= 0

//     //  constructor(firstName,lastName,age = 0){
//     //      this.firstName = firstName;
//     //      this.lastName = lastName;
//     //      this.age = age;
//     //  }

//      constructor(personData){
//          const {firstName,lastName,age = 0} =personData;
//         this.firstName = firstName;
//         this.lastName =lastName;
//         this.age = age;
//     }
//      printUserInfo(){
//          console.log(`Hello ${this.firstName} ${this.lastName} of age: ${this.age}`);
//      }

//      persist(database){
//         //  debugger
//         console.log("Persist database")
//          database.save(function(){
//              return {
//                  userName:`${this.firstName} ${this.lastName}`,
//                  age: this.age
//              }
//          });
//      }


//  }

//  class Database {
//       items = []

//       save(getDataCallBack){
//           const data = getDataCallBack();
//           this.items.push(data);
//       }
//  }

// //  debugger
// //  const person1 = new Person("Isaac","Njiru",39);
// //  person1.printUserInfo();

// //  const person2 = new Person("Rosalind","Njoki",35);
// //  person2.printUserInfo();

// const db = new Database();
// const person1 = new Person({firstName:'Isaac',lastName:'Njiru',age:39});
//  person1.printUserInfo();

//  const person2 = new Person({firstName:'Rosalind',lastName:'Mwangi'});
//  person2.printUserInfo();

//  person1.persist(db);
//  person2.persist(db);

const personList =[
    {firstName:"Isaac", lastName:"Njiru"},
    {firstName:"Rosalind", lastName:"MWangi"},
    {firstName:"Chloe", lastName:"Mwirigi"},
    {firstName:"Rachelle", lastName:"Mwirigi"},
    {firstName:"Aryanna", lastName:"Mwirigi"}
]
Array.prototype.forEach2=function(callback){
    for (let i = 0; i < this.length; i++) {
            callback(this[i],i);
        
    }
}

Array.prototype.map2=function(callback){
    let newArray = new Array();
    
    for (let i = 0; i < this.length; i++) {
            let transformedValue = callback(this[i],i);
            newArray.push(transformedValue);
        
    }
    return newArray;
}


Array.prototype.filter2=function(callback){
    let newArray = new Array();
    
    for (let i = 0; i < this.length; i++) {
            let transformedValue = callback(this[i],i);
            if (transformedValue)
                newArray.push(this[i]);
        
    }
    return newArray;
}


let firstNameList = personList.filter2(function(person,index){
    console.log(index);
    console.log(person.firstName);
    return person.lastName==="Mwirigi";
})

console.log(firstNameList);
}
// Object using Function constructor
function Boy (born,place,year){
    this.born =born;
    this.place=place;
    this.year=year;
}
const newBoy = new Boy ('setp','bahuara','2003');

console.log(newBoy)

// Object using Class constructor

class Car {
    constructor(color,model){
        this.color = color;
        this.model=model;
    }
}

const newCar = new Car('red','2020')

console.log(newCar);

// Key and Value acess

const user ={
    a: 'student',
    b:42

}
console.log(Object.values(user));
console.log(user.b);

// Question : Create a object using function and class constructor both and give two property to it name and age ;

function Ravi (age,name){
    this.age=age;
    this.name=name;
} 

const newRavi = new Ravi ('22','Ravi');
console.log(newRavi);

class Boy {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

const addBoy = new Boy ('30','Chitranjan')

console.log(addBoy);




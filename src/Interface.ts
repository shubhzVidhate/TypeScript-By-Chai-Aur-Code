interface Chai{
    flavor:string,
    price:number,
    milk?:boolean
}

const masala:Chai = {
    flavor : "masala",
    price:30,
    milk:true 
}

interface shop{
    readonly id: number,
    name: string
}

const s: shop = {
    id:1, 
    name:"Chai Code Coffe"
}

// s.id = 2; 


interface discountcalculator{
    (price:number):number
}

const apply50:discountcalculator = (p) => p * 0.5;


interface Teamachine{
    start():void,
    stop():void
}

const machine: Teamachine = {
    start(){
        console.log("Start.!!");
    },
    stop(){
        console.log("Stop.!!");
    }
}

// *********************************Index Signature interface*******************

interface ChaiRatings{
    [flavor:string]:number
}

const ratings:ChaiRatings = {
    masala : 4.5,
    ginger: 4.8
}

// **************************************************

// suppose this is buit in library
interface User{
    name:string
}

// and this is my custom interface 
interface User{
    age:number
}


// both can merge in code automatacally if you dont add them after creating then object is not satifying.
const u:User = {
    name:"Shubham",
    age:23
}

// ****************************Extend interface***********************
//  it is similar to  upper method

interface A{
    a:string
}

interface B{
    b: string
}

interface C extends A, B{}


// ********************************GENERICS******************


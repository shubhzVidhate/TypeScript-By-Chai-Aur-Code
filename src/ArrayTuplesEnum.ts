// ARRAY

// syntax 

const chaiFlavor: string[] = ["masala Chai","Adrak Chai"];

const chaiPrice: number[] = [25,43,23];

//*****************anather syntax******************
const rating : Array<number> = [1,2,3,4,5];


// *****************Array of Object******************
type Chai = {
    type: string;
    price: number;
}

const menu: Chai[] = [
    { type:"Masala Chai",price:20 },
    { type:"Adrak Chai",price:35 },
];

// ************************ReadOnly Array***************

const cities: readonly string[] = ["Pune","Delhi"];

// cities.push("jaypur");     // this show error because of readOnly 


// *********************Multidimentional Array*****************

// two dimentional
const table : number[][] = [
    [1,2,3,4],
    [5,6,7,8],
]

// ****************************TUPLES***************************

// syntax

let ChaiTuples: [string, number];
ChaiTuples = ["masala Chai",23];
// ChaiTuples = [23,"Masala Chai"];    // it will show error because of order dependency

// Optional type in tuples
let userInfo :[string,number,boolean?];
userInfo = ["Shubham",200];
userInfo = ["Shubham",200,true];


// ReadOnly Tuples
let ChaiType : readonly [string,number] = ["Masala Chai",25];

// *********NAMED TUPLES ********

let ChaiItems : [name:string,price:number];
ChaiItems = ["Masala Chai",35];
ChaiItems = ["Adrak Chai",55];


// ***********************************ENUM****************************

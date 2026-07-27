const chai = {
    name :"masala Chai",
    price:20,
    isHot:true
}


// {
//     name : string;
//     price: number;
//     isHot: boolean;
// }

let tea : {
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Masala Chai",
    price: 25,
    isHot: true
}

type Tea = {
    name: string;
    price : number;
    ingredients: string[];
}

const adrakChai:Tea = {
    name:"Adrak Chai",
    price:25,
    ingredients:["Masala","Adrak","Water"],
} 


// DUCK TYPEING 

type cup = { size:string};
let smallCup:cup ={size:"200ml"};

let bigCup = {size:"200ml",material:"steel"};

smallCup = bigCup;


type Brew = { brewTime: number };
const coffee = {brewTime:3,beans:"Africa"}

const chaiBrew:Brew = coffee;


// 

type Item = {name:string; quantity:number }
type Address = {street:string; pin:number }

type Order = {
    id:string;
    item:Item[];
    address: Address;
}



//  UTILITY TYPES

// Partial<T>

type Chai = {
    name: string;
    price: number;
    isHot:boolean 
}

const updateChai = (updates :Partial<Chai>) => {
    console.log("updating Chai WIth",updates);
}

updateChai({price:30});
updateChai({isHot:false});




// Required<T>

type chaiOrder = {
    name?:string;
    quantity?:number;
}

const PlaceOrder = (order : Required<chaiOrder>){
    console.log(order);
}

PlaceOrder({
    name:"Ginger Tea",
    quantity:2
});


// Pick<T,k>


type chai = {
    name: string;
    price:number;
    isHot:boolean;
    ingredeants:string[];
}

type basicChaiInfo = Pick<chai, "name" | "price">;

const ChaiInfo : basicChaiInfo = {
    name:"Lemon Tea",
    price:25
}

// Omit<T,k>

type NewChai = {
    name: string;
    price:number;
    isHot:boolean;
    ingredeants:string[];
}


type publicChai = Omit<NewChai,"ingredeants">;


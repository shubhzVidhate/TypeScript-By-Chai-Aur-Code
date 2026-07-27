type ChaiOrder = {
    type:string;
    sugar:number;
    strong:boolean;
}
 
function makChai(chai: ChaiOrder){
    console.log(chai)
}

function serving(serve: ChaiOrder){
    console.log(serve)
}




type TeaRecipe = {
    water : number;
    milk: number;
}

class MasalaChai implements TeaRecipe{
    water = 100;
    milk = 50;
}




interface CupSize {
    size : "small" | "large"
}

class Chai implements CupSize{
    size: "small" | "large" ="large";
}




type BaseChai = { teaLeaves:number };
type Extra = { masala:number };

type MasalaChaii = BaseChai & Extra;

const Cup: MasalaChaii = {
    teaLeaves : 2,
    masala : 3,
}


// add option value

type User = {
    username : string;
    Bio?: string; 
}

const u1: User = { username:"Shubham" };
const u2: User = { username:"Shubham", Bio:"FUll Stack Developer" };

// add read only value

type Config = {
    readonly appName : string;
    version: number;
}

const cfg:Config = {
    appName:"Shubham",
    version:1
}

cfg.version = 2; // this is allowed 
// cfg.appName = "Shubh"   // this is not allowed becouse of readOnly. but asign once.!
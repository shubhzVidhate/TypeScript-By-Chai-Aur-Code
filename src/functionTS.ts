function makeChai(type:string,  cups:number){
    console.log(`Making ${cups} cup of ${type}`)
}

makeChai("Masala Chai",2);


function getPrice():number{
    return 35;
}

function makeOrder(order: string){
    if(!order) return null;
    return order;
}




// It is show error because of return type is string and if order is not geting then you return null
// this functionn only retirn string

// function makeOrder(order: string): string{
//     if(!order) return null;                        
//     return order;
// }                                            



// LOGGER FUNCTIONS
//  if you do not want return anything then use void 
// void means return nothing

function LogChai():void{
    console.log("Chai is Ready.!!");
}

// OPTIONAL & DEFAULT PARAMETER
// this parameter write at the end of parameter in the function signiture

// optional
function orderChai(type?:string){
    
}

// default
function ChaiOrder( type : string = "masala"){

}


function createChai(order: {
    type:string;
    sugar:number;
    size: "small" | "large";
}):number {
    return 12;
}


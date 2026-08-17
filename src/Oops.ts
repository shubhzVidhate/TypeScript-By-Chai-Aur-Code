// class Chai{
//     flavour:string;
//     price:number

    // constructor(flavour:string,price:number){
    //     this.flavour = flavour;
    //     this.price = price;
    // }

//       constructor(flavour:string){
//         this.flavour = flavour;
//         console.log(this);
//     }
// }

// const masalaChai = new Chai();
// masalaChai.flavour = "masala Chai";
// masalaChai.price = 25;

// const masalaChai = new Chai("Ginger Tea",20);

// const masalaChai = new Chai("Ginger Tea");




// *************************************ACCESS MODIFIERS*********************************

// PUBLIC - it is available in any where. 
// PRIVATE - it is only available in same class i you want the that variable then you can create method in same class access there that  private variable and then can  thos method in anywhere if you want.   
//           - if you dont wnat to write private keyword then use # insted of private keyword.
//             - you can use _before variable name it is good practice recomended ex :-  private _name:string = "Shubham"; 
// Protected - it is same like Private  but it is available in thete extended class



class Chai{
    public flavor: string = "Masala Chai";

    private secretIngredients:string = "Cardamom";
    
    revel(){
        return this.secretIngredients  //ok
    }
}

const c = new Chai();

c.flavor;               // flavor available every where because of public access modifier
c.revel();              // secretIngredients available in revel not directly because of private this is not available outside class.



class Shop{
    protected ShopName = "Chai Corner";  

    // protected access modifier available in same class and there extendes class only
}

class Branch extends Shop{
    getName(){
        return this.ShopName;
    }
}

const SH = new Branch();
SH.getName();

class walet{
    #balance = 100;         // it will work  because in typecript everything is javascript.

    getBalance(){
        return this.#balance;
    }
}

new walet().getBalance();  

// **********************readOnlyProperty************************

class Cup{
    readonly capacity:number = 200;

    constructor(capcity:number){
        this.capacity  = capcity;
    }
}

// ****************GETTER AND SETTER****************8

class ModernChai{
    private _sugar = 2;

    get sugar(){
        return this._sugar;
    }

    set sugar(value:number){
        if(value > 5) throw new Error("Too Sweet");
        this._sugar = value;
    }
}

const modernChai = new ModernChai();
modernChai.sugar = 3;

// ***************************************STATIC MEMBERS********************

class EkChai{
    static shopName = "ChaiCode Caffe";
    constructor(public flavor:string){}; 
}

console.log(EkChai.shopName);


// static member directly access from class name not an object name.


//**********************ABSTRACT CLASS**************************** */


abstract class drink{
    abstract make():void;
}

class myChai extends drink{
    make() {
        console.log("Brewing Chai.!!");
    }
}


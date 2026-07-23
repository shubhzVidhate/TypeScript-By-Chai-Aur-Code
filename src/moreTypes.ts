let Response : any = "42";

let numeriLength : number = (Response as string);

type Book{
    name: string;
}

let bookString = "{'name':'who moved my cheese'}";
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

let inputElement = document.getElementById("username") as HTMLInputElement;


let value: any;

value = "Chai";
value = [1,2,3,4];
value = {1:1,2:2,3:3,4:4};
value = 12;
value = 12.4;


value.toUpperCase();  // it will work right  now but show error in browser



let newValue: unknown;

newValue = "Chai";
newValue = [1,2,3,4];
newValue = {1:1,2:2,3:3,4:4};
newValue = 12;
newValue = 12.4;


// newValue.toUpperCase();  // it will show error because of unknown type

if( typeof newValue === "string" ){
    newValue.toUpperCase()
}


//   NEVER

type Role = "admin" | "user";

function redirectBasedOnRole( role: Role ): void{
    if(role === "admin"){
        console.log("Redirect to Admin Dashboard.!!");
        return;
    }
    if(role === "user"){
        console.log("Redirect to User Dashboard.!!");
        return;
    }
    role; /// is shows role never if you add anathor one role then his show that role otherwise this show role never.
}


//  this is infinite loop

function neverReturn():never{
    while(true){}
}



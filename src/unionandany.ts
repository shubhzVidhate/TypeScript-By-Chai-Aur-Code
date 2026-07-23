let subs: number | string = "Shubham" // 12;

let apiRequestStatus : 'pending' | 'success' | 'error'  = "pending";

let airLineSeat : "aisle" | "window" | "middle" = "aisle";

airLineSeat = "middle";

let orders = ["12", "20", "28", "42"];

let currentorder: string | undefined;

for (let order of orders) {
    if(order === "28"){
        currentorder = order;
        break;
    }
}
 
console.log(currentorder);
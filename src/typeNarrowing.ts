function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} Chai...`;
  }
  return `Chai Order: ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg} Chai`;
  }

  return `Serving Masala Chai.!!`;
}

class KulladChai {
  serve() {
    return ` Serve Kullad Chai `;
  }
}

class Cutting {
  serve() {
    return ` Serve Cutting Chai.`;
  }
}

function Serving(chai: KulladChai | Cutting) {
  if (chai instanceof KulladChai) {
    return chai.serve();
  }
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}


function ServeOrder(item: ChaiOrder | string ){
    if(isChaiOrder(item)){
        return `Serving ${item.type} Chai With ${item.sugar} Sugar`;
    }
    return `Serving Custom Chai : ${item}`;
}


type  MasalaChai = { type:"masala"; spicelevel:number };
type  GingerChai = { type:"ginger"; amount:number };
type  ElaichiChai = { type:"elaichi"; amora:number };


type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai( order : Chai ){
    switch(order.type){
        case "masala":
            return `Masala Chai`;
            break;
        case "ginger":
            return `Ginger Chai`;
            break;
        case "elaichi":
            return `Elaichi Chai`;
            break;
    }
}

function brew (order : MasalaChai | GingerChai){
    if("spicelevel" in order){
        // 
    }
}


// function isStringArray( arr : unknown ):arr is string[]{
    
// }
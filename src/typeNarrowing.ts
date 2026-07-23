function getChai( kind : string | number){
    if(typeof kind === "string"){
        return `Making ${kind} Chai...`;
    }
    return `Chai Order: ${kind}`;
}

function serveChai(msg?:string){
    if(msg){
        return `Serving ${msg} Chai`;
    }

    return `Serving Masala Chai.!!`;
}

function wrapINArray<T>(item:T): T[]{
    return [item];
}

wrapINArray("Shubham");
wrapINArray(200);
wrapINArray({Flavor:"Masala"});

function pair<A, B>(a:A,b:B): [A, B]{
    return [a, b];
}


pair("masala","test")
pair("masala",20)
pair("masala",{flavor:"Ginger"});


// *****************************************Generics interface**********************

interface Box<T>{
    content:T
}

const numberBox:Box<number> = { content:10 };
const numBox:Box<string> = { content:"10" };

// *******************Real world example************************
interface ApiPromise<T>{
    status:number,
    data:T
}

const res:ApiPromise<{flavor:string}> ={
    status:200,
    data:{flavor:"masala"}
}


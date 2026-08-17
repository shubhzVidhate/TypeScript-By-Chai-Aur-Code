interface Todo{
    userId:number,
    id:number,
    title:string,
    completed:boolean
}



const fetchdata = async () => {
    try {
        const responce = await fetch("https://jsonplaceholder.typecode.com/todos/1");

        if(!responce.ok){
            throw new Error(`HTTP Error ${responce.status}`)
        }

        const data:Todo = await responce.json();

    } catch (error: any) {
        
    }
}
// import axios,{AxiosResponse} from "axios";
// this line show error line but work fine typescript tell install seperate functionality and types like this bellow
import axios from "axios";
import type { AxiosResponse } from "axios";

//  example
// axios.get("https://example.com/data")
// .then( responce => {
//     console.log(responce.data)
// })

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchdata = async () => {
  try {
    const responce: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typecode.com/todos/1",
    );
    console.log("Todos", responce.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("Axios Error", error.message);
      if (error.response) {
        console.log(error.response.status);
      }
    }
  }
};

import { useEffect, useState } from "react";
import axios from "axios";


function List(props) {
  
    const [data, setData] = useState([]);

    
  
    const getAllUsers = async () => {
      try {
        const url = "http://localhost:5000/getallusers";
        const head = "12 " + localStorage.getItem("token");
        const user = await axios.get(url, {
          headers: {
            tokn: head,
          },
        });
  
        //Console.log(data)
        //Console.log(data)
        //Console.log(data)
  
        setData(user.data);
        //Console.log(data)
        //Console.log(data)
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          console.log(error);
        }
      }
    };
  
    useEffect(() => {
      getAllUsers();
    }, []);
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List
// Display a list of all students fetched from the fake API.
// ● Each student record should display the name, grade, and a "Delete"

import { useEffect, useState } from "react";

function StudentList(){

    let [stud,setStudent]=useState([]);


    async function funFetch(){
        var response = await fetch(" https://jsonplaceholder.typicode.com/users")
        var result = await response.json()
        console.log(result);
        setStudent(result)
    }



    async function funDelete(id) {
        
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
              method: `DELETE`,
            }
          );
          var result = await response.json()
          console.log("Deleted !!",result)
         
      }

    useEffect(()=>{
        console.log("useEffect")
        funFetch();
    },[])

    


    return(<>
    <table border="2px">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gmail</th>
            <th>Action</th>
        </tr>
        {
            stud.map((x)=>{
                return(<tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td><a href="" onClick={funDelete}>Delete</a></td>
                    
                </tr>)
            })
        }
    </table>
    </>)
}
export default StudentList;
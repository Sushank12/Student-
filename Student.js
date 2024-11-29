import React, { useState } from 'react'

function Student(addStudent){
    let[name, setName]=useState("");
    let[grade, setGrade]=useState("");

    function Submit(event){
        event.preventDefault();
        addStudent({name, grade});
        setName("");
        setGrade("");
    };

    async function funAdd(){
        var response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        var result = await response.json();
        // setName(result);
        console.log("Added!!!!", result);
        // var response = await fetch(" https://jsonplaceholder.typicode.com/posts")
        // var result = await response.json()
        // console.log(result);
        // setName(result)
    }
  return (


        <form>
            Name:<input type='text' value={name} onChange={(event) => setName(event.target.value)}></input><br></br>
            Gmail:<input type='text' value={grade} onChange={(event) => setGrade(event.target.value)}></input><br></br>
            <button onClick={funAdd}>Submit</button>
        </form>
        /* ID:<input type='number'></input><br></br>
        Name:<input type='text' value={name} onChange={{event}=>setName(event.target.value)}</div>></input><br></br>
        Grade:<input type='text'></input><br></br>
        <input type='button' value='Submit'></input>
    </div> */
  )
}

export default Student;
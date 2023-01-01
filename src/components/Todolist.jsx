
import React, { useState } from 'react';
import moment from "moment";
function Todolist() {

  //date differece function
  const dateDifference = (date) => {
    return moment().diff(date, 'days');
  };

  const [task, setTask] = useState({
    name: "",
    date: "",
    completed: false,
  })
  const [itemsarray, setItemsArray] = useState([])

  //Add items
  const additems = () => {
    console.log()
    itemsarray.push(task);
    setItemsArray([...itemsarray]); //array update
    setTask({
      name: "",
      completed: false,
      date: "",
      index: 0
    })
  }

  // Input function
  const inputChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value })
  }

  // Remove items
  const removeItem = (index) => {
// we have to find the item on the basis of index
    
 // remove the item  from an array on the basis of index
    
    itemsarray.splice(index, 1);

    setItemsArray([...itemsarray]);//array update
  }

  //checkbox handle fuction:

  const handleCheckbox = (index) => {
    let item = itemsarray[index];   //value get 
    item.completed = !item.completed; // toggle
    itemsarray[index] = item;   // replace index base element
    setItemsArray([...itemsarray]);  //update final array
  };

  return (
    <main className={"container"}>

      <h1 >My Todo App</h1>

      <div className={"row"}>

        <div className={"col-md-4"} style={{ marginTop: "30px" }}>

          <input type={"text"} className={"form-control"} value={task.name} name={"name"} placeholder={"Task Name...."} onChange={inputChange} />
          <input type={"date"} style={{ marginTop: "20px" }} className={"form-control"} value={task.date} name={"date"} placeholder={"Task endate"} onChange={inputChange} /><br></br>

          <div>
            <button type="button" className="btn btn-outline-primary" onClick={additems} style={{
              display: "flex",
              alignItems: "center"
            }}>Add Todo</button>
          </div>

          <div className={"col-sm-6 col-md-12 offset-md-2 col-lg-12 offset-lg-0"} style={{ textAlign: "left", bottom: "150px", left: "500px", position: "relative" }}>

            <ul className={"list-group"}>
              {
                itemsarray.map((ele, i) => (
                  <span className="box" style={{ border: dateDifference(ele.date) > 0 ? '4px solid yellow' : '' }}>
                    <li key={i}
                      className="list-group-item list-group-item-danger" style={
                        ele.completed
                          ? { textDecoration: 'line-through', textDecorationColor: "red" }
                          : { textDecoration: 'none' }
                      }>

                      <input type="checkbox" style={{ right: "12px", bottom: "0.5px", position: "relative" }} class="form-check-input" value="" id="flexCheckDefault" onChange={() => handleCheckbox(i)} />

                      <strong>Task- </strong> {ele.name}   <strong>Completion Date -</strong> {ele.date}
                      <button className={"btn btn-danger"} style={{ marginLeft: "300px", top: "5px", position: "relative" }} onClick={() => removeItem(i)}>
                        Delete
                    </button>
                    </li>
                    {
                      dateDifference(ele.date) > 0 ? <span style={{ left: "30px", bottom: "50px", position: "relative", color: "green", fontWeight: "bold" }}>*Due day is passed </span> : ""
                    }
                  </span>

                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Todolist;
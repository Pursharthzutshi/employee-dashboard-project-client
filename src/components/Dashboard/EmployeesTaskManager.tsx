import React, { useEffect, useState } from "react";
import "../Dashboard/EmployeesTaskManager.css"
import AddTaskkDialogBox from "./AddTaskDialogBox";
import DisplayData from "./DisplayData";
// import AddTaskkDialogBox from "./AddTaskDialogBox";

function EmployeesTaskManager() {

    // const { data:FetchUserData, loading, error, refetch, showUsersEmailIdsQuery } = DisplayData();


    const [addTaskDialogBox,setAddTaskDialogBox] = useState<Boolean>(false);


    const showDialogBox = () =>{
        setAddTaskDialogBox(true)

    }

    return (
        <div className="tasks-component">
            <h3>Employees Task</h3>
            <button onClick={showDialogBox}>Add Posts</button>
{
   addTaskDialogBox && <AddTaskkDialogBox  setAddTaskDialogBox={setAddTaskDialogBox}/>
}

        </div>
    )
}

export default EmployeesTaskManager;
import React, { useEffect, useState } from "react";
import "../Dashboard/EmployeesTaskManager.css"
import ShowEmployeesTask from "./ShowEmployeesTask";
import EmployeesTaskManagerDialogBox from "./AddEmployeesTaskManagerDialogBox";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setShowEmployeesDialogBox } from "../../slicers/ShowEmployeesDialogBoxSlicer";
import AddEmployeesTaskManagerDialogBox from "./AddEmployeesTaskManagerDialogBox";
// import AddTaskkDialogBox from "./AddTaskDialogBox";

function EmployeesTaskManager() {
    // const employeeName = useAppSelector((state) => state.AddEmployeesTaskSlicer.employeeName)

    const dialogBox = useAppSelector((state) => state.ShowEmployeesDialogBoxSlicer.showEmployeesDialogBox)
    const Dispatch = useAppDispatch();

    const showDialogBox = () => {
        Dispatch(setShowEmployeesDialogBox(true));
    }

    return (
        <div className="tasks-component">
            <h3>Employees Task</h3>
            <button onClick={showDialogBox}>Add Posts</button>
            {
                dialogBox && <AddEmployeesTaskManagerDialogBox />
            }

            <ShowEmployeesTask />

        </div>
    )
}

export default EmployeesTaskManager;